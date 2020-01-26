import React from 'react';
import { Text, View, Image } from 'react-native';
import style from './styleCardDetails';

const CardDetails = () => {
    return (
      <View style={style.container}>
        <Image
          style={style.image}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
      </View>
    );
}
 
export default CardDetails;