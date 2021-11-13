import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import App from '../src/components/App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Main react component', () => {
  test('should render  non-empty and without error a', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
