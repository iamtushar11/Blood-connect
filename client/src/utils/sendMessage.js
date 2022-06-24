import axios from 'axios';
import { route } from '../api';

export const SendMail = async (data) => {
  const res = await axios.post(route.sendMail, data);
  return res;
};
