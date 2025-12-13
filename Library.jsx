import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function Library() {
  const playlists = [
    { id: '1', name: 'Favoriler', count: '24 şarkı' },
    { id: '2', name: 'Çalma Listem', count: '18 şarkı' },
    { id: '3', name: 'En Çok Dinlenenler', count: '56 şarkı' },
    { id: '4', name: 'Yeni Eklenenler', count: '12 şarkı' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 16 }}>
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Kütüphanem
      </Text>
      
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ 
            backgroundColor: '#1a1a1a', 
            padding: 16, 
            borderRadius: 8, 
            marginBottom: 10 
          }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
              {item.name}
            </Text>
            <Text style={{ color: '#888', marginTop: 4 }}>
              {item.count}
            </Text>
          </View>
        )}
      />
    </View>
  );
}