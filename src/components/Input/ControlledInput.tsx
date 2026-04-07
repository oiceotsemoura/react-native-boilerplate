import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Input } from './index';
import { TextInputProps } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@theme/index';

interface ControlledInputProps<T extends FieldValues>
  extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  disabled?: boolean;
}

export function ControlledInput<T extends FieldValues>({
  control,
  name,
  label,
  disabled = false,
  ...textInputProps
}: ControlledInputProps<T>) {
  const theme = useTheme<Theme>();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <Input
          label={label}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error?.message}
          disabled={disabled}
          placeholderTextColor={theme.colors.textPlaceholder}
          {...textInputProps}
        />
      )}
    />
  );
}
