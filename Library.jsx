import React from 'react';
import { View, Text } from 'react-native';
export default function Library(){
  return (
    <View style={{flex:1,backgroundColor:'#000',padding:16}}>
      <Text style={{color:'#9B5CFF',fontSize:22,fontWeight:'700'}}>Kütüphane</Text>
      <Text style={{color:'#aaa',marginTop:6}}>Playlist'leriniz ve indirilenler burada.</Text>
    </View>
  );
}
