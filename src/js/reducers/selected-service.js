import { ACTIONS } from '../actions/constants';

export default function(state=null, action) {
  switch (action.type) {
    case ACTIONS.RECEIVE_SERVICE:
      return action.payload;
    default:
      return state;
  }
}
