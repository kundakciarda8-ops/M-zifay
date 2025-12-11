import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import AIDJ from './src/screens/AIDJ';
import Library from './src/screens/Library';
import Profile from './src/screens/Profile';
import Player from './src/components/Player';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown:false }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Explore" component={Explore}/>
          <Stack.Screen name="AIDJ" component={AIDJ}/>
          <Stack.Screen name="Library" component={Library}/>
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
        <Player />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
