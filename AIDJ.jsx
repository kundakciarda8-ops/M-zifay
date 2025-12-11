import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

export default function AIDJ(){
  const [status,setStatus] = useState('Bağlanmadı');

  useEffect(()=>{
    // WebSocket bağlanması backend'de hazırsa buraya ekle
  },[]);

  return (
    <View style={{flex:1,backgroundColor:'#000',padding:16}}>
      <Text style={{color:'#9B5CFF',fontSize:22,fontWeight:'700'}}>AI DJ</Text>
      <Text style={{color:'#aaa',marginTop:8}}>Konuşan DJ ve otomatik geçişler (beta)</Text>
      <View style={{marginTop:18}}>
        <Text style={{color:'#fff'}}>Durum: {status}</Text>
      </View>
    </View>
  );
}
