import React, {useContext} from 'react';
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import style from './styleCard';
import Context from '../../context/context';

const Card = (props) => {
  const {navigate} = useContext(Context);
    
  return (
      <View style={style.container}>
        <TouchableOpacity onPress={ () => navigate('Details') }>
          <Image
            style={style.image}
            source={{uri: props.imageSource}}
          />
        </TouchableOpacity>
        <Text style={style.textDescription}>{props.description || "No description"} </Text>
        <Text style={style.textAuthor}>{props.authorName || "No author"} </Text>
      </View>
    );
}

export default Card;