import moxios from 'moxios';
import { getSecretWord } from '../../../src/actions';

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

    const setSecretWord = jest.fn();
    // update to test app in Redux / context sections
    await getSecretWord(setSecretWord);
    expect(setSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
