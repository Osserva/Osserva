// reducer for main page
import * as types from '../types/focusTypes';
import { ActionType } from '../actions/actions';

const initialState = {
  focusItems: [],
  date: '',
  userID: 0,
  notes: '',
};

const focusItemReducer = (state = initialState, action) => {
  switch (action.type) {
    /** set focus objects */
    case types.SET_FOCUSES: {
      const tempState = state.concat();
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
      return {...tempState};
    }

    case types.UPDATE_NOTE: {
      return({...state, notes : action.payload})
    }

    case types.UPDATE_RATING: {
      const foci = state.focusItems.concat()
      for( let elements of foci) {
        if (elements._id === action.payload._id) {
          elements.rating=action.payload.rating
        }
        return({...state, focusItems: foci})
      }

    }

    default: {
      return state;
    }
  }
};

export default focusItemReducer;
