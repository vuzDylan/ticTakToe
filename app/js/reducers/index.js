import { combineReducers } from 'redux';
import board from './board';
import game from './game';
import invalid from './invalid';

export default combineReducers({
  board,
  game,
  invalid,
});
