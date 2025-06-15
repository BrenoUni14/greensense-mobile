import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  userToken: string | null;
  userName: string | null;
  login: (token: string, nome: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  userToken: null,
  userName: null,
  login: () => { },
  logout: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const loadStoredAuth = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      const storedName = await AsyncStorage.getItem('userName');
      setUserToken(storedToken);
      setUserName(storedName);
    };
    loadStoredAuth();
  }, []);

  const login = async (token: string, nome: string) => {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userName', nome);
    setUserToken(token);
    setUserName(nome);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userName');
    setUserToken(null);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};