import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Controlls from '../Controlls/Controlls';
import BoardContainer from '../Board/container/BoardContainer';

class RootContainer extends Component {
    render() {
        const gameStarted = this.props.gameStarted;

        return (
            gameStarted ? <BoardContainer /> : <Controlls />
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