import api from './api';

export const getTrashBins = async () => {
  try {
    const response = await api.get('/api/lixeiras');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar lixeiras:', error);
    throw error;
  }
};

export const createTrashBin = async (trashBin) => {
  try {
    const response = await api.post('/api/lixeiras', trashBin);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar lixeira:', error);
    throw error;
  }
};

export const updateTrashBin = async (id, trashBin) => {
  try {
    const response = await api.put(`/api/lixeiras/${id}`, trashBin);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar lixeira:', error);
    throw error;
  }
};

export const deleteTrashBin = async (id) => {
  try {
    await api.delete(`/api/lixeiras/${id}`);
  } catch (error) {
    console.error('Erro ao deletar lixeira:', error);
    throw error;
  }
};