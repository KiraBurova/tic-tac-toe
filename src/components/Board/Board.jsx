import React from 'react';
import PropTypes from 'prop-types';

import { Cell } from '../Cell/Cell';
import { Restart } from '../Restart/Restart';

import './Board.css';

const Board = (props)  => {
    const board = props.board.map((box, index) => {
        return  <Cell key={index} value={box} onClick={() => { props.playerTurn(index); }} />;
    });

    const winner = props.winner ? <h4>Победитель игрок {props.winner}!</h4> : '';

    return (
        <div className="board-container">
            <div className="board">{board}</div>
            <Restart onClick={() => props.restartGame()}/>
            {winner}
        </div>
    );
};

Board.propTypes = {
    playerTurn: PropTypes.func.isRequired,
    restartGame: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired,
    winner: PropTypes.string
};

export default Board;