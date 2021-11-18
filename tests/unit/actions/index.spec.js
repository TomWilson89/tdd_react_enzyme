import moxios from 'moxios';
import { getSecretWord } from '../../../src/actions';
import { storeFactory } from '../../utils';

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('should return secret word', async () => {
    const store = storeFactory();
    const secretWord = 'party';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord());
    const state = store.getState().guessWords;
    expect(state.secretWord).toBe(secretWord);
  });
});
