import { Theme, lightTheme } from './light';
import { palette } from './tokens';

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: palette.gray900,
    surface: palette.gray800,
    surfaceSubdued: palette.gray700,
    textPrimary: palette.gray50,
    textSecondary: palette.gray300,
    textDisabled: palette.gray600,
    textPlaceholder: palette.gray400,
    borderFocused: palette.gray200,
    border: palette.gray700,
    primary: palette.green300,
    primarySubdued: palette.green600,
    danger: palette.red300,
    dangerSubdued: palette.red600,
  },
  inputVariants: {
    ...lightTheme.inputVariants,
    defaults: {
      ...lightTheme.inputVariants.defaults,

      color: 'textPrimary',
    },
    default: {
      ...lightTheme.inputVariants.default,
      borderColor: 'border',
    },
    focused: {
      ...lightTheme.inputVariants.focused,
      borderColor: 'borderFocused',
    },
  },
};
