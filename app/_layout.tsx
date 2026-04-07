import '@locales/index';
import { Stack } from 'expo-router';
import { AppThemeProvider } from '@components/index';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@service/config';
import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { useAuthStore } from '@store/auth/authStore';

export default function RootLayout() {
  const { isAuthenticated } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (
      // Se o usuário não está autenticado e não está no grupo auth
      !isAuthenticated &&
      !inAuthGroup
    ) {
      router.replace('/(auth)/login');
    } else if (isAuthenticated && inAuthGroup) {
      // Se o usuário está autenticado e está no grupo auth
      router.replace('/(app)/home');
    }
  }, [isAuthenticated, segments]);

  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </AppThemeProvider>
  );
}
