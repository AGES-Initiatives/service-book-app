import { ACTIONS } from '../actions/constants';

export default function(state=false, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_SETTINGS:
      return !state;
    default:
      return state;
  }
}
