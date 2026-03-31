import React from 'react';
import { ScrollView } from 'react-native';
import { useAuthStore } from '@store/auth/authStore';
import { Button, Box, Text, Card } from '@components/index';
import { useThemeStore } from '@store/theme/themeStore';
import { useTranslation } from 'react-i18next';

export const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuthStore();
  const { toggleTheme } = useThemeStore();

  return (
    <Box flex={1} backgroundColor="background">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text variant="heading2" marginBottom="xs">
          {t('common.welcome')}, {user?.name || 'User'}!
        </Text>

        <Text variant="body" color="textSecondary" marginBottom="xl">
          Este é o boilerplate React Native com Zustand, MMKV, Restyle, Styled
          Components, TanStack Query e TypeScript.
        </Text>

        <Card padding="md" marginBottom="lg">
          <Text variant="subtitle" marginBottom="md">
            Stack Tecnológica:
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ React Native
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ TypeScript
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ Zustand (State Management)
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ MMKV (Storage)
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ Restyle (Theming)
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ Styled Components
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ TanStack Query
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ React Navigation
          </Text>
          <Text variant="body" color="textPrimary" marginBottom="xs">
            ✅ i18next (Internacionalização)
          </Text>
        </Card>

        <Box marginTop="md">
          <Box marginBottom="sm">
            <Button
              label={t('common.toggle_theme')}
              onPress={toggleTheme}
              variant="primary"
            />
          </Box>

          <Button
            label={t('common.logout')}
            onPress={logout}
            variant="secondary"
          />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
