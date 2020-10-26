import { render, screen } from '@testing-library/react';
import StandardTitle from './HighScoreApp';

test('renders star wars title', () => {
  render(<StandardTitle />);
  const title = screen.getByText(/High Score App/i);
  expect(title).toBeInTheDocument();
});


