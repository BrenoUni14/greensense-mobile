import api from './api';

export type Lixeira = {
  id: string;
  nivel: number;
};

export const getLixeiras = async (): Promise<Lixeira[]> => {
  const response = await api.get<Lixeira[]>('/lixeiras');
  return response.data;
};

export type DetalheLixeira = {
    id: string;
    nivel: number;
    ultimoRegistro: string;
    statusSensor: string;
    endereco: string;
  };
  
  export const getLixeiraById = async (id: string): Promise<DetalheLixeira> => {
    const response = await api.get<DetalheLixeira>(`/lixeiras/${id}`);
    return response.data;
  };