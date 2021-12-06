import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('Contact Page', () => {
  it('should show John in list', () => {
    render(<ContactPage />);
    const [firstListItem, secondListItem] = screen.getAllByRole('listitem');

    expect(firstListItem).toHaveTextContent('John : 0812');
    expect(secondListItem).toHaveTextContent('Bob : 0814');
  });
});
