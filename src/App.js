import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';

import RootContainer from './components/RootContainer/RootContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RootContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
