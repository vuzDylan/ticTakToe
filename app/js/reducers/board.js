import { VALID_MOVE } from '../actions/move';
import { NEW_GAME } from '../actions/game';

const initState = {
  board: [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ],
  active: 9,
}

function active(state, action) {
  switch(action.type) {
    case NEW_GAME:
      return 9;
    case VALID_MOVE:
      return action.active;
    default:
      return state;
  }
}

function Board(state, action) {
  switch(action.type) {
    case NEW_GAME:
      return [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
      ];
    case VALID_MOVE:
      return [
        ...state.slice(0, action.board),
        [
          ...state[action.board].slice(0, action.pos),
          action.player,
          ...state[action.board].slice(action.pos + 1),
        ],
        ...state.slice(action.board + 1),
      ]
    default:
      return state;
  }
}

export default function board(state=initState, action) {
  return {
    active: active(state.active, action),
    board: Board(state.board, action),
  };
}
