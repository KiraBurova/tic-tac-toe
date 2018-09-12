import React, {Component} from 'react';

import { connect } from 'react-redux';

import {Cell} from '../Cell/Cell';
import {Restart} from '../Restart/Restart';

import {constructBoard, takeTurn, restartGame} from '../../actions/gameActions';

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
    userTurn (index) {
        if(this.props.board[index] === '') {
            this.props.takeTurn(index, this.props.player);
            this.computerTurn();
        }
    }
    computerTurn() {
        const randomNumber =  Math.floor(Math.random() * 10);
        
        if(this.props.board[randomNumber] === '') {
            this.props.takeTurn(randomNumber, this.props.computer);
        }
    }
    restartGame() {
        this.props.restartGame();
    }
    render() {
        return (
            <div>
            <div className="board">
                {this.props.board.map((box, index) => {
                    return  <Cell key={index} value={box} onClick={() => {this.userTurn(index)}}/>
                })}
            </div>
            <Restart onClick={() => this.restartGame()}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    player: state.data.player,
    computer: state.data.computer,
    board: state.data.board
})

export default connect(mapStateToProps, {constructBoard, takeTurn, restartGame})(Board);