import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../../src/reducers';

export const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-testid='${val}']`);

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
