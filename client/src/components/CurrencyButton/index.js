import React, { Component } from 'react';
import { offQuery } from '../../utils/FirebaseService'

class CurrencyButton extends Component {

  handleClick = (newCurrency) => {
    const { changeCurrency,queryData,currency } = this.props
    console.log('newCurrency',newCurrency);
    offQuery(currency)
    changeCurrency(newCurrency)
    queryData(newCurrency)
  }

  render() {
    const { currency } = this.props
    return (
      <div className="button-grid">
        <div
          className={currency === 'USD' ? "box-select" : 'box'}
          style={{padding: 20,cursor:'pointer'}}
          onClick={() => this.handleClick('USD')}
        >
          USD
        </div>
        <div
          className={currency === 'SGD' ? "box-select" : 'box'}
          style={{padding: 20,cursor:'pointer'}}
          onClick={() => this.handleClick('SGD')}
        >
          SGD
        </div>
      </div>
    );
  }
}

export default CurrencyButton;
