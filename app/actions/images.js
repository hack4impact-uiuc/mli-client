// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const SET_LEFT = 'SET_LEFT';
export const SET_RIGHT = 'SET_RIGHT';
export const SET_OVERLAY = 'SET_OVERLAY';
export const SET_ANNOTATE_PRE = 'SET_ANNOTATE_PRE';
export const SET_ANNOTATE_POST = 'SET_ANNOTATE_POST';
export const SET_SIMILARITY = 'SET_SIMILARITY';

export function setLeft(left) {
  return {
    type: SET_LEFT,
    value: left
  };
}

export function setRight(right) {
  return {
    type: SET_RIGHT,
    value: right
  };
}

export function setOverlay(overlay) {
  return {
    type: SET_OVERLAY,
    value: overlay
  };
}

export function setAnnotatePre(annotatePre) {
  return {
    type: SET_ANNOTATE_PRE,
    value: annotatePre
  };
}

export function setAnnotatePost(annotatePost) {
  return {
    type: SET_ANNOTATE_POST,
    value: annotatePost
  };
}

export function setSimilarity(similarity) {
  return {
    type: SET_SIMILARITY,
    value: similarity
  };
}
