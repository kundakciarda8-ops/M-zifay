import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 16 }}>
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Ana Sayfa</Text>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('Explore')}
        style={{ 
          backgroundColor: '#9B5CFF', 
          padding: 16, 
          borderRadius: 8, 
          marginTop: 20 
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Keşfet'e Git</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('AIDJ')}
        style={{ 
          backgroundColor: '#333', 
          padding: 16, 
          borderRadius: 8, 
          marginTop: 10 
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>AI DJ</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Library')}
        style={{ 
          backgroundColor: '#333', 
          padding: 16, 
          borderRadius: 8, 
          marginTop: 10 
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Kütüphane</Text>
      </TouchableOpacity>
    </View>
  );
}