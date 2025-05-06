import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootNavigator = () => {
  const { userToken } = useContext(AuthContext);
  return userToken ? <AppStack /> : <AuthStack />;
};

export default RootNavigator;
