import { checkForWinner } from '../game';
import { winGame, winBoard, freeMove } from './game';

export const VALID_MOVE = 'VALID_MOVE';
export const INVALID_MOVE = 'INVALID_MOVE';

function validMove(board, pos, player, active) {
  return {
    type: VALID_MOVE,
    board,
    pos,
    player,
    active,
  };
}

function invalidMove(err) {
  return {
    type: INVALID_MOVE,
    err,
  };
}

export function move(moveBoard, movePos) {
  return (dispatch, getState) => {
    let board, game;
    game = getState().game;
    board = getState().board;

    if (game.winner) {
      return;
    }

    if (moveBoard === board.active || board.active === 9) {
      if (!board.board[moveBoard][movePos]) {
        dispatch(validMove(moveBoard, movePos, game.player, movePos));
      } else {
        dispatch(invalidMove("That spot is already taken."));
      }
    } else {
      dispatch(invalidMove("You can't move in that board."));
    }


    game = getState().game;
    board = getState().board;

    let checkFull = board.board[movePos].reduce( (prev, curr) => {
      if (!curr) {
        return prev +1;
      }
      return prev;
    }, 0)

    if (!checkFull) {
      dispatch(freeMove());
    }

    game.won.forEach((val, index) => {
      if(!val) {
        let winner = checkForWinner(board.board[index]);
        if (winner) {
          dispatch(winBoard(index, winner));
        }
      }
    });

    game = getState().game;

    if (checkForWinner(game.won)) {
      dispatch(winGame(checkForWinner(game.won)));
    }
  }
}
