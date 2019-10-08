/**
 * @file Initializing a redux store.
 */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState, reducer } from "./reducer";

/**
 * Initializes the redux store.
 * @param state the initial state.
 * @returns the initial store.
 */
export const initializeStore = (state = initialState) =>
  createStore(reducer, state, composeWithDevTools(applyMiddleware()));
