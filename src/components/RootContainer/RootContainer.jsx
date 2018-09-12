import React, { Component } from 'react';

import { connect } from 'react-redux';
import Board from '../Board/Board';
import Controlls from '../Controlls/Controlls';

class RootContainer extends Component {
    render() {
        const gameStarted = this.props.gameStarted;

        return (
            gameStarted ? <Board /> : <Controlls />
        );
    }
  }
  
  const mapStateToProps = (state) => ({
    gameStarted: state.data.gameStarted
  })
  
  export default connect(mapStateToProps)(RootContainer);