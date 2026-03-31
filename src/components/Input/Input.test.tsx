import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { Input } from './index';
import { renderWithProviders } from '../../../__tests__/test-utils';

describe('Input Component', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText } = renderWithProviders(
      <Input placeholder="Enter text" value="" onChangeText={() => {}} />,
    );

    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('should render with label', () => {
    const { getByText } = renderWithProviders(
      <Input
        label="Email"
        placeholder="email@example.com"
        value=""
        onChangeText={() => {}}
      />,
    );

    expect(getByText('Email')).toBeTruthy();
  });

  it('should call onChangeText when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = renderWithProviders(
      <Input
        placeholder="Type here"
        value=""
        onChangeText={onChangeTextMock}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('Type here'), 'new text');

    expect(onChangeTextMock).toHaveBeenCalledWith('new text');
  });

  it('should display error message when error prop is provided', () => {
    const { getByText } = renderWithProviders(
      <Input
        placeholder="Email"
        value=""
        onChangeText={() => {}}
        error="Invalid email"
      />,
    );

    expect(getByText('Invalid email')).toBeTruthy();
  });

  it('should not display error message when error prop is not provided', () => {
    const { queryByText } = renderWithProviders(
      <Input placeholder="Email" value="" onChangeText={() => {}} />,
    );

    expect(queryByText('Invalid email')).toBeNull();
  });

  it('should handle focus and blur events', () => {
    const { getByPlaceholderText } = renderWithProviders(
      <Input placeholder="Focus test" value="" onChangeText={() => {}} />,
    );

    const input = getByPlaceholderText('Focus test');

    fireEvent(input, 'focus');
    fireEvent(input, 'blur');

    // Component should handle focus/blur without errors
    expect(input).toBeTruthy();
  });

  it('should pass through additional TextInput props', () => {
    const { getByPlaceholderText } = renderWithProviders(
      <Input
        placeholder="Password"
        value=""
        onChangeText={() => {}}
        secureTextEntry
        autoCapitalize="none"
      />,
    );

    const input = getByPlaceholderText('Password');
    expect(input.props.secureTextEntry).toBe(true);
    expect(input.props.autoCapitalize).toBe('none');
  });

  it('should display label when provided', () => {
    const { getByText, getByPlaceholderText } = renderWithProviders(
      <Input
        label="Username"
        placeholder="Enter username"
        value=""
        onChangeText={() => {}}
      />,
    );

    expect(getByText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Enter username')).toBeTruthy();
  });
});
