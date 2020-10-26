import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

const playerList = [
  { name: 'Luke', score: 291, id: 41 },
  { name: 'Vader', score: 6, id: 40 },
  { name: 'Leia', score: 348, id: 42 }
];

const userInfo = { name: 'Rey', score: 327, id: 43 }

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game playerList={playerList} userInfo={userInfo} />, div);
});
