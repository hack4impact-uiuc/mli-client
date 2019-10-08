/**
 * @file Defining the the Redux state and reducer.
 */

import { ActionTypes } from "./actions";

/**
 * The initial state fed into the reducer.
 */
export const initialState = {
  example: "example"
};

/**
 * The reducer function.
 * @param state the previous state.
 * @param action the incoming action.
 * @returns the new state.
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXAMPLE:
      return {
        ...state,
        example: action.value
      };
    default:
      return state;
  }
};
