import React from 'react'
import ReactDOM from 'react-dom'
import { shallow,configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import BtcPriceDisplay from '../index'

configure({ adapter: new Adapter() });

const props = { currency: 'USD', currentPrice: 0 }
const btcPriceDisplay = shallow(<BtcPriceDisplay {...props}/>)

describe('BtcPriceDisplay', () => {
  it('renders without crashing', () => {
    expect(btcPriceDisplay).toMatchSnapshot()
  })

  it('text powered by', () => {
    expect(btcPriceDisplay.find('.poweredBox').text()).toEqual('Powered by CoinDesk')
  })

  it('initial price', () => {
    expect(btcPriceDisplay.find('.currentPrice').text()).toEqual('USD 0')
  })
})
