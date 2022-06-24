/**
 * All Backend Api endpoints
 */
const baseUrl = 'https://pure-wildwood-48840.herokuapp.com/api';
export const route = {
  SignUp: baseUrl + '/auth/register',
  SignIn: baseUrl + '/auth/signIn',
  Search: baseUrl + '/search',
  sendMail: baseUrl + '/message/mail',
  session: baseUrl + '/auth/session',
  user_del: baseUrl + '/user/delete/',
};
