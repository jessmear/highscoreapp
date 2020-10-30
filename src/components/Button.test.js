import React from 'react';
import { mount } from 'Enzyme';
import Button from './Button';

const buttonText = 'Test Button Text';
let wrapped = mount(<Button>{buttonText}</Button>);

describe('renders button', () => {
  it('should render the button component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the button children', () => {
    expect(wrapped.find('button').text()).toEqual(buttonText);
  });
});
