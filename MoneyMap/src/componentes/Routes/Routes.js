import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from '../Inicial/Inicial';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={
        {headerShown: false,
      }}>
        <Stack.Screen name="Inicial" component={Page1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
