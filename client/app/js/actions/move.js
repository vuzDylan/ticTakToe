export const VALID_MOVE = 'VALID_MOVE';
export const INVALID_MOVE = 'INVALID_MOVE';

function validMove(board, pos, player) {
  return {
    type: VALID_MOVE,
    board,
    pos,
    player,
  };
}

function invalidMove(err) {
  return {
    type: INVALID_MOVE,
    err,
  };
}

export function move(board, pos) {
  return (dispatch, getState) => {
    const player = getState().game.player;
    dispatch(validMove(board, pos, player));
  }
}
