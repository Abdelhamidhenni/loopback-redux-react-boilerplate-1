// Define an action type, it's used for reducer switching
import * as types from './types';

// Define the corresponding action creator, must return an object
export default function getStarted() {
  return {
    type: types.GET_STARTED,
  };
}
