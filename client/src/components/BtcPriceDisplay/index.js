import React, { Component } from 'react';

class BtcPriceDisplay extends Component {
  render() {
    const { currentPrice,currency } = this.props
    return (
        <div className="box" style={{padding: 20}}>
          <span className="currentPrice">{currency} {currentPrice}</span>
          <div className="poweredBox">Powered by CoinDesk</div>
        </div>
    );
  }
}

export default BtcPriceDisplay;
