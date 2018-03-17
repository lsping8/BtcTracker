import React from 'react'
import ReactDOM from 'react-dom'
import { shallow,configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import LineGraph from '../index'

configure({ adapter: new Adapter() });

const lineGraph = shallow(<LineGraph />)

describe('LineGraph', () => {
  it('renders without crashing', () => {
    expect(lineGraph).toMatchSnapshot()
  })
})
