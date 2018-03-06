import { ACTIONS } from '../actions/constants';

export default function(state="Service Book", action) {
  switch (action.type) {
    case ACTIONS.CHANGE_TITLE:
      return action.payload;
    default:
      return state;
  }
}
