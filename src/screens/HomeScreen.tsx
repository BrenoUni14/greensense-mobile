import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/homeStyles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao GreenSense!</Text>
    </View>
  );
};

export default HomeScreen;
