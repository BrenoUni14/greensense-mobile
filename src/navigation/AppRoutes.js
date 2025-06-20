import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import TrashBinDetailsScreen from '../screens/TrashBinDetailsScreen';
import MapScreen from '../screens/MapScreen';
import RevisionsScreen from '../screens/RevisionsScreen';
import OccurrencesScreen from '../screens/OccurrencesScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="TrashBinDetails" component={TrashBinDetailsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Revisions" component={RevisionsScreen} />
      <Stack.Screen name="Occurrences" component={OccurrencesScreen} />
    </Stack.Navigator>
  );
}