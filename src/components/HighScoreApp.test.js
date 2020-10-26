import React from 'react';
import ReactDOM from 'react-dom';
import HighScoreApp from './HighScoreApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HighScoreApp />, div);
});
