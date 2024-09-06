import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from '../Inicial/Inicial'; // Verifique se o caminho está correto
import Page2 from '../Login/Login'; // Verifique se o caminho está correto

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={Page1} />
        <Stack.Screen name="Login" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
