import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import { mount } from 'Enzyme';
import Instructions from './Instructions';

const userInfo = { name: 'Rey', score: 327, id: 43, clicks: 7 };

describe('instructions', () => {
  let instructionsComponent;
  let placeholder_text;
  const handleInput = (event) => {
    return {...userInfo, name: event.target.value};
  };

  beforeEach(() => {
    placeholder_text = 'Sample Name';
    instructionsComponent = <Instructions userInfo={userInfo} handleInput={handleInput} placeholder={placeholder_text} />;
  });

  it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDom.render(instructionsComponent, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it('renders text', () => {
    render(instructionsComponent);
    const goal = screen.getByText(/Goal: Get the highest score you can in ten or fewer clicks./i);
    expect(goal).toBeInTheDocument();
  });
});

describe('input', () => {
  const handleInput = jest.fn();

  it('calls handleUpdate when the input field is changed', () => {
    const wrapper = mount(<Instructions userInfo={userInfo} handleInput={handleInput} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'Jess' } });
    expect(handleInput).toHaveBeenCalled();
  });
});
