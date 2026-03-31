import React from 'react';
import '@locales/index';
import { AppThemeProvider } from '@components/index';
import { RootNavigator } from '@navigation/index';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@service/config';

export default function App() {
  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </AppThemeProvider>
  );
}
