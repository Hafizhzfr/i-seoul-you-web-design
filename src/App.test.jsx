import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render table header Name and Phone', () => {
    render(<App />);
    const [tableHeader] = screen.getAllByRole('heading');

    expect(tableHeader).toHaveTextContent('Insert New Contact');
  });
});
