// reducer for main page
import * as types from '../types/focusTypes';
import { ActionType } from '../actions/actions';


const initialState = {
  focusItems: [],
  date: '',
  userID: 0,
  notes: '',
};

const focusItemReducer = (
  state= initialState,
  action
) => {
  let focusItems;
  let date;
  let userID;
  let notes;

  switch (action.type) {
    case types.SET_FOCUSES:
      return {
        ...state,
        focusItems,
        date,
        userID,
        notes,
      };
  }
};

export default focusItemReducer;
