import axios from 'axios';

const fetchClient = () => {
  const defaultOptions = {
    baseURL: '/api',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const instance = axios.create(defaultOptions);

  return instance;
};

export default fetchClient();
