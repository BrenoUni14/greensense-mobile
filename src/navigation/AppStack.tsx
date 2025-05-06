import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

export type RootTabParamList = {
  Home: undefined;
  Perfil: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#111' },
        tabBarActiveTintColor: '#2ecc71',
        tabBarInactiveTintColor: '#aaa',
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Perfil: 'person',
          } as const;

          const iconName = icons[route.name as keyof typeof icons];

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;