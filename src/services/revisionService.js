import api from './api';

export const getRevisoes = async () => {
  const response = await api.get('/revisoes');
  return response.data;
};

export const createRevisao = async (revisao) => {
  const response = await api.post('/revisoes', revisao);
  return response.data;
};

export const updateRevisao = async (id, revisao) => {
  const response = await api.put(`/revisoes/${id}`, revisao);
  return response.data;
};

export const deleteRevisao = async (id) => {
  await api.delete(`/revisoes/${id}`);
};
