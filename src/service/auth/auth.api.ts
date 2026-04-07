import { api } from '../config';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from './types';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return {
    user: { id: '1', email: data.email, name: 'John Doe' },
    token: 'fake-jwt-token',
  };
  const response = await api.post<LoginResponse>('/auth/login', data);
  return response.data;
};

export const register = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('/auth/register', data);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};
