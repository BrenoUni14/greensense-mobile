import api from './api';

export type Lixeira = {
  id: string;
  endereco: string;
  nivel: number;
};

export type Coleta = {
  id: string;
  lixeiraId: string;
};

export const getLixeiras = async (): Promise<Lixeira[]> => {
  const response = await api.get<Lixeira[]>('/lixeiras');
  return response.data;
};

export const getColetas = async (): Promise<Coleta[]> => {
  const response = await api.get<Coleta[]>('/coletas');
  return response.data;
};