import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, ControlledInput, Box, Text } from '@components/index';
import { useSignIn } from './useSignIn';
import { SignInHeader } from './components/SignInHeader';

export const SignInScreen: React.FC = () => {
  const { t } = useTranslation();
  const {
    control,
    isLoading,
    handleSignIn,
    handleForgotPassword,
    handleSignUp,
  } = useSignIn();

  return (
    <Box flex={1} backgroundColor="surface">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Box flex={1} padding="lg" justifyContent="center">
            <SignInHeader />

            <Box style={{ marginBottom: 48 }}>
              <Text variant="heading1" marginBottom="xs">
                {t('auth.login.title')}
              </Text>
              <Text variant="body" color="textSecondary">
                {t('auth.login.subtitle')}
              </Text>
            </Box>

            <Box marginBottom="lg">
              <ControlledInput
                control={control}
                name="email"
                label={t('common.email')}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                placeholder="seu@email.com"
              />

              <ControlledInput
                control={control}
                name="password"
                label={t('common.password')}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
                placeholder="••••••••"
              />

              <TouchableOpacity
                onPress={handleForgotPassword}
                style={{ alignSelf: 'flex-end', marginTop: 8, marginBottom: 24 }}
              >
                <Text variant="bodyStrong" color="primary">
                  {t('auth.login.forgotPassword')}
                </Text>
              </TouchableOpacity>
            </Box>

            <Button
              label={t('common.login')}
              onPress={handleSignIn}
              loading={isLoading}
              disabled={isLoading}
            />

            <Box flexDirection="row" justifyContent="center" alignItems="center" marginTop="lg">
              <Text variant="body" color="textSecondary">
                {t('auth.login.noAccount')}
              </Text>
              <TouchableOpacity onPress={handleSignUp} style={{ marginLeft: 4 }}>
                <Text variant="bodyStrong" color="primary">
                  {t('auth.login.signUp')}
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default SignInScreen;
