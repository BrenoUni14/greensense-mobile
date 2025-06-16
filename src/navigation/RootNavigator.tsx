import React, { useContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import TrashBinDetailsScreen from '../screens/TrashBinDetailsScreen';
import { View, ActivityIndicator } from 'react-native';

export type RootStackParamList = {
  Tabs: undefined;
  TrashBinDetails: { id: string; nivel: number };
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { userToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  if (!userToken) return <AuthStack />;

  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={AppStack} />
      <Stack.Screen name="TrashBinDetails" component={TrashBinDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;