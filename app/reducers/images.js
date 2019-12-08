// @flow
import {
  SET_LEFT,
  SET_RIGHT,
  SET_OVERLAY,
  SET_LABEL_PRE,
  SET_LABEL_POST
} from '../actions/images';
import type { Action } from './types';

const initialState = {
  left: '',
  right: '',
  overlay: '',
  labelPre: '',
  labelPost: ''
};

export default function images(state = initialState, action: Action) {
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
    case SET_LABEL_PRE:
      return {
        ...state,
        labelPre: action.value
      };
    case SET_LABEL_POST:
      return {
        ...state,
        labelPost: action.value
      };
    default:
      return state;
  }
}
