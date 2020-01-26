import React, {useContext} from 'react';
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import style from './styleCard';
import Context from '../../context/context';

const Card = () => {
  const {navigate} = useContext(Context);
    
  return (
      <View style={style.container}>
        <TouchableOpacity onPress={ () => navigate('Details') }>
          <Image
            style={style.image}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          />
        </TouchableOpacity>
        <Text style={style.text}>Title image</Text>
        <Text style={style.text}>Author</Text>
      </View>
    );
}

export default Card;