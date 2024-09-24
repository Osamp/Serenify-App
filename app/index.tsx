import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from '@/src/navigation/AuthStack';
import AppStack from '@/src/navigation/AppStack';
import useIsLoggedIn from '@/src/hooks/useIsLoggedIn';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="AppStack"
            component={AppStack}
            options={{ headerShown: false }} // Hide header if necessary
          />
        ) : (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }} // Hide header if necessary
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
