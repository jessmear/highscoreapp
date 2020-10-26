import { render, screen } from '@testing-library/react';
import HighScoreApp from './HighScoreApp';

test('renders learn react link', () => {
  render(<HighScoreApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
