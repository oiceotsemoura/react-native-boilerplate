import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  SpacingProps,
  spacing,
} from '@shopify/restyle';
import { View } from 'react-native';
import { Theme } from '@theme/index';

const variant = createVariant<Theme, 'cardVariants'>({
  themeKey: 'cardVariants',
});

type CardProps = VariantProps<Theme, 'cardVariants'> &
  SpacingProps<Theme> & {
    children: React.ReactNode;
    disabled?: boolean;
  };

const CardBase = createRestyleComponent<CardProps & any, Theme>(
  [variant, spacing],
  View,
);

export const Card = ({
  disabled = false,
  variant = 'outlined',
  ...rest
}: CardProps) => (
  <CardBase variant={disabled ? 'disabled' : variant} {...rest} />
);
