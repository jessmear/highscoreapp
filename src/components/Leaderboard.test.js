import React from 'react';
import ReactDOM from 'react-dom';
import Leaderboard, { sortData } from './Leaderboard';

const playerList = [
  { name: 'Luke', score: 291, id: 41 },
  { name: 'Vader', score: 6, id: 40 },
  { name: 'Leia', score: 348, id: 42 }
];

const sortedPlayerList = [
    { name: 'Leia', score: 348, id: 42 },
    { name: 'Luke', score: 291, id: 41 },
    { name: 'Vader', score: 6, id: 40 }
  ]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Leaderboard playerList={playerList} />, div);
});

test('when sortData is called, list is sorted from highest to lowest score', () => {
  expect(sortData(playerList)).toEqual(sortedPlayerList)
});
