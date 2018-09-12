import React, {Component} from 'react';

import { connect } from 'react-redux';

import {Cell} from '../Cell/Cell';

import {constructBoard, takeTurn} from '../../actions/gameActions';

import './Board.css'

class Board extends Component {
    constructor() {
        super();
        this.width = 3;
        this.height = 3;
        this.boxes = this.width * this.height;
    }
    componentDidMount() {
        this.props.constructBoard(this.boxes);
    }
    takeTurn (index) {
        console.log(1)
        // this.props.takeTurn(index);
    }
    render() {
        return (
            <div className="board">
                {this.props.board.map((box, index) => {
                    return (
                        <Cell key={index} value={box} onClick={() => {this.takeTurn(index)}}/>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    player: state.data.player,
    board: state.data.board
})

export default connect(mapStateToProps, {constructBoard, takeTurn})(Board);