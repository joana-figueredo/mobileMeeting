import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Caraa} from './src/components/Caraa/Caraa';
import {Rio} from './src/components/Rio/Rio';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Caraa" component={Caraa} />
        <Stack.Screen name="Rio" component={Rio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
