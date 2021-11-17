// create root reducer

import { combineReducers } from 'redux';
import guessWords from './guessWord';

const rootReducer = combineReducers({
  guessWords,
});

export default rootReducer;
