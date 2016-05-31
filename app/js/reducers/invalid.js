import { VALID_MOVE, INVALID_MOVE } from '../actions/move';

export default function invalid(state="", action) {
  switch(action.type) {
    case VALID_MOVE:
      return "";
    case INVALID_MOVE:
      return action.err;
    default:
      return state;
  }
}
