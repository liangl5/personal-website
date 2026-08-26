import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders hero name and section nav links', () => {
  render(<App />);
  expect(screen.getAllByText(/Luke Liang/i).length).toBeGreaterThan(0);

  const nav = screen.getByRole('navigation', { name: /section navigation/i });
  expect(nav).toBeInTheDocument();
  expect(within(nav).getByRole('link', { name: /^Resume/ })).toBeInTheDocument();
  expect(within(nav).getByRole('link', { name: /Pub/ })).toBeInTheDocument();
});
