import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TrashBinsScreen from '../screens/TrashBinsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { Ionicons } from '@expo/vector-icons';

// Tipagem das rotas da Tab
export type AppTabParamList = {
  Home: undefined;
  Perfil: undefined;
  TrashBins: undefined;
  TrashBinDetails: { id: string };
  Notificações: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppStack = () => {
  return (
    <Tab.Navigator
      {...({
        screenOptions: ({ route }: { route: { name: keyof AppTabParamList } }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#111' },
          tabBarActiveTintColor: '#2ecc71',
          tabBarInactiveTintColor: '#aaa',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            const icons = {
              Home: 'home',
              Perfil: 'person',
              TrashBins: 'trash',
              Notificações: 'notifications',
            } as const;

            const iconName = icons[route.name as keyof typeof icons] || 'ellipse';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }),
      } as React.ComponentProps<typeof Tab.Navigator>)}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="TrashBins" component={TrashBinsScreen} />
      <Tab.Screen name="Notificações" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;