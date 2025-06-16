import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack';
import TrashBinDetailsScreen from '../screens/TrashBinDetailsScreen';

type RootStackParamList = {
  Tabs: undefined;
  TrashBinDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      {...({
        screenOptions: {
          headerShown: true,
          headerStyle: { backgroundColor: '#111' },
          headerTintColor: '#fff',
        },
      } as React.ComponentProps<typeof Stack.Navigator>)}
    >
      <Stack.Screen
        name="Tabs"
        component={AppStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrashBinDetails"
        component={TrashBinDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
