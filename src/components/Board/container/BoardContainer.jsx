import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { constructBoard, takeTurn, restartGame, finishGame } from '../../../actions/gameActions';

import Board from '../Board';

class BoardContainer extends Component {
    constructor() {
        super();
        this.width = 3;
        this.height = 3;
        this.boxes = this.width * this.height;
        this.winner = null;
    }
    componentDidMount() {
        this.props.constructBoard(this.boxes);
    }
    playerTurn(index) {
        if(this.winner) { return; }
        if(this.props.board[index] === '') {
            this.props.takeTurn(index, this.props.player).then(() => {
                this.computerTurn();
            });
        }
    }
    computerTurn() {
        let cells = [];
        for(var i = 0; i <= this.props.board.length; i++) {
            if(this.props.board[i] === '') { cells.push(i); }
        }
        const randomNumber = Math.floor(Math.random() * cells.length);
        this.props.takeTurn(cells[randomNumber], this.props.computer);
    }
    checkWin() {
        //horizontal
        for(let i = 0; i < this.boxes; i++) {
            if(this.props.board[i] === this.props.board[i + 1] && this.props.board[i + 1] === this.props.board[i + 2] && this.props.board[i]) {
                return this.props.board[i];
            }
        }
        //vertical
        for(let i = 0; i < this.height; i++) {
            if(this.props.board[i] === this.props.board[i + 3] && this.props.board[i + 3] === this.props.board[i + 6] && this.props.board[i])
                return this.props.board[i];
        }
        //diagonal
        if(this.props.board[0] === this.props.board[4] && this.props.board[4] === this.props.board[8] && this.props.board[0])
            return this.props.board[0];
        if(this.props.board[2] === this.props.board[4] && this.props.board[4] === this.props.board[6] && this.props.board[2])
            return this.props.board[2];

        return false;
    }
    restartGame() {
        this.props.restartGame();
    }
    render() {
        this.checkWin();
        if(this.checkWin()) {
            this.winner = this.checkWin();
        }
        return (
            <Board board={this.props.board} winner={this.winner} playerTurn={(index) => this.playerTurn(index)} restartGame={() => this.restartGame()}/>
        );
    }
}

const mapStateToProps = (state) => ({
    player: state.data.player,
    computer: state.data.computer,
    board: state.data.board,
    gameFinished: state.data.gameFinished
});

BoardContainer.propTypes = {
    constructBoard: PropTypes.func.isRequired,
    takeTurn: PropTypes.func.isRequired,
    restartGame: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired,
    player: PropTypes.string.isRequired,
    computer: PropTypes.string.isRequired
};

export default connect(mapStateToProps, {constructBoard, takeTurn, restartGame, finishGame})(BoardContainer);