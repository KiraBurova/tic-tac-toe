import {CONSTRUCT_BOARD, CHOOSE_PLAYER, TAKE_TURN} from '../actions/types';

const initialState = {
    board: [],
    gameStarted: false,
    player: '',
    computer: ''
}

export default function (state = initialState, action) {
    switch(action.type) {
        case CONSTRUCT_BOARD: {
            return {
                ...state,
                board: new Array(action.payload).fill("")
            }
        }
        case CHOOSE_PLAYER: {
            return {
                ...state,
                player: action.player,
                computer: action.computer,
                gameStarted: true
            }
        }
        case TAKE_TURN: {
            console.log(state)
            return {
                ...state,
                board: state.board[action.payload] = state.player
            }
        }
        default: return state
    }
}