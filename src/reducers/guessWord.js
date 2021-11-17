import { GUESS_WORD } from '../types/index';

const initialState = {
  success: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GUESS_WORD.SUCCESS:
      return {
        ...state,
        success: true,
      };
    default:
      return state;
  }
};
