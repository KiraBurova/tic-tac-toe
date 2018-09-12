import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';


import Board from './components/Board/Board';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;
