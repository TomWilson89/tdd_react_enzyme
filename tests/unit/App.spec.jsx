import { mount } from 'enzyme';
import React from 'react';
import { getSecretWord } from '../../src/actions';
import App from '../../src/components/App';

jest.mock('../../src/actions');

const makeSut = () => {
  const sut = mount(<App />);
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
