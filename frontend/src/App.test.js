import { render, screen } from '@testing-library/react';
import App from './App';

test('renders medical chatbot heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Medical Chatbot/i);
  expect(headingElement).toBeInTheDocument();
});
