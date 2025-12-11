import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default function Profile(){
  return (
    <View style={{flex:1,backgroundColor:'#000',padding:16}}>
      <Text style={{color:'#F2C94C',fontSize:22,fontWeight:'700'}}>Profil</Text>
      <Text style={{color:'#aaa',marginTop:6}}>Premium yönetimi ve istatistikler</Text>
      <TouchableOpacity style={{marginTop:16,backgroundColor:'#9B5CFF',padding:12,borderRadius:8}}>
        <Text style={{color:'#000',fontWeight:'700'}}>Premium'a Geç (30 TL/ay)</Text>
      </TouchableOpacity>
    </View>
  );
}
