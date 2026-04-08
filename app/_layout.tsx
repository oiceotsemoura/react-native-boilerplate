import '@locales/index';
import { Stack } from 'expo-router';
import { AppThemeProvider } from '@components/index';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@service/config';

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </AppThemeProvider>
  );
}
