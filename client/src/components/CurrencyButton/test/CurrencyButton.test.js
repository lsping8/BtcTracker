import React from 'react'
import ReactDOM from 'react-dom'
import { shallow,configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import CurrencyButton from '../index'

configure({ adapter: new Adapter() });

describe('CurrencyButton', () => {
  const props = { currency: 'USD' }
  const currencyButton = shallow(<CurrencyButton {...props}/>)
  it('renders without crashing', () => {
    expect(currencyButton).toMatchSnapshot()
  })

  it('current selected currency', () => {
    expect(currencyButton.find('.box-select').text()).toEqual('USD')
  })

  it('current unselect currency', () => {
    expect(currencyButton.find('.box').text()).toEqual('SGD')
  })
})
