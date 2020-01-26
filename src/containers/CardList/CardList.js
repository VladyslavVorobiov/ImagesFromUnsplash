import React from 'react';
import { Text, View } from 'react-native';
import style from './styleCardList';
import Card from '../../components/Card/Card'

const Cardlist = () => {
    return (
      <View style={style.container}>
        <Card />
        <Card />       
        <Card />       
        <Card />

        <Card />
        <Card />       
        <Card />       
        <Card />  

        <Card />
        <Card />       
        <Card />       
        <Card />  

      </View>
    );
}

export default Cardlist;