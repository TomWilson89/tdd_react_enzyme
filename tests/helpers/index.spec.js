import { getLetterMatchCount } from '../../src/helpers';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('should return 0 when there are no matching letters', () => {
    const testWord = 'bones';
    const matchCount = getLetterMatchCount(testWord, secretWord);
    expect(matchCount).toBe(0);
  });

  test('should return 3 when there are 3 matching letters', () => {
    const testWord = 'train';
    const matchCount = getLetterMatchCount(testWord, secretWord);
    expect(matchCount).toBe(3);
  });

  test('should return correct count when there are duplicate letters in the guess', () => {});
});
