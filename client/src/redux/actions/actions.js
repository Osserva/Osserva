import * as types from '../types/focusTypes';
import { createAction } from '@reduxjs/toolkit';

const actions = {};

actions.setFocuses = createAction(types.SET_FOCUSES);

actions.updateNote = createAction(types.UPDATE_NOTE);

actions.updateRating = createAction(types.UPDATE_RATING);

actions.updateFocuses = createAction(types.UPDATE_FOCUSES)
export default actions;
