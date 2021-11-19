import { mount, shallow } from 'enzyme';
import React from 'react';
import guessWordsContext from '../../../src/context/guessWord';

// fuinctional component that calls useGuessWords for our test
const FunctionalComponent = () => {
  guessWordsContext.useGuessWords();
  return <div />;
};

describe('useGuessWords', () => {
  test('should throw an error when not wrapped in GuessWordsContext', () => {
    expect(() => {
      shallow(<FunctionalComponent />);
    }).toThrow('useGuessWords must be used within a GuessWordsProvider');
  });

  test('should not throw an error when wrapped in GuessWordContext', () => {
    expect(() => {
      mount(
        <guessWordsContext.GuessWordsProvider>
          <FunctionalComponent />
        </guessWordsContext.GuessWordsProvider>
      );
    }).not.toThrow();
  });
});
