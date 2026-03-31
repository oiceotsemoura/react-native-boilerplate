import React from 'react';
import { SignInHeader } from './SignInHeader';
import { renderWithProviders } from '../../../../../../../__tests__/test-utils';

describe('SignInHeader Component', () => {
  it('should render correctly', () => {
    const { getByText } = renderWithProviders(<SignInHeader />);

    expect(getByText('React Native Boilerplate')).toBeTruthy();
  });

  it('should render logo emoji', () => {
    const { getByText } = renderWithProviders(<SignInHeader />);

    expect(getByText('🚀')).toBeTruthy();
  });

  it('should render app name', () => {
    const { getByText } = renderWithProviders(<SignInHeader />);

    const appName = getByText('React Native Boilerplate');
    expect(appName).toBeTruthy();
  });

  it('should have correct structure', () => {
    const { getByText } = renderWithProviders(<SignInHeader />);

    const logo = getByText('🚀');
    const appName = getByText('React Native Boilerplate');

    expect(logo).toBeTruthy();
    expect(appName).toBeTruthy();
  });
});
