import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';

export const fetchContacts = async () => {
  try {
    return await axios.get(`${BASE_URL}/contacts`);
  } catch (error) {
    return error;
  }
};
