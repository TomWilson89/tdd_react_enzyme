import stringsModule from '../../../src/helpers/string';

const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: {},
};

describe('getStringByLanguage', () => {
  test('should return correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings);
    expect(string).toBe('submit');
  });

  test('should return correct submit string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', strings);
    expect(string).toBe('🚀');
  });

  test('should return english submit when language does no exist', () => {
    const string = getStringByLanguage('invalidLanguage', 'submit', strings);
    expect(string).toBe('submit');
  });

  test('should return english submit when key does not exist', () => {
    const string = getStringByLanguage('mermish', 'submit', strings);
    expect(string).toBe('submit');
  });
});
