import {CONSTRUCT_BOARD, CHOOSE_PLAYER, TAKE_TURN, RESTART_GAME, FINISH_GAME} from './types';

export const constructBoard = (boxes) => async dispatch => {
    dispatch({
        type: CONSTRUCT_BOARD,
        payload: boxes
    });
};

export const choosePlayer = (player) => async dispatch => {
    let computer;

    player === 'X' ? computer = 'O' : computer = 'X';

    dispatch({
        type: CHOOSE_PLAYER,
        player: player,
        computer: computer
    });
};

export const takeTurn = (index, player) => async dispatch => {
    dispatch({
        type: TAKE_TURN,
        index: index,
        player: player
    });
};

export const restartGame = () => async dispatch => {
    dispatch({
        type: RESTART_GAME
    });
};

export const finishGame = () => async dispatch => {
    dispatch({
        type: FINISH_GAME
    });
};