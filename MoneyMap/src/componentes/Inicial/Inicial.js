import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Page1 = () => (
  <View style={styles.container}>
    <Text>Page 1</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page1;
