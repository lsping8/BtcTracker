import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

export default (WrappedComponent) => {
  class InitRedux extends Component {
    render() {
      return (
        <Provider store={store}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  }
  return InitRedux;
};
