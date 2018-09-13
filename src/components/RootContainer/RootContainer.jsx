import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
});

RootContainer.propTypes = {
    gameStarted: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(RootContainer);