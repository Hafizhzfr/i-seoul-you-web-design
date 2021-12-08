import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { when } from 'jest-when';
import HomePage from './HomePage';

jest.mock('axios');
const mockAndRender = () => {
  const contacts = {
    data: [
      {
        name: 'Nevalen Aginda ',
        phoneNumber: '234902123',
        id: 4
      },
      {
        name: 'Siti Badriah',
        phoneNumber: '12413423',
        id: 3
      }
    ]
  };
  when(axios.get).calledWith('http://localhost:3001/contacts?_sort=id&_limit=2&_order=desc').mockResolvedValueOnce(contacts);
  render(<HomePage />);
};

describe('Home Page', () => {
  it('should render list contact', async () => {
    mockAndRender();

    const [firstListItem, secondListItem] = await screen.findAllByRole('listitem');

    expect(firstListItem).toHaveTextContent('Nevalen Aginda : 234902123');
    expect(secondListItem).toHaveTextContent('Siti Badriah : 12413423');
  });
});
