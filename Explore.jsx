import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function Explore() {
  const categories = [
    { id: 1, name: 'Pop', color: '#FF4081' },
    { id: 2, name: 'Rock', color: '#3F51B5' },
    { id: 3, name: 'Hip Hop', color: '#4CAF50' },
    { id: 4, name: 'Elektronik', color: '#9C27B0' },
    { id: 5, name: 'Jazz', color: '#FF9800' },
    { id: 6, name: 'Klasik', color: '#795548' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', padding: 16 }}>
        Kategorileri Keşfet
      </Text>
      
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {categories.map((cat) => (
          <TouchableOpacity 
            key={cat.id}
            style={{ 
              backgroundColor: cat.color,
              padding: 20,
              borderRadius: 10,
              marginBottom: 10
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}