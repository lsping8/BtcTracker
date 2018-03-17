import * as firebase from 'firebase';
import config from './firebaseConfig';

export const queryCurrentPrice = (callback) => {
  firebase.database().ref('currentPrice').on('value',callback);
};

export const queryPriceTick = (callback) => {
  firebase.database().ref('priceTick').on('value',callback);
};

export default function () {
  firebase.initializeApp(config);
}
