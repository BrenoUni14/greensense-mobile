import api from './api';

export type Coleta = {
    lixeiraId: string;
    quantidadeColetada: number;
    responsavel: string;
    metodo: string;
  };
  
  export const registrarColeta = async (coleta: Coleta): Promise<void> => {
    await api.post('/coletas', coleta);
  };