import { View, Text } from 'react-native'
import React from 'react'

const JSX = () => {
    let name = 'zubair';
    const getname = () =>{

        return name;
    }
  return (
    <View>
      <Text>{name}</Text>
      <Text>{getname()}</Text>
      <Text>{getname()=='zubair' ? 'react native': 'flutter' }</Text>
    </View>
  )
}

export default JSX