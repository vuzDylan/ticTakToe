import { VALID_MOVE } from '../actions/move';
import { WIN_GAME, WIN_BOARD, NEW_GAME } from '../actions/game';

const initState = {
  player: 1,
  winner: 0,
  won: [0,0,0,0,0,0,0,0,0],
}

function player(state, action) {
  switch(action.type) {
    case VALID_MOVE:
      return action.player === 1 ? 2 : 1;
    case NEW_GAME:
      return action.player;
    default:
      return state;
  }
}

function winner(state, action) {
  switch(action.type) {
    case WIN_GAME:
      return action.player;
    case NEW_GAME:
      return 0;
    default:
      return state;
  }
}

function won(state, action) {
  switch(action.type) {
    case WIN_BOARD:
      return [
        ...state.slice(0, action.board),
        action.player,
        ...state.slice(action.board + 1),
      ]
    case NEW_GAME:
      return [0,0,0,0,0,0,0,0,0];
    default:
      return state;
  }
}

export default function turn(state=initState, action) {
  return {
    player: player(state.player, action),
    winner: winner(state.winner, action),
    won: won(state.won, action),
  };
}
