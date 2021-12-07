import axios from 'axios';

import { BASE_URL, fetchContacts } from './utils';

jest.mock('axios');

describe('#fetchContacts', () => {
  it('should return contact list when API call is successful', async () => {
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
    axios.get.mockResolvedValueOnce(contacts);

    const result = await fetchContacts();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/contacts`);
    expect(result).toEqual(contacts);
  });

  it('should return error when API call fails', async () => {
    const message = 'Network Error';
    axios.get.mockRejectedValueOnce(new Error(message));

    const result = await fetchContacts();
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/contacts`);
    expect(result.message).toEqual(message);
  });
});
