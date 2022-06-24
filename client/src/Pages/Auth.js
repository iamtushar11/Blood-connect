import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthForm from '../Components/Auth/AuthForm';
import UserContext from '../context/user/UserContext';

const Auth = () => {
  const Auth = useContext(UserContext);
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      (!Auth.User && params.type === 'edit') ||
      (Auth.User && params.type !== 'edit')
    ) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [params.type]);

  return <AuthForm isLogin={params.type === 'login'} />;
};

export default Auth;
