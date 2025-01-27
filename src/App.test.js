import { render, screen } from '@testing-library/react';
import App from './App';

test('Kseniia', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kseniia Brauer/i);
  expect(linkElement).toBeInTheDocument();
});
