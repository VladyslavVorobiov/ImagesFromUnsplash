import {
        GETTING_DATA_HAS_ERROR,
        DATA_IS_LOADING,
        GETING_DATA_HAS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    dataFromUnsplash: [],
    isLoading: false,
    hasErrored: false,
    isDataRecieved: false
}

export default function cardListReducer(state = initialState, action){
    switch(action.type){
        case DATA_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        case GETTING_DATA_HAS_ERROR:
            return{
                ...state, hasErrored: action.hasErrored
            }
        case GETING_DATA_HAS_SUCCESS:
            return{
                ...state, dataFromUnsplash: action.dataFromUnsplash, isDataRecieved: true
            }
        default:
            return state;
    }
}


