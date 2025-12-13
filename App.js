import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.jsx';
import Explore from './Explore.jsx';
import AIDJ from './AIDJ.jsx';
import Library from './Library.jsx';
import Player from './Player.jsx';
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
          
          <Player />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}