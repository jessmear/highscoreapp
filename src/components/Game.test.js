import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import { getWholeNumberAverage } from '../utils';

const playerList = [
  { name: 'Luke', score: 291, id: 41, clicks: 7 },
  { name: 'Vader', score: 6, id: 40, clicks: 9 },
  { name: 'Leia', score: 348, id: 42, clicks: 4 }
];

const userInfo = { name: 'Rey', score: 327, id: 43, clicks: 7, average: getWholeNumberAverage(327, 7) };

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game playerList={playerList} userInfo={userInfo} />, div);
});
