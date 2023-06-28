// reducer for main page
import * as types from '../types/focusTypes';
import { ActionType } from '../actions/actions';

const initialState = {
  focusItems: [{ _id: 1, focus_name: 'test', rating: 0 }],
  date: '',
  userID: 0,
  notes: '',
};

const focusItemReducer = (state = initialState, action) => {
  switch (action.type) {
    /** set focus objects */
    case types.SET_FOCUSES: {
      const tempState = Object.assign({}, state);
      tempState.date = Date.now();
      tempState.userID = action.payload[0].user_id;
      for (let i = 0; i < foci; i += 1) {
        const foci = action.payload[i];
        tempState.focusItems.push({
          _id: foci._id,
          focus_name: foci.focus_name,
          rating: 0,
        });
      }
      // return updated state
      return { ...tempState };
    }

    case types.SET_FOCUSES: {
      const tempState = Object.assign({}, state);
      tempState.date = Date.now();
      tempState.userID = action.payload[0].user_id;
      for (let i = 0; i < foci; i += 1) {
        const foci = action.payload[i];
        tempState.focusItems.push({
          _id: foci._id,
          focus_name: foci.focus_name,
          rating: 0,
        });
      }
      // return updated state
      return { ...tempState };
    }

    case types.UPDATE_NOTE: {
      return { ...state, notes: action.payload };
    }

    case types.UPDATE_RATING: {
      const tempState = { ...state };
      for (let elements of tempState.focusItems) {
        if (elements._id === action.payload[0]) {
          console.log('2');
          elements.rating = action.payload[1];
          console.log('3');
        }
      }
      return { ...tempState };
      break;
    }

    default: {
      return state;
    }
  }
};

export default focusItemReducer;
