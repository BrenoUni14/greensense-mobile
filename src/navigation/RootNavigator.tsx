import React, { useContext, useState, useEffect } from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import { View, ActivityIndicator } from 'react-native';

const RootNavigator = () => {
  const { userToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthReady = async () => {
      // aguarda 500ms para garantir carregamento do contexto
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    };

    checkAuthReady();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  return userToken ? <AppStack /> : <AuthStack />;
};

export default RootNavigator;
