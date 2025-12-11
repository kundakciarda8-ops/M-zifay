import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Explore(){
  return (
    <ScrollView style={{flex:1,backgroundColor:'#000',padding:16}}>
      <Text style={{color:'#9B5CFF',fontSize:22,fontWeight:'700'}}>Keşfet</Text>
      <Text style={{color:'#aaa',marginTop:8}}>Mood listeleri, türler ve AI önerileri.</Text>
    </ScrollView>
  );
}
