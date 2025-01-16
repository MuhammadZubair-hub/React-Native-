import { Button, View, Text } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View>
      <Text  style={{fontSize:30}}>"App in the react native "</Text>
      <Text style={{fontSize:30}}> "this e first app"</Text>
      <Button title="pres here " style ={{Colors}}/>
    </View>
  );
};

export default App