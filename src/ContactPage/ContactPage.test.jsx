import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import ContactPage from './ContactPage';

jest.mock('axios');
describe('Contact Page', () => {
  it('should show John in list', async () => {
    const contacts = [
      {
        id: 1,
        name: 'John',
        phoneNumber: '0812'
      },
      {
        id: 2,
        name: 'Bob',
        phoneNumber: '0814'
      }
    ];
    axios.get.mockResolvedValueOnce({ data: contacts });
    render(<ContactPage />);

    const [firstListItem, secondListItem] = await screen.findAllByRole('listitem');

    expect(firstListItem).toHaveTextContent('John : 0812');
    expect(secondListItem).toHaveTextContent('Bob : 0814');
  });
  it('should insert new contact of Johney', async () => {
    const contacts = [
      {
        id: 1,
        name: 'John',
        phoneNumber: '0812'
      },
      {
        id: 2,
        name: 'Bob',
        phoneNumber: '0814'
      }
    ];
    axios.get.mockResolvedValueOnce({ data: contacts });
    render(<ContactPage />);
    const [name, phoneNumber] = screen.getAllByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await screen.findAllByRole('listitem');
    userEvent.type(name, 'Johney');
    userEvent.type(phoneNumber, '832230');
    userEvent.click(submitButton);
    const [,, thirdListItem] = screen.getAllByRole('listitem');

    expect(thirdListItem).toHaveTextContent('Johney : 832230');
  });

  it('should show filtered contacts based on name', async () => {
    const contacts = [
      {
        id: 1,
        name: 'John',
        phoneNumber: '0812'
      },
      {
        id: 2,
        name: 'Baj',
        phoneNumber: '0814'
      }
    ];
    axios.get.mockResolvedValueOnce({ data: contacts });
    render(<ContactPage />);
    const filterInput = screen.getByRole('textbox', {
      name: /filter:/i
    });
    await screen.findAllByRole('listitem');
    userEvent.type(filterInput, 'John');
    const listContact = screen.getAllByRole('listitem');
    const [johnNameAndNumber] = listContact;

    expect(listContact).toHaveLength(1);
    expect(johnNameAndNumber).toHaveTextContent('John : 0812');
  });

  it('should show initial contacts when filter is erased', async () => {
    const contacts = [
      {
        id: 1,
        name: 'John',
        phoneNumber: '0812'
      },
      {
        id: 2,
        name: 'Bob',
        phoneNumber: '0814'
      }
    ];
    axios.get.mockResolvedValueOnce({ data: contacts });
    render(<ContactPage />);
    const filterInput = screen.getByRole('textbox', {
      name: /filter:/i
    });
    await screen.findAllByRole('listitem');
    userEvent.type(filterInput, 'John');
    const list = screen.getAllByRole('listitem');
    expect(list).toHaveLength(1);
    userEvent.clear(filterInput);

    await screen.findAllByRole('listitem');
    const erasedFilterList = screen.getAllByRole('listitem');
    expect(erasedFilterList).toHaveLength(2);
  });
});
