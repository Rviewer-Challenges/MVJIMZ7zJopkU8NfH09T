import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from "./src/screens/Main/Main";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} options={{ title: 'La Mia Pizza' }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
