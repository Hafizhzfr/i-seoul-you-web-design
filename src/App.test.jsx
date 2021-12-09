import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should show Hello Trainees', () => {
    render(<App />);
    const [tableHeader] = screen.getAllByRole('heading');

    expect(tableHeader).toHaveTextContent('Hello Trainess');
  });
});
