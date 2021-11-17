import checkPropTypes from 'check-prop-types';

export const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-testid='${val}']`);

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};
