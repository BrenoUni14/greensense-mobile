import api from './api';

export const getOcorrencias = async () => {
  const response = await api.get('/ocorrencias');
  return response.data;
};

export const createOcorrencia = async (ocorrencia) => {
  const response = await api.post('/ocorrencias', ocorrencia);
  return response.data;
};

export const updateOcorrencia = async (id, ocorrencia) => {
  const response = await api.put(`/ocorrencias/${id}`, ocorrencia);
  return response.data;
};

export const deleteOcorrencia = async (id) => {
  await api.delete(`/ocorrencias/${id}`);
};
