import classes from './SignUp.module.scss';
import { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ROUTES from '../../router/routes';
import RegistrationForm from '@src/components/RegistrationForm/RegistrationForm';
import clsx from 'clsx';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { userToken, signIn } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('refreshToken')
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   const token = 'Token'; // presumably getting the token after registartion

  if (token) {
    signIn(token, () => navigate(ROUTES.ROOT + ROUTES.GRAPHIQL));
  }

  if (userToken) {
    return <Navigate to={ROUTES.ROOT + ROUTES.GRAPHIQL} replace />;
  }

  return (
    <div className={clsx(classes.wrapper)}>
      <div className={clsx(classes.header)}>
        <h1>SIGN UP</h1>
        <p className={clsx(classes.header__question)}>
          {`Have an account? `}
          <NavLink
            to={ROUTES.ROOT + ROUTES.SIGNIN}
            className={classes.header__link}
          >
            Sign In
          </NavLink>
        </p>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default SignUpPage;
