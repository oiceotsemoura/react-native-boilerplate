import { color, createTheme } from '@shopify/restyle';
import { palette, spacing, borderRadii } from './tokens';

const theme = {
  colors: {
    // superfícies
    background: palette.gray50,
    surface: palette.gray0,
    surfaceSubdued: palette.gray100,

    // texto
    textPrimary: palette.gray900,
    textSecondary: palette.gray600,
    textDisabled: palette.gray400,
    textOnPrimary: palette.gray0,
    textOnDanger: palette.gray0,
    textPlaceholder: palette.gray400,
    // ações
    primary: palette.green500,
    primarySubdued: palette.green50,

    // feedback
    danger: palette.red400,
    dangerSubdued: palette.red50,
    success: palette.green500,
    warning: palette.yellow400,

    // bordas
    border: palette.gray200,
    borderFocused: palette.blue400,

    ...palette,
  },
  spacing,
  borderRadii,

  // ─── Button ───────────────────────────────────────────
  buttonVariants: {
    defaults: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'md',
      borderWidth: 1,
    },
    primary: {
      backgroundColor: 'primary',
      borderColor: 'primary',
    },
    secondary: {
      backgroundColor: 'surface',
      borderColor: 'border',
    },
    danger: {
      backgroundColor: 'danger',
      borderColor: 'danger',
    },
    ghost: {
      backgroundColor: 'transparent',
      borderColor: 'primary',
    },
    disabled: {
      backgroundColor: 'surfaceSubdued',
      borderColor: 'border',
    },
  },

  buttonSizeVariants: {
    defaults: {},
    sm: { paddingVertical: 'xs', paddingHorizontal: 'sm' },
    md: { paddingVertical: 'sm', paddingHorizontal: 'md' },
    lg: { paddingVertical: 'md', paddingHorizontal: 'lg' },
  },

  // ─── Input ────────────────────────────────────────────
  inputVariants: {
    defaults: {
      borderWidth: 1,
      borderRadius: 'md',
      padding: 'sm',
      backgroundColor: 'surface',
      color: 'textPrimary',
    },
    default: {
      borderColor: 'border',
    },
    focused: {
      borderColor: 'borderFocused',
    },
    error: {
      borderColor: 'danger',
      backgroundColor: 'dangerSubdued',
    },
    disabled: {
      borderColor: 'border',
      backgroundColor: 'surfaceSubdued',
    },
  },

  // ─── Card ─────────────────────────────────────────────
  cardVariants: {
    defaults: {
      borderRadius: 'md',
      padding: 'md',
      backgroundColor: 'surface',
    },
    elevated: {
      backgroundColor: 'surface',
      borderWidth: 0,
    },
    outlined: {
      backgroundColor: 'surface',
      borderWidth: 1,
      borderColor: 'border',
    },
    filled: {
      backgroundColor: 'surfaceSubdued',
      borderWidth: 0,
    },
    disabled: {
      backgroundColor: 'surfaceSubdued',
      borderWidth: 1,
      borderColor: 'border',
    },
  },

  // ─── Text ─────────────────────────────────────────────
  textVariants: {
    defaults: {
      color: 'textPrimary',
      fontFamily: 'System',
    },
    heading1: { fontSize: 32, fontWeight: '700', color: 'textPrimary' },
    heading2: { fontSize: 28, fontWeight: '700', color: 'textPrimary' },
    heading3: { fontSize: 24, fontWeight: '600', color: 'textPrimary' },
    subtitle: { fontSize: 17, fontWeight: '500', color: 'textPrimary' },
    body: { fontSize: 15, fontWeight: '400', color: 'textPrimary' },
    bodyStrong: { fontSize: 15, fontWeight: '600', color: 'textPrimary' },
    caption: { fontSize: 13, fontWeight: '400', color: 'textSecondary' },
    label: { fontSize: 11, fontWeight: '500', color: 'textSecondary' },
    disabled: { fontSize: 15, fontWeight: '400', color: 'textDisabled' },
    placeholder: { fontSize: 15, fontWeight: '400', color: 'textPlaceholder' },
  },
};

export type Theme = typeof theme;
export const lightTheme = createTheme<Theme>(theme);
