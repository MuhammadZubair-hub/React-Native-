import { Button, View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import ImageView from './src/components/ImageView';
import JSX from './src/components/JSX';

const App = () => {
  return (
    <ScrollView>
      
      <ImageView><Text>IMAGE OF THE CAT </Text></ImageView>
      <JSX></JSX>
    <View style={{justifyContent:'center', alignItems: 'center' ,flex :'2',padding: 20}}>
      <Text  style={{fontSize:30, padding: 20}}>"App in the react native "</Text>
      <Text style={{fontSize:30}}> "this Is the first app"</Text>
      <Button title="PRESS HERE  " style ={{padding: 40}}/>
    </View>
    </ScrollView>
    
  );
};

export default App