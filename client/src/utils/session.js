import axios from 'axios';
import { route } from '../api';
export const CheckSession = async (email) => {
  const response = await axios.get(route.session + '?email=' + email);
  return response;
};
