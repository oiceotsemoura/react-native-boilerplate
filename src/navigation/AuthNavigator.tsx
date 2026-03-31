import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../features/Auth/SignIn/screens/SignInScreen';
import { Routes, type RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.LOGIN} component={SignInScreen} />
    </Stack.Navigator>
  );
};
