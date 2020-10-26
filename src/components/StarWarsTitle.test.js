import { render, screen } from '@testing-library/react';
import StarWarsTitle from './HighScoreApp';

test('renders star wars title', () => {
  render(<StarWarsTitle />);
  const title = screen.getByText(/High Score App/i);
  expect(title).toBeInTheDocument();
});


