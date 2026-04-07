import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  SpacingProps,
  spacing,
} from '@shopify/restyle';
import { Theme } from '@theme/index';
import { Text } from '@components/Text';

const variant = createVariant<Theme, 'buttonVariants'>({
  themeKey: 'buttonVariants',
});

const sizeVariant = createVariant<Theme, 'buttonSizeVariants'>({
  themeKey: 'buttonSizeVariants',
  property: 'size',
});

type RestyleProps = VariantProps<Theme, 'buttonVariants'> &
  VariantProps<Theme, 'buttonSizeVariants', 'size'> &
  SpacingProps<Theme>;

const ButtonBase = createRestyleComponent<RestyleProps & any, Theme>(
  [variant, sizeVariant, spacing],
  TouchableOpacity,
);

// Cor do label por variante
const labelColorMap = {
  primary: 'textOnPrimary',
  secondary: 'textPrimary',
  danger: 'textOnDanger',
  ghost: 'primary',
  disabled: 'textDisabled',
} as const;

interface ButtonProps extends RestyleProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
}
export const Button = ({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  const activeVariant = isDisabled ? 'disabled' : variant;
  const labelColor = labelColorMap[activeVariant];

  return (
    <ButtonBase
      variant={activeVariant}
      size={size}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={isDisabled ? 1 : 0.8}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          {iconLeft}
          <Text variant="body" color={labelColor}>
            {label}
          </Text>
        </>
      )}
    </ButtonBase>
  );
};
