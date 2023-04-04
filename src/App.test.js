import { render, screen } from '@testing-library/react';
import App from './App';


beforeEach(()=>{
  render(<App />)

});

test('renders logo', () => {
  const logo = screen.getByRole('img', {name:'Logo Rick and Morty'});
  expect(logo).toBeInTheDocument();
});

test('renders title', () => {
  const title = screen.getByText(/List/i);
  expect(title).toBeInTheDocument();
});
