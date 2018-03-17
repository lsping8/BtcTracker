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

firebase.initializeApp(config)

schedule.scheduleJob('30 * * * *', () => new Promise(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/SGD.json')
    .then((result) => result.json())
    .then((data) => {
      const dt = datetime.create();
      const formatted = dt.format('m-d H:M');
      const prieceTick = firebase.database().ref().child('priceTick').push()
      firebase.database().ref('currentPrice').update({price: data.bpi.SGD.rate_float})
      prieceTick.set({ price: data.bpi.SGD.rate_float, date: formatted })
    })
  }))
