import React from 'react'
import ReactDOM from 'react-dom'
import { shallow,configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import InputBtc from '../index'

configure({ adapter: new Adapter() });

const props = { currency: 'USD' }
const inputBtc = shallow(<InputBtc {...props}/>)

describe('InputBtc', () => {
  it('renders without crashing', () => {
    expect(inputBtc).toMatchSnapshot()
  })

  it('initializes the `state`', () => {
    expect(inputBtc.state().calPrice).toEqual(0)
    expect(inputBtc.state().value).toEqual('')
  })

  it('initial calculate price', () => {
    expect(inputBtc.find('.box').text()).toEqual('USD 0')
  })
})
