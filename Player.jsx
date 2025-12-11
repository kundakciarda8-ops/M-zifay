import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import api from '../services/api';

export default function Player() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setPlaying] = useState(false);
  const [track, setTrack] = useState(null);

  useEffect(() => { return sound ? () => { sound.unloadAsync(); } : undefined; }, [sound]);

  async function playUrl(url) {
    try {
      if (sound) {
        await sound.unloadAsync();
        setSound(null);
      }
      const { sound: s } = await Audio.Sound.createAsync({ uri: url }, { shouldPlay: true });
      setSound(s);
      setPlaying(true);
    } catch(e){ console.warn(e.message) }
  }

  async function playTrending() {
    try {
      const r = await api.get('/tracks/trending');
      if(r.data && r.data[0]){
        const url = r.data[0].streamUrl;
        setTrack(r.data[0]);
        await playUrl(url);
      }
    } catch(e){ console.warn(e.message) }
  }

  return (
    <View style={{position:'absolute',left:0,right:0,bottom:0,backgroundColor:'#050505',padding:10,flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity onPress={() => isPlaying ? sound.pauseAsync().then(()=>setPlaying(false)) : sound ? sound.playAsync().then(()=>setPlaying(true)) : playTrending()}>
        <Text style={{color:'#fff'}}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
      <View style={{marginLeft:12,flex:1}}>
        <Text style={{color:'#fff', fontWeight:'700'}}>{track ? track.title : 'Müzifay'}</Text>
        <Text style={{color:'#888'}}>{track ? track.artist : 'AI Mix'}</Text>
      </View>
    </View>
  );
}
