import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter count/>);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByRole('button', {name: '+' }));
  const counterDisplay = screen.getByTestId('count');
  expect(counterDisplay).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByRole('button', {name: '-' }));
  const counterDisplay = screen.getByTestId('count');
  expect(counterDisplay).toHaveTextContent('-1');
});
