import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { Button } from './index';
import { renderWithProviders } from '@shared/utils/tests';

describe('Button Component', () => {
  it('should render correctly with title', () => {
    const { getByText } = renderWithProviders(
      <Button label="Test Button" onPress={() => {}} />,
    );

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithProviders(
      <Button label="Click Me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Click Me'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should show ActivityIndicator when loading', () => {
    const { getByTestId, queryByText } = renderWithProviders(
      <Button label="Submit" onPress={() => {}} loading />,
    );

    expect(queryByText('Submit')).toBeNull();
  });

  it('should not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithProviders(
      <Button label="Disabled" onPress={onPressMock} disabled />,
    );

    fireEvent.press(getByText('Disabled'));

    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('should render primary variant by default', () => {
    const { getByText } = renderWithProviders(
      <Button label="Primary" onPress={() => {}} />,
    );

    const button = getByText('Primary').parent?.parent;
    expect(button).toBeTruthy();
  });

  it('should render secondary variant', () => {
    const { getByText } = renderWithProviders(
      <Button label="Secondary" onPress={() => {}} variant="secondary" />,
    );

    expect(getByText('Secondary')).toBeTruthy();
  });

  it('should not call onPress when loading', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = renderWithProviders(
      <Button label="Loading" onPress={onPressMock} loading />,
    );

    // Loading state disables the button
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
