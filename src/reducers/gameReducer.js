import {CONSTRUCT_BOARD, CHOOSE_PLAYER, TAKE_TURN, RESTART_GAME, FINISH_GAME} from '../actions/types';

const initialState = {
    board: [],
    gameStarted: false,
    gameFinished: false,
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
            return {
                ...state,
                board: state.board.map((item, index) => index === action.index ? item = action.player : item)
            }
        }
        case RESTART_GAME : {
            return {
                ...state,
                board: [],
                player: '',
                computer: '',
                gameStarted: false
            }
        }
        case FINISH_GAME : {
            return {
                ...state,
                gameFinished: true
            }
        }
        default: return state
    }
}