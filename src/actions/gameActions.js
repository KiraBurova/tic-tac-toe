import {CONSTRUCT_BOARD, CHOOSE_PLAYER, TAKE_TURN} from './types'

export const constructBoard = (boxes) => async dispatch => {
    dispatch({
        type: CONSTRUCT_BOARD,
        payload: boxes
    })
}

export const choosePlayer = (player) => async dispatch => {
    let computer;
    
    player === 'X' ? computer = 'O' : computer = 'X';

    dispatch({
        type: CHOOSE_PLAYER,
        player: player,
        computer: computer
    })
}

export const takeTurn = (index) => async dispatch => {
    console.log(1)
    dispatch({
        type: TAKE_TURN,
        payload: index
    })
}