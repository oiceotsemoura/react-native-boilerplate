import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  SpacingProps,
  spacing,
  useTheme,
} from '@shopify/restyle';
import { Theme } from '@theme/index';
import { Text } from '@components/Text';
import { Box } from '@components/Box';

const variant = createVariant<Theme, 'inputVariants'>({
  themeKey: 'inputVariants',
});

type RestyleProps = VariantProps<Theme, 'inputVariants'> & SpacingProps<Theme>;

const InputBase = createRestyleComponent<RestyleProps & any, Theme>(
  [variant, spacing],
  TextInput,
);

interface InputProps extends RestyleProps, TextInputProps {
  label?: string;
  error?: string;
  disabled?: boolean;
}

export const Input = ({
  label,
  error,
  disabled = false,
  variant = 'default',
  ...rest
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const theme = useTheme<Theme>();

  const activeVariant = disabled
    ? 'disabled'
    : error
    ? 'error'
    : focused
    ? 'focused'
    : variant;

  return (
    <Box marginBottom="sm">
      {label && (
        <Text variant="label" marginBottom="xs">
          {label}
        </Text>
      )}

      <InputBase
        variant={activeVariant}
        editable={!disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={theme.colors.textPlaceholder}
        {...rest}
      />

      {error && (
        <Text variant="caption" color="danger" marginTop="xs">
          {error}
        </Text>
      )}
    </Box>
  );
};
