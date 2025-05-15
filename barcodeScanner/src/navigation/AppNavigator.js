import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../components/HomeScreen';
import SelectionScreen from '../components/SelectionScreen';
import BarcodeScanner from '../components/BarcodeScanner';
import ProductRegistration from '../components/ProductRegistration';
import InventoryManagement from '../components/InventoryManagement';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Selection" 
          component={SelectionScreen}
          options={{ title: 'Select Option' }}
        />
        <Stack.Screen 
          name="BarcodeScanner" 
          component={BarcodeScanner}
          options={{ title: 'Scan Barcode' }}
        />
        <Stack.Screen 
          name="ProductRegistration" 
          component={ProductRegistration}
          options={{ title: 'Register Product' }}
        />
        <Stack.Screen 
          name="InventoryManagement" 
          component={InventoryManagement}
          options={{ title: 'Inventory' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;