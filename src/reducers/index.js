// create root reducer

import { combineReducers } from 'redux';
import successReducer from './guessWord';

const rootReducer = combineReducers({
  guessWords: successReducer,
});

export default rootReducer;
