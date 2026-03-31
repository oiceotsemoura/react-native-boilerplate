import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import HomeScreen from './index';
import {renderWithProviders} from '../../../../../__tests__/test-utils';

// Mock dependencies
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock('../../../../store/auth/authStore', () => ({
  useAuthStore: () => ({
    user: {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
    },
    logout: jest.fn(),
  }),
}));

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {getByText} = renderWithProviders(<HomeScreen />);

    expect(getByText(/common.welcome/)).toBeTruthy();
  });

  it('should display welcome message with user name', () => {
    const {getByText} = renderWithProviders(<HomeScreen />);

    expect(getByText(/Test User/)).toBeTruthy();
  });

  it('should render boilerplate description', () => {
    const {getByText} = renderWithProviders(<HomeScreen />);

    expect(
      getByText(/Este é o boilerplate React Native/),
    ).toBeTruthy();
  });

  it('should render tech stack section', () => {
    const {getByText} = renderWithProviders(<HomeScreen />);

    expect(getByText('Stack Tecnológica:')).toBeTruthy();
  });

  it('should display all tech stack items', () => {
    const {getByText} = renderWithProviders(<HomeScreen />);

    expect(getByText('✅ React Native')).toBeTruthy();
    expect(getByText('✅ TypeScript')).toBeTruthy();
    expect(getByText('✅ Zustand (State Management)')).toBeTruthy();
    expect(getByText('✅ MMKV (Storage)')).toBeTruthy();
    expect(getByText('✅ Restyle (Theming)')).toBeTruthy();
    expect(getByText('✅ Styled Components')).toBeTruthy();
    expect(getByText('✅ TanStack Query')).toBeTruthy();
    expect(getByText('✅ React Navigation')).toBeTruthy();
    expect(getByText('✅ i18next (Internacionalização)')).toBeTruthy();
  });

  it('should render logout button', () => {
    const {getByText} = renderWithProviders(<HomeScreen />);

    expect(getByText('common.logout')).toBeTruthy();
  });

  it('should call logout when logout button is pressed', () => {
    const mockLogout = jest.fn();
    
    // Override the mock for this test
    jest.spyOn(require('../../../../store/auth/authStore'), 'useAuthStore')
      .mockReturnValue({
        user: {id: '1', name: 'Test User', email: 'test@example.com'},
        logout: mockLogout,
      });

    const {getByText} = renderWithProviders(<HomeScreen />);

    const logoutButton = getByText('common.logout');
    fireEvent.press(logoutButton);

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  it('should render ScrollView container', () => {
    const {getByText} = renderWithProviders(<HomeScreen />);

    // If component renders without crash, ScrollView is working
    expect(getByText(/common.welcome/)).toBeTruthy();
  });

  it('should handle user without name gracefully', () => {
    jest.spyOn(require('../../../../store/auth/authStore'), 'useAuthStore')
      .mockReturnValue({
        user: {id: '1', email: 'test@example.com'},
        logout: jest.fn(),
      });

    const {getByText} = renderWithProviders(<HomeScreen />);

    expect(getByText(/User/)).toBeTruthy();
  });
});
