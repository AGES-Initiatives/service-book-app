import { ACTIONS } from './constants';

export default function changeTitle(title) {
  return {
    type: ACTIONS.CHANGE_TITLE,
    payload: title
  }
};
