import React from 'react';
import { shallow } from 'Enzyme';
import Title from './Title';

const title = 'High Score App';
let wrapped = shallow(<Title>{title}</Title>);

describe('renders title', () => {
  it('should render the title component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the title children', () => {
    expect(wrapped.find('h1').text()).toEqual(title);
  });
});
