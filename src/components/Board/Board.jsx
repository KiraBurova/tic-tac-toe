import React, {Component} from 'react';

import { connect } from 'react-redux';

import {Cell} from '../Cell/Cell';
import {Restart} from '../Restart/Restart';

import {constructBoard, takeTurn, restartGame, finishGame} from '../../actions/gameActions';

import './Board.css'

class Board extends Component {
    constructor() {
        super();
        this.width = 3;
        this.height = 3;
        this.boxes = this.width * this.height;
        this.gameFinished = false;
        this.winner = null;
    }
    componentDidMount() {
        this.props.constructBoard(this.boxes);
    }
    userTurn (index) {
        if(this.props.gameFinished) {return}
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
    checkWin() {
        //horizontal
        for(let i = 0; i < 9; i++) {
            if(this.props.board[i] === this.props.board[i+1] && this.props.board[i+1]===this.props.board[i+2]&&this.props.board[i]) {
                return this.props.board[i];
            }
        }
        //vertical
        for(let i = 0; i<3; i++){
            if (this.props.board[i] === this.props.board[i+3] && this.props.board[i+3] === this.props.board[i+6] && this.props.board[i])
                return this.props.board[i];
        }
        //diagonal
        if (this.props.board[0] === this.props.board[4] && this.props.board[4] === this.props.board[8] && this.props.board[0])
            return this.props.board[0];
        if (this.props.board[2] === this.props.board[4] && this.props.board[4] === this.props.board[6] && this.props.board[2])
            return this.props.board[2];

        return false;
    }
    restartGame() {
        this.props.restartGame();
    }
    render() {
        this.checkWin();
        if(this.checkWin()) {
            this.gameFinished = true;
            this.winner = this.checkWin();
        }

        return (
            <div>
            <div className="board">
                {this.props.board.map((box, index) => {
                    return  <Cell key={index} value={box} onClick={() => {this.userTurn(index)}}/>
                })}
            </div>
            <Restart onClick={() => this.restartGame()}/>
            {this.gameFinished ? <h1>Победитель игрок {this.winner}! <br/> Начните игру заново</h1> : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    player: state.data.player,
    computer: state.data.computer,
    board: state.data.board,
    gameFinished: state.data.gameFinished
})

export default connect(mapStateToProps, {constructBoard, takeTurn, restartGame, finishGame})(Board);