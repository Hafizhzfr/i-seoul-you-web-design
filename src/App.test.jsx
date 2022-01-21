import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should navigate to math if math on navbar is clicked', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mathNav = screen.getByRole('link', { name: /calculator/i });
    const incrementNav = screen.getByRole('link', { name: /increments/i });
    const cvNav = screen.getByRole('link', { name: /cv generator/i });

    expect(mathNav).toBeInTheDocument();
    expect(incrementNav).toBeInTheDocument();
    expect(cvNav).toBeInTheDocument();
  });
});
