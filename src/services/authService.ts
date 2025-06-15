import api from './api';

export type AuthRequest = {
  email: string;
  senha: string;
};

export type AuthResponse = {
  token: string;
  nome: string;
};

export const loginRequest = async (credentials: AuthRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};

type RegisterRequest = {
  nome: string;
  email: string;
  senha: string;
};

export const registerRequest = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', data);
  return response.data;
};