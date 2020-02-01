// @flow
import {
  SET_LEFT,
  SET_RIGHT,
  SET_OVERLAY,
  SET_ANNOTATE_PRE,
  SET_ANNOTATE_POST
} from '../actions/images';
import type { Action } from './types';

const initialState = {
  left: '',
  right: '',
  overlay: '',
  annotatePre: '',
  annotatePost: ''
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
    case SET_ANNOTATE_PRE:
      return {
        ...state,
        annotatePre: action.value
      };
    case SET_ANNOTATE_POST:
      return {
        ...state,
        annotatePost: action.value
      };
    default:
      return state;
  }
}
