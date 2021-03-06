import React from 'react'
import ReactDOM from 'react-dom'
import { shallow,configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from '../index'

configure({ adapter: new Adapter() });

const app = shallow(<App />)

describe('App', () => {
  it('renders without crashing', () => {
    expect(app).toMatchSnapshot()
  })
})
