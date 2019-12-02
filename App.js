import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabScreen from './src/screens/TabScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native from RoxAI!!</Text>
      <TabScreen/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
