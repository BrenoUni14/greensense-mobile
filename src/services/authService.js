import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  const token = response.data.token;
  await AsyncStorage.setItem('token', token);
  return token;
};

export const register = async (email, password, name) => {
  const response = await api.post('/auth/register', { email, password, name });
  const token = response.data.token;
  await AsyncStorage.setItem('token', token);
  return token;
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};

export const getToken = async () => {
  return await AsyncStorage.getItem('token');
};