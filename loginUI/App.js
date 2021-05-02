
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/login/LoginScreen';
import RegisterScreen from './src/auth/screens/Register/RegisterScreen';
import ApartmentsScreen from './src/auth/screens/ListApartments/ApartmentsScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Apartments" component={ApartmentsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
  )
}

export default App;
