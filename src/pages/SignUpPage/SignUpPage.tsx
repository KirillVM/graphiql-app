import classes from './SignUpPage.module.scss';
import { FormEvent } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ROUTES from '../../router/routes';
import RegistrationForm from '@src/components/RegistrationForm/RegistrationForm';
import clsx from 'clsx';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { userToken, signIn } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userToken = localStorage.getItem('refreshToken') || ''; // presumably getting the token after registartion

    if (userToken) {
      signIn(userToken, () => navigate(ROUTES.ROOT + ROUTES.GRAPHIQL));
    }
  };

  if (userToken) {
    return <Navigate to={ROUTES.ROOT + ROUTES.GRAPHIQL} replace />;
  }

  return (
    <div className={clsx(classes.wrapper)}>
      <div className={clsx(classes.header)}>
        <h1>SIGN UP</h1>
        <p className={clsx(classes.header__question)}>
          {`Dont have an account? `}
          <NavLink to={ROUTES.SIGNUP} className={classes.header__link}>
            Sign Up
          </NavLink>
        </p>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default SignUpPage;
