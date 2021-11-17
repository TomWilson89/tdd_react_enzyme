import { SUCCESS_TYPES } from '../types/index';

export default (state = false, action) => {
  switch (action.type) {
    case SUCCESS_TYPES.SUCCESS:
      return true;
    default:
      return state;
  }
};
