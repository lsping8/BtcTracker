import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

export default createStore(rootReducer, initialState);
