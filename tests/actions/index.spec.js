import moxios from 'moxios';
import { correctGuess, getSecretWord } from '../../src/actions';
import { SUCCESS_TYPES } from '../../src/types';

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('should return secret word', async () => {
    const secretWord = 'party';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // update to test app in Redux / context sections
    const response = await getSecretWord();
    expect(response).toBe(secretWord);
  });
});

describe('correctGuess', () => {
  test('should return an object with correct type', () => {
    const expectedAction = {
      type: SUCCESS_TYPES.SUCCESS,
    };
    expect(correctGuess()).toStrictEqual(expectedAction);
  });
});
