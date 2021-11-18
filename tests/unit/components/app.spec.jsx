import { mount } from 'enzyme';
import React from 'react';
import { getSecretWord } from '../../../src/actions';
import App from '../../../src/components/App';
import { findByTestAttribute } from '../../utils';

jest.mock('../../../src/actions');

const makeSut = () => {
  const sut = mount(<App />);
  return {
    sut,
  };
};

describe('Main react component', () => {
  describe.each([
    [null, true, false],
    ['party', false, true],
  ])('renders with secretword as %s', (secretWord, loadingShows, appShows) => {
    let sut;
    let originalUseReducer;
    const initialState = {
      secretWord,
      guessedWords: [],
      success: false,
      language: 'en',
    };

    beforeEach(() => {
      originalUseReducer = React.useReducer;
      const mockUseReducer = jest.fn().mockReturnValue([initialState, jest.fn()]);
      React.useReducer = mockUseReducer;
      sut = makeSut().sut;
    });

    afterEach(() => {
      React.useReducer = originalUseReducer;
    });

    test(`should ${
      loadingShows ? '' : 'not'
    } render spinner if loadingShows is ${loadingShows}`, () => {
      const spinnerComponent = findByTestAttribute(sut, 'component-spinner');
      expect(spinnerComponent.exists()).toBe(loadingShows);
    });

    test(`should ${appShows ? '' : 'not'} render App if appShows is ${appShows}`, () => {
      const appComponent = findByTestAttribute(sut, 'component-app');
      expect(appComponent.exists()).toBe(appShows);
    });
  });

  describe('getSecretWord', () => {
    beforeEach(async () => {
      await getSecretWord.mockClear();
    });

    test('should call getSecretWord on app mount', () => {
      makeSut();
      expect(getSecretWord).toHaveBeenCalledTimes(1);
    });

    test('should not call getSecretWord on app update', () => {
      const { sut } = makeSut();
      getSecretWord.mockClear();
      sut.setProps();
      expect(getSecretWord).toHaveBeenCalledTimes(0);
    });
  });
});
