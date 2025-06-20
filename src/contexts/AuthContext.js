import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@greensense:user');
      const storagedToken = await AsyncStorage.getItem('@greensense:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email, password) {
    const response = await api.post('/auth/login', { email, password });
    const { token, user: userData } = response.data;

    await AsyncStorage.setItem('@greensense:user', JSON.stringify(userData));
    await AsyncStorage.setItem('@greensense:token', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(userData);
  }

  async function signUp(name, email, password) {
    await api.post('/auth/register', { name, email, password });
    await signIn(email, password); // Faz login automático após criar
  }

  async function signOut() {
    await AsyncStorage.removeItem('@greensense:user');
    await AsyncStorage.removeItem('@greensense:token');
    api.defaults.headers.Authorization = '';
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      loading,
      signIn,
      signUp,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}