import { Button, View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ScrollView>
      <Text>IMAGE OF THE CAT </Text>
      <View style={{justifyContent:'center', alignItems: 'center' ,flex :'2',padding: 10}}>
      <Text  style={{fontSize:30, padding: 20}}>"Image of the cat  "</Text>
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} style={{height:200,width:150}}></Image>
    </View>
    <View style={{justifyContent:'center', alignItems: 'center' ,flex :'2',padding: 20}}>
      <Text  style={{fontSize:30, padding: 20}}>"App in the react native "</Text>
      <Text style={{fontSize:30}}> "this Is the first app"</Text>
      <Button title="PRESS HERE  " style ={{padding: 40}}/>
    </View>
    </ScrollView>
    
  );
};

export default App