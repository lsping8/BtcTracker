import React, { Component } from 'react';

class BtcPriceDisplay extends Component {
  render() {
    const { currentPrice } = this.props
    return (
        <div className="box" style={{padding: 20}}>
          {currentPrice}
          <div className="poweredBox">Powered by CoinDesk</div>
        </div>
    );
  }
}

export default BtcPriceDisplay;
