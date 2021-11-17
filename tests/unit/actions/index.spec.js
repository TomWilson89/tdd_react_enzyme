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

    // update to test app in Redux / context sections
    const response = await getSecretWord();
    expect(response).toBe(secretWord);
  });
});
