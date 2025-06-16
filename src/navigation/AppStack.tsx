import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TrashBinsScreen from '../screens/TrashBinsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from '../screens/MapScreen';

export type AppTabParamList = {
  Home: undefined;
  Perfil: undefined;
  Lixeiras: undefined;
  Notificações: undefined;
  Mapa: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppStack = () => {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#111' },
        tabBarActiveTintColor: '#2ecc71',
        tabBarInactiveTintColor: '#aaa',
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Perfil: 'person',
            Lixeiras: 'trash',
            Notificações: 'notifications',
          } as const;

          const iconName = icons[route.name as keyof typeof icons] || 'ellipse';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Lixeiras" component={TrashBinsScreen} />
      {/* <Tab.Screen name="Mapa" component={MapScreen} /> */}
      <Tab.Screen name="Notificações" component={NotificationsScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;