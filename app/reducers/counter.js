// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import type { Action } from './types';

const initialState = {
  left: '',
  right: '',
  overlay: ''
};

export default function counter(state: initialState, action: Action) {
  switch (action.type) {
    case SET_LEFT:
      return {
        ...state,
        left: action.value
      };
    case SET_RIGHT:
      return {
        ...state,
        right: action.value
      };
    case SET_OVERLAY:
      return {
        ...state,
        overlay: action.value
      };
    default:
      return state;
  }
}
