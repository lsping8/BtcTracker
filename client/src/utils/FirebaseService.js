import * as firebase from 'firebase';
import config from './firebaseConfig';

export const queryCurrentPrice = (currency,callback) => {
  firebase.database().ref(`currentPrice/${currency}`).on('value',callback);
};

export const queryPriceTick = (currency,callback) => {
  firebase.database().ref(`priceTick/${currency}`).on('value',callback);
};

export const offQuery = (currency) => {
  firebase.database().ref(`currentPrice/${currency}`).off();
  firebase.database().ref(`priceTick/${currency}`).off();
};

export default function () {
  firebase.initializeApp(config);
}
