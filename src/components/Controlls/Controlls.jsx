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
                <h4>X или O?</h4>
                <div className="controlls__buttons">
                    <div className="controlls__button" onClick={() => this.choosePlayer('X')}>X</div>
                    <div className="controlls__button" onClick={() => this.choosePlayer('O')}>O</div>
                </div>
            </div>
    }
}

export default connect(null, {choosePlayer})(Controlls);
