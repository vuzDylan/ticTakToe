export const NEW_GAME = 'NEW_GAME';
export const WIN_GAME = 'WIN_GAME';
export const WIN_BOARD = 'WIN_BOARD';

export function newGame(player) {
  return {
    type: NEW_GAME,
    player,
  };
}

export function winGame(player) {
  return {
    type: WIN_GAME,
    player,
  };
}

export function winBoard(board, player) {
  return {
    type: WIN_BOARD,
    board,
    player,
  };
}
