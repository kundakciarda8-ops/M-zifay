import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import api from './api.js';

export default function Player() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setPlaying] = useState(false);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  async function playUrl(url) {
    try {
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
      setSound(newSound);
      setPlaying(true);
    } catch (e) {
      console.warn('Play error:', e.message);
    }
  }

  async function playTrending() {
    try {
      const response = await api.get('/tracks/trending');
      if (response.data && response.data[0]) {
        const url = response.data[0].streamUrl;
        setTrack(response.data[0]);
        await playUrl(url);
      }
    } catch (e) {
      console.warn('Trending error:', e.message);
    }
  }

  async function togglePlay() {
    if (!sound) {
      await playTrending();
      return;
    }

    if (isPlaying) {
      await sound.pauseAsync();
      setPlaying(false);
    } else {
      await sound.playAsync();
      setPlaying(true);
    }
  }

  return (
    <View style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#050505',
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#222'
    }}>
      <TouchableOpacity 
        onPress={togglePlay}
        style={{
          backgroundColor: '#9B5CFF',
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>
          {isPlaying ? '||' : '▶'}
        </Text>
      </TouchableOpacity>

      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text 
          style={{ 
            color: '#fff', 
            fontWeight: '700',
            fontSize: 14
          }}
          numberOfLines={1}
        >
          {track ? track.title : 'Müzifay'}
        </Text>
        <Text 
          style={{ 
            color: '#888',
            fontSize: 12
          }}
          numberOfLines={1}
        >
          {track ? track.artist : 'AI Mix'}
        </Text>
      </View>

      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center',
        marginRight: 8
      }}>
        <View style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: isPlaying ? '#4CAF50' : '#888',
          marginRight: 4
        }} />
        <Text style={{ color: isPlaying ? '#4CAF50' : '#888', fontSize: 11 }}>
          {isPlaying ? 'Çalıyor' : 'Duraklatıldı'}
        </Text>
      </View>
    </View>
  );
}