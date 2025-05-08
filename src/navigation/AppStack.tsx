import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserListScreen from '../screens/UserListScreen';
import UserFormScreen from '../screens/UserFormScreen';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  const { userRole } = useContext(AuthContext);

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
            Usuários: 'people',
          } as const;

          const iconName = icons[route.name as keyof typeof icons] || 'ellipse';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      {userRole === 'ADMIN' && <Tab.Screen name="Usuários" component={UserListScreen} />}
      <Tab.Screen name="UserForm" component={UserFormScreen} options={{ tabBarButton: () => null, tabBarStyle: { display: 'none' } }} />
    </Tab.Navigator>
  );
};

export default AppStack;
