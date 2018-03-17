const firebase = require('firebase')
const schedule = require('node-schedule')
const fetch = require('node-fetch')
const datetime = require('node-datetime');
const config = {
    apiKey: "AIzaSyDk1RpV1abk6kjXltXg3u8DelPV-nR4ZjI",
    authDomain: "btc-price-tracker.firebaseapp.com",
    databaseURL: "https://btc-price-tracker.firebaseio.com",
    projectId: "btc-price-tracker",
    storageBucket: "",
    messagingSenderId: "1033788848312"
  }

const addNewdata = () => new Promise(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/SGD.json')
    .then((result) => result.json())
    .then((data) => {
      const dt = datetime.create();
      const formatted = dt.format('m-d H:M');
      const prieceTickSGD = firebase.database().ref().child('priceTick/SGD').push()
      const prieceTickUSD = firebase.database().ref().child('priceTick/USD').push()
      prieceTickSGD.set({ price: data.bpi.SGD.rate_float, date: formatted })
      prieceTickUSD.set({ price: data.bpi.USD.rate_float, date: formatted })
      firebase.database().ref('currentPrice/SGD').update({price: data.bpi.SGD.rate_float})
      firebase.database().ref('currentPrice/USD').update({price: data.bpi.USD.rate_float})
    })
  })

firebase.initializeApp(config)
firebase.database().ref(`currentPrice/SGD`).once('value',(snapshot) => {
  if(!snapshot.exists()){
    addNewdata()
  }
})

schedule.scheduleJob('*/1 * * * *', () => {
  addNewdata()
})
