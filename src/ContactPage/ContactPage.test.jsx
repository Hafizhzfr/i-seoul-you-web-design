import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from './ContactPage';

describe('Contact Page', () => {
  it('should show John in list', () => {
    render(<ContactPage />);
    const [firstListItem, secondListItem] = screen.getAllByRole('listitem');

    expect(firstListItem).toHaveTextContent('John : 0812');
    expect(secondListItem).toHaveTextContent('Bob : 0814');
  });
  it('should insert new contact of Johney', () => {
    render(<ContactPage />);
    const [name, phoneNumber] = screen.getAllByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.type(name, 'Johney');
    userEvent.type(phoneNumber, '832230');
    userEvent.click(submitButton);
    const [,, thirdListItem] = screen.getAllByRole('listitem');

    expect(thirdListItem).toHaveTextContent('Johney : 832230');
  });
});
