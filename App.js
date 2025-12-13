import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Explore from './Explore';
import AIDJ from './AIDJ';
import Library from './Library';
import Player from './Player';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="AIDJ" component={AIDJ} />
            <Stack.Screen name="Library" component={Library} />
          </Stack.Navigator>
          
          {/* Player sabit alt component olarak */}
          <Player />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}