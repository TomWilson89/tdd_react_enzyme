/* eslint-disable no-console */
import stringsModule from '../../../src/helpers/string';

const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: {},
};

describe('getStringByLanguage', () => {
  const mockWarning = jest.fn();

  let originalConsoleWarn;
  beforeEach(() => {
    originalConsoleWarn = console.warn;
    console.warn = mockWarning;
  });

  afterEach(() => {
    console.warn = originalConsoleWarn;
  });

  test('should return correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarning).not.toHaveBeenCalled();
  });

  test('should return correct submit string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', strings);
    expect(string).toBe('🚀');
    expect(mockWarning).not.toHaveBeenCalled();
  });

  test('should return english submit when language does no exist', () => {
    const string = getStringByLanguage('invalidLanguage', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarning).toHaveBeenCalled();
  });

  test('should return english submit when key does not exist', () => {
    const string = getStringByLanguage('mermish', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarning).toHaveBeenCalled();
  });
});
