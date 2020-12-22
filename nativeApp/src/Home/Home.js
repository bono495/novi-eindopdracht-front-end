import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// We won't use this component
const Home = () => (
  <View style={styles.container}>
    <Text>Good morning :) </Text>
    <Home />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
