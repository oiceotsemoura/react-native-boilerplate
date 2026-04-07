import React from 'react';
import { Box, Text } from '@components/index';

export const SignInHeader: React.FC = () => {
  return (
    <Box alignItems="center" style={{ marginBottom: 32 }}>
      <Text style={{ fontSize: 64, marginBottom: 8 }}>🚀</Text>
      <Text variant="subtitle" color="primary">
        React Native Boilerplate
      </Text>
    </Box>
  );
};
