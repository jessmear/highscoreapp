import React from 'react';
import { mount } from 'Enzyme';
import Title from './Title';

const title = 'High Score App';
let wrapped = mount(<Title>{title}</Title>);

describe('renders title', () => {
  it('renders the title component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the title children', () => {
    expect(wrapped.find('h1').text()).toEqual(title);
  });
});
