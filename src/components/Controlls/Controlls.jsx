import React, {Component} from 'react';
import { connect } from 'react-redux';

import { choosePlayer } from '../../actions/gameActions';

import './Controlls.css'

class Controlls extends Component {
    choosePlayer = (player) => {
        this.props.choosePlayer(player);
    }
    render () {
        return <div className="controlls">
                <div className="controlls__button" onClick={() => this.choosePlayer('X')}>X</div>
                <div className="controlls__button" onClick={() => this.choosePlayer('O')}>O</div>
            </div>
    }
}

export default connect(null, {choosePlayer})(Controlls);
