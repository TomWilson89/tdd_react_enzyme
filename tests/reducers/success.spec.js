import successReducer from '../../src/reducers/success';
import { SUCCESS_TYPES } from '../../src/types';

describe('successReducer', () => {
  test('should return false if previous state is undefined', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  test('should return previous state if unkown type is provided', () => {
    const oldState = successReducer(undefined, {});
    const newState = successReducer(false, { type: 'UNKNOWN' });
    expect(newState).toBe(oldState);
  });

  test('should return true if SUCCESS type is provided', () => {
    const newState = successReducer(true, { type: SUCCESS_TYPES.SUCCESS });
    expect(newState).toBe(true);
  });
});
