import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Explore from './Explore';
import AIDJ from './AIDJ';
import Library from './Library';
import Profile from './Profile';
import Player from './Player';
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
