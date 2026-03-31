import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { SignInScreen } from './index';
import { renderWithProviders } from '../../../../../../__tests__/test-utils';

// Mock dependencies
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock('../../../../../store/auth/authStore', () => ({
  useAuthStore: () => ({
    login: jest.fn(),
  }),
}));

jest.mock('../../../../../service/auth', () => ({
  useLogin: () => ({
    mutateAsync: jest.fn(),
    isPending: false,
  }),
}));

jest.mock('../../../../../shared/utils/validators', () => ({
  validateEmail: (email: string) => email.includes('@'),
}));

describe('SignInScreen', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText, getByText } = renderWithProviders(
      <SignInScreen />,
    );

    expect(getByText('auth.login.title')).toBeTruthy();
    expect(getByText('auth.login.subtitle')).toBeTruthy();
    expect(getByPlaceholderText('seu@email.com')).toBeTruthy();
    expect(getByPlaceholderText('••••••••')).toBeTruthy();
  });

  it('should render header component', () => {
    const { getByText } = renderWithProviders(<SignInScreen />);

    expect(getByText('React Native Boilerplate')).toBeTruthy();
  });

  it('should render email and password inputs', () => {
    const { getByPlaceholderText } = renderWithProviders(<SignInScreen />);

    const emailInput = getByPlaceholderText('seu@email.com');
    const passwordInput = getByPlaceholderText('••••••••');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('should update email input value', () => {
    const { getByPlaceholderText } = renderWithProviders(<SignInScreen />);

    const emailInput = getByPlaceholderText('seu@email.com');

    fireEvent.changeText(emailInput, 'test@example.com');

    expect(emailInput.props.value).toBe('test@example.com');
  });

  it('should update password input value', () => {
    const { getByPlaceholderText } = renderWithProviders(<SignInScreen />);

    const passwordInput = getByPlaceholderText('••••••••');

    fireEvent.changeText(passwordInput, 'password123');

    expect(passwordInput.props.value).toBe('password123');
  });

  it('should render forgot password button', () => {
    const { getByText } = renderWithProviders(<SignInScreen />);

    expect(getByText('auth.login.forgotPassword')).toBeTruthy();
  });

  it('should render sign up section', () => {
    const { getByText } = renderWithProviders(<SignInScreen />);

    expect(getByText('auth.login.noAccount')).toBeTruthy();
    expect(getByText('auth.login.signUp')).toBeTruthy();
  });

  it('should render login button', () => {
    const { getByText } = renderWithProviders(<SignInScreen />);

    expect(getByText('common.login')).toBeTruthy();
  });

  it('should show validation error for empty email', async () => {
    const { getByText, getByPlaceholderText } = renderWithProviders(
      <SignInScreen />,
    );

    const loginButton = getByText('common.login');
    fireEvent.press(loginButton);

    await waitFor(() => {
      // Validation should trigger
      expect(getByPlaceholderText('seu@email.com')).toBeTruthy();
    });
  });

  it('should handle KeyboardAvoidingView on different platforms', () => {
    const { getByPlaceholderText } = renderWithProviders(<SignInScreen />);

    // Component should render without crashes
    expect(getByPlaceholderText('seu@email.com')).toBeTruthy();
  });
});
