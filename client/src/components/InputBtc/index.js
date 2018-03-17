import React, { Component } from 'react';

class InputBtc extends Component {
  constructor(){
    super()
    this.state = {
      calPrice: 0,
      value: ''
    }
  }

  handleOnChange = (event) => {
    const { currentPrice } = this.props
    this.setState({ value: event.currentTarget.value,calPrice: parseFloat((event.currentTarget.value * currentPrice).toFixed(4))})
  }

  render() {
    const { calPrice,value } = this.state
    return (
      <div className="container-grid">
        <div className="box-input" style={{padding: 10,lineHeight: '40px'}}>
          <input className="input-style" type="number" value={value} onChange={this.handleOnChange}/>
          <div/>
          <span>BTC</span>
        </div>
        <div style={{margin: 'auto'}}>
          =
        </div>
        <div className="box" style={{padding: 10,lineHeight: '40px'}}>
           {calPrice}
        </div>
      </div>
    );
  }
}

export default InputBtc;
