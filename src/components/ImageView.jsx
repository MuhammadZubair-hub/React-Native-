import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageView = () => {
  return (
    <View style={{justifyContent:'center', alignItems: 'center' ,flex :2,padding: 10}}>
          <Text  style={{fontSize:30, padding: 20}}>"Image of the Tree  "</Text>
          <Image source={ {uri : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'}} style={{height:200,width:300}} />
        </View>
  );
};

export default ImageView