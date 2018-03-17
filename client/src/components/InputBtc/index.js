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
    this.setState({ value: event.currentTarget.value, calPrice: this.calculatePrice(event.currentTarget.value)})
  }

  calculatePrice = (value) => {
    const { currentPrice } = this.props
    return parseFloat((value * currentPrice).toFixed(5))
  }

  render() {
    const { calPrice,value } = this.state
    const { currency } = this.props
    return (
      <div className="container-grid">
        <div className="box-input" style={{padding: 10,lineHeight: '40px'}}>
          <label>
            <input className="input-style" type="number" placeholder="Input your BTC" value={value} onChange={this.handleOnChange}/>
            <span> BTC</span>
          </label>
          <div/>
        </div>
        <div style={{margin: 'auto'}}>
          =
        </div>
        <div className="box" style={{padding: 10,lineHeight: '40px'}}>
           {currency} {calPrice === 0 ? 0 : this.calculatePrice(value)}
        </div>
      </div>
    );
  }
}

export default InputBtc;
