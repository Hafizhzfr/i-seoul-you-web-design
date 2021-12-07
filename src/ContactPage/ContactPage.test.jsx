import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from './ContactPage';

describe('Contact Page', () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  it('should show John in list', () => {
    const [firstListItem, secondListItem] = screen.getAllByRole('listitem');

    expect(firstListItem).toHaveTextContent('John : 0812');
    expect(secondListItem).toHaveTextContent('Bob : 0814');
  });
  it('should insert new contact of Johney', () => {
    const [name, phoneNumber] = screen.getAllByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.type(name, 'Johney');
    userEvent.type(phoneNumber, '832230');
    userEvent.click(submitButton);
    const [,, thirdListItem] = screen.getAllByRole('listitem');

    expect(thirdListItem).toHaveTextContent('Johney : 832230');
  });

  it('should show filtered contacts based on name', () => {
    const filterInput = screen.getByRole('textbox', {
      name: /filter:/i
    });
    userEvent.type(filterInput, 'John');
    const listContact = screen.getAllByRole('listitem');
    const [johnNameAndNumber] = listContact;

    expect(listContact).toHaveLength(1);
    expect(johnNameAndNumber).toHaveTextContent('John : 0812');
  });

  it('should show initial contacts when filter is erased', () => {
    const filterInput = screen.getByRole('textbox', {
      name: /filter:/i
    });
    userEvent.type(filterInput, 'John');
    const list = screen.getAllByRole('listitem');
    expect(list).toHaveLength(1);
    userEvent.clear(filterInput);

    const erasedFilterList = screen.getAllByRole('listitem');
    expect(erasedFilterList).toHaveLength(2);
  });
});
