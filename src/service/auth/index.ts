import { useMutation } from '@tanstack/react-query';

import * as authApi from './auth.api';

export const useLogin = () => {
  return useMutation({
    mutationFn: authApi.login,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: authApi.register,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: authApi.logout,
  });
};
