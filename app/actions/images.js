// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const SET_LEFT = 'SET_LEFT';
export const SET_RIGHT = 'SET_RIGHT';
export const SET_OVERLAY = 'SET_OVERLAY';

export function setLeft(left) {
  return {
    type: SET_LEFT,
    left
  };
}

export function setRight(right) {
  return {
    type: SET_RIGHT,
    right
  };
}

export function setOverlay(overlay) {
  return {
    type: SET_OVERLAY,
    overlay
  };
}