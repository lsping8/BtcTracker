import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeCurrentPrice,addChartData,changeCurrency } from './actions'
import { queryCurrentPrice,queryPriceTick } from '../../utils/FirebaseService'

import initRedux from '../../hoc/initRedux'
import LineGraph from '../../components/LineGraph'
import BtcPriceDisplay from '../../components/BtcPriceDisplay'
import InputBtc from '../../components/InputBtc'
import CurrencyButton from '../../components/CurrencyButton'
import FirebaseService from '../../utils/FirebaseService';

class App extends Component {
  constructor(){
    super()
    FirebaseService()
  }

  componentWillMount(){
    this.queryData('USD')
  }

  queryData = (currency) => {
    const { changeCurrentPrice,addChartData } = this.props
    queryCurrentPrice(currency, (snapshot) => {
      if(snapshot.exists()){
        changeCurrentPrice(snapshot.val().price)
      }
    })
    queryPriceTick(currency, (snapshot) => {
      if(snapshot.exists()){
        const priceArray = []
        const labelArray = []
        snapshot.forEach((data) => {
          const dataValue = data.val()
          priceArray.push(dataValue.price)
          labelArray.push(dataValue.date)
        })
        addChartData(priceArray,labelArray)
      }
    })
  }

  render() {
    const { changeCurrency } = this.props
    const { currentPrice,chartData,chartLabel,currency } = this.props.AppReducer
    return (
      <div className="App">
        <CurrencyButton currency={currency} changeCurrency={changeCurrency} queryData={this.queryData}/>
        <LineGraph chartData={chartData} chartLabel={chartLabel} currency={currency}/>
        <InputBtc currentPrice={currentPrice} currency={currency}/>
        <BtcPriceDisplay currentPrice={currentPrice} currency={currency}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  AppReducer: state.AppReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentPrice:changeCurrentPrice(dispatch),
  addChartData:addChartData(dispatch),
  changeCurrency:changeCurrency(dispatch),
})

export default initRedux(connect(mapStateToProps, mapDispatchToProps)(App));
