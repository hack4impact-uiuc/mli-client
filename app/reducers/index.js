// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import images from './images';

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    images
  });
}
