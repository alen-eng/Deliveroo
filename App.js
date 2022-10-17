import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';
import { StyleSheet, Text, View } from 'react-native';
import {StyledComponent} from 'nativewind';
import {TailwindProvider} from 'tailwind-rn';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen'
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import { store } from './store';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Basket" 
        component={BasketScreen}
         options={{ presentation:"modal" , headerShown: false }} 
         /> 
        <Stack.Screen 
        name="PreparingOrderScreen"
         component={PreparingOrderScreen}
          options={{ presentation:"fullScreenModal" , headerShown: false }}
            /> 
             <Stack.Screen 
        name="Delivery"
         component={DeliveryScreen}
          options={{ presentation:"fullScreenModal" , headerShown: false }}
            />
        </Stack.Navigator>
    </TailwindProvider>
    </Provider>
    </NavigationContainer>
    
);
}
