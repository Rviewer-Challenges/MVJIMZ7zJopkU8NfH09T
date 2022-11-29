import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import MainScreen from "./src/screens/Main/Main";
import ShoppingCartScreen from './src/screens/ShoppingCart/ShoppingCart';
import DetailsScreen from './src/screens/Details/Details';

import Cart from "./src/components/Cart/Cart";

const Stack = createNativeStackNavigator();

function App() {

  const options = {
    title: 'La Mia Pizza',
    headerTitleAlign: "center",
  };

  const homeOptions =  {
    headerRight: () => {
      const navigation = useNavigation();
      return (
        <Cart onPress={()=> navigation.navigate('ShoppingCart')}/>
      )
    }
  };

  const detailsOptions = {
    headerShown: false
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={options}>
        <Stack.Screen name="Home" component={MainScreen} options={homeOptions}/>
        <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={detailsOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
