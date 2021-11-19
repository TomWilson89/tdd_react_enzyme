import { mount, shallow } from 'enzyme';
import React from 'react';
import successContext from '../../../src/context/success';

// functional component that calls useSuccess for our test
const FunctionalComponent = () => {
  successContext.useSuccess();
  return <div />;
};

describe('successContext', () => {
  test('should throw error when not wrapped in SuccessProvier', () => {
    expect(() => {
      shallow(<FunctionalComponent />);
    }).toThrow('useSuccess must be used within a SuccessProvider');
  });

  test('should not throw when wrapped in SuccessProvider', () => {
    expect(() => {
      mount(
        <successContext.SuccessProvider>
          <FunctionalComponent />
        </successContext.SuccessProvider>
      );
    }).not.toThrow();
  });
});
