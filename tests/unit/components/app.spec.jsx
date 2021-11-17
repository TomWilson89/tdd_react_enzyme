import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { getSecretWord } from '../../../src/actions';
import App from '../../../src/components/App';
import { storeFactory } from '../../utils';

jest.mock('../../../src/actions');

const makeSut = (initialState = {}) => {
  const store = storeFactory(initialState);
  const sut = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return {
    sut,
  };
};

describe('Main react component', () => {
  test('should render  non-empty and without error a', () => {
    const { sut } = makeSut();
    expect(sut.exists()).toBe(true);
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
