import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeCurrentPrice,addChartData } from './actions'
import { queryCurrentPrice,queryPriceTick } from '../../utils/FirebaseService'

import initRedux from '../../hoc/initRedux'
import LineGraph from '../../components/LineGraph'
import BtcPriceDisplay from '../../components/BtcPriceDisplay'
import InputBtc from '../../components/InputBtc'
import FirebaseService from '../../utils/FirebaseService';

class App extends Component {
  constructor(){
    super()
    FirebaseService()
  }

  componentWillMount(){
    const { changeCurrentPrice,addChartData } = this.props
    queryCurrentPrice((snapshot) => {
      changeCurrentPrice(snapshot.val().price)
    })
    queryPriceTick((snapshot) => {
      snapshot.forEach((data) => {
        const dataValue = data.val()
        addChartData(dataValue.price,dataValue.date)
      })
    })
  }

  render() {
    const { currentPrice,chartData,chartLabel } = this.props.AppReducer
    return (
      <div className="App">
        <LineGraph chartData={chartData} chartLabel={chartLabel}/>
        <InputBtc currentPrice={currentPrice}/>
        <BtcPriceDisplay currentPrice={currentPrice}/>
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
})

export default initRedux(connect(mapStateToProps, mapDispatchToProps)(App));
