import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(()=>{ fetchTrending(); },[]);

  async function fetchTrending(){
    try {
      const res = await api.get('/tracks/trending');
      setTrending(res.data);
    } catch(e) { console.warn(e.message); }
  }

  return (
    <ScrollView style={{flex:1,backgroundColor:'#000',padding:16}}>
      <Text style={{color:'#9B5CFF',fontSize:26,fontWeight:'700'}}>Müzifay</Text>
      <Text style={{color:'#aaa',marginTop:6}}>Kişisel öneriler & AI Mix'ler</Text>

      <View style={{marginTop:18}}>
        <Text style={{color:'#fff',fontWeight:'700'}}>Trendler</Text>
        {trending.map(t => (
          <TouchableOpacity key={t._id} style={{padding:10,marginTop:8,backgroundColor:'#0b0b0d',borderRadius:10}}>
            <Text style={{color:'#fff',fontWeight:'600'}}>{t.title}</Text>
            <Text style={{color:'#888'}}>{t.artist}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
