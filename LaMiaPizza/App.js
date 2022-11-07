import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from "./src/screens/Main/Main";

const Stack = createNativeStackNavigator();

function App() {
  const options = {
    title: 'La Mia Pizza',
    headerTitleAlign: "center"
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={options}>
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
