import {
  OPEN_DIALOG
} from './AppTypes';

export default function(state = {}, action) {

  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        openedDialog: action.payload
      };

    default:
      return state;
  }
}
