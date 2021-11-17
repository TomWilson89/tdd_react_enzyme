// create root reducer

import { combineReducers } from 'redux';
import successReducer from './success';

const rootReducer = combineReducers({
  success: successReducer,
});

export default rootReducer;
