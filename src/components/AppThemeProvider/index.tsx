// components/ThemeProvider.tsx
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { lightTheme, darkTheme } from '@theme/index';
import { ReactNode } from 'react';
import { useThemeStore } from '@store/theme/themeStore';

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const scheme = useColorScheme();
  const mode = useThemeStore(state => state.mode);

  const resolved = mode === 'system' ? scheme ?? 'light' : mode;
  const theme = resolved === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
