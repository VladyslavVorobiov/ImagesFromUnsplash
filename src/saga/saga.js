import { call, put, takeEvery } from 'redux-saga/effects';
import {FETCH_DATA} from '../store/actions/actionTypes';
import { UnsplashUrl as url } from '../config/default.json';

export function* watchFetchData() {
    yield takeEvery(FETCH_DATA, fetchDataAsync);
  }
  
function* fetchDataAsync() {

    yield call( () => console.log(url) );
    /*
    try {
      yield put(requestDog());
      const data = yield call(() => {
        return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        }
      );
      yield put(requestDogSuccess(data));
    } catch (error) {
      yield put(requestDogError());
    }*/

  }

  /*
async function fetchData(){
    try {
        const url = "https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept-Version': 'v1',
            },
        });

        if(!response.ok){
            throw new Error( "Error HTTP: " + response.status);
        }
        const data = await response.json();
        console.log(data.length);

    } catch (error) {
        console.log('Something has been wrong!' + error.message);
    }
}
*/
