import React, {useEffect} from 'react';
import { View } from 'react-native';
import style from './styleCardList';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

import {connect} from 'react-redux';
import { fetchData } from '../../store/actions/actionCreators';

const CardList = (props) => {

  useEffect( () => {
      getDataFromUnsplash();
    },[]);

    return (
      <View style={style.container}>
        {
          props.isLoading
          ? <Loader />
          : <Card />
			  }
      </View>
    );
}

function mapStateToProps(state){
	return{
		dataFromUnsplash: state.cardList.dataFromUnsplash,
		hasErrored: state.cardList.hasErrored,
    isLoading: state.cardList.isLoading,
		isDataRecieved: state.cardList.isDataRecieved
	}
}

function mapDispatchToProps(dispatch){
	return{
		getDataFromUnsplash: () => dispatch(fetchData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);