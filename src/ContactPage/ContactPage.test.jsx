import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { when } from 'jest-when';
import ContactPage from './ContactPage';

jest.mock('axios');
const mockAndRender = () => {
  const contacts = {
    data: [
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
    ]
  };
  when(axios.get).calledWith('http://localhost:3001/contacts').mockResolvedValueOnce(contacts);
  render(<ContactPage />);
};

describe('Contact Page', () => {
  it('should render list contact', async () => {
    mockAndRender();
    const [firstListItem, secondListItem] = await screen.findAllByRole('listitem');

    expect(firstListItem).toHaveTextContent('John : 0812');
    expect(secondListItem).toHaveTextContent('Bob : 0814');
  });
  it('should not insert contact when name and phone number is empty', async () => {
    mockAndRender();
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await screen.findAllByRole('listitem');

    userEvent.click(submitButton);
    const listitem = screen.getAllByRole('listitem');

    expect(listitem).toHaveLength(2);
  });

  it('should show filtered contacts based on name', async () => {
    mockAndRender();
    const filterInput = screen.getByRole('textbox', {
      name: /filter:/i
    });

    userEvent.type(filterInput, 'John');
    const listContact = await screen.findAllByRole('listitem');
    const [johnNameAndNumber] = listContact;

    expect(listContact).toHaveLength(1);
    expect(johnNameAndNumber).toHaveTextContent('John : 0812');
  });

  it('should show initial contacts when filter is erased', async () => {
    mockAndRender();
    const filterInput = screen.getByRole('textbox', {
      name: /filter:/i
    });
    userEvent.type(filterInput, 'John');
    const list = await screen.findAllByRole('listitem');
    expect(list).toHaveLength(1);

    userEvent.clear(filterInput);
    const erasedFilterList = screen.getAllByRole('listitem');

    expect(erasedFilterList).toHaveLength(2);
  });

  it('should return error when failed fetch contact', async () => {
    when(axios.get).calledWith('http://localhost:3001/contacts').mockRejectedValue();

    render(<ContactPage />);
    const errorMessage = await screen.findByText(/Server Is Under Maintain/i);

    expect(errorMessage).toBeInTheDocument();
  });
});

describe('#createContact', () => {
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
  it('should add data to db.json and in the interface', async () => {
    const data = {
      data: contacts
    };
    const newContact = {
      name: 'James',
      phoneNumber: '123123'
    };
    when(axios.get).calledWith('http://localhost:3001/contacts').mockResolvedValueOnce(data);
    render(<ContactPage />);
    await screen.findAllByRole('listitem');
    when(axios.post).calledWith('http://localhost:3001/contacts', newContact).mockResolvedValueOnce({
      data: { ...newContact, id: 3 }
    });
    const nameInput = screen.getByRole('textbox', {
      name: /name/i
    });
    const phoneNumberInput = screen.getByRole('textbox', {
      name: /phone number/i
    });
    const submitButton = screen.getByRole('button', {
      name: /submit/i
    });

    userEvent.type(nameInput, 'James');
    userEvent.type(phoneNumberInput, '123123');
    userEvent.click(submitButton);
    await screen.findAllByRole('listitem');
    const [,, james] = screen.getAllByRole('listitem');

    expect(james).toHaveTextContent('James : 123123');
  });
});
