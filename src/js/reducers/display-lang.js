import { ACTIONS } from '../actions/constants';

export default function(state="en", action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_LANGUAGE:
      if (state == "en") {
        return "gr";
      } else if (state == "gr") {
        return "en"
      }
      return state;
    default:
      return state;
  }
}
