import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  userToken: string | null;
  userName: string | null;
  userId: string | null;
  login: (token: string, id: string, nome: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  userToken: null,
  userName: null,
  userId: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const loadStoredAuth = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      const storedName = await AsyncStorage.getItem('userName');
      const storedId = await AsyncStorage.getItem('userId');
      setUserToken(storedToken);
      setUserName(storedName);
      setUserId(storedId);
    };
    loadStoredAuth();
  }, []);

  const login = async (token: string, id: string, nome: string) => {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userId', id);
    await AsyncStorage.setItem('userName', nome);
    setUserToken(token);
    setUserId(id);
    setUserName(nome);
  };

  const logout = async () => {
    await AsyncStorage.multiRemove(['userToken', 'userId', 'userName']);
    setUserToken(null);
    setUserId(null);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, userName, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};