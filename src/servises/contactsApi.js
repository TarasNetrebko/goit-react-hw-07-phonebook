import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://631b0a7cfae3df4dcff2bd92.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};
export const addContactToApi = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};
export const deleteContactFromApi = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
