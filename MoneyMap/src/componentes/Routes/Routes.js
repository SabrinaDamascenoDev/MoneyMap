import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from '../FirebaseConfig/FirebaseConfig';
import Page1 from '../Inicial/Inicial';
import Page2 from '../Login/Login';
import Page3 from '../Registre-se/Registre-se';
import Page5 from '../Home/Home';
import LoadingScreen from '../Loading/LoadingScreen'; 

const Stack = createStackNavigator();

function Routes() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <LoadingScreen />; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={Page5} />
          </>
        ) : (
          <>
            <Stack.Screen name="Inicial" component={Page1} />
            <Stack.Screen name="Login" component={Page2} />
            <Stack.Screen name="Registre-se" component={Page3} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
