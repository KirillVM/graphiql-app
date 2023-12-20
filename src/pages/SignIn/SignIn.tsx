import classes from './SignIn.module.scss';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent } from 'react';
import ROUTES from '../../router/routes';
import clsx from 'clsx';
import LoginForm from '@src/components/LoginForm/LoginForm';

const SignInPage = () => {
  const navigate = useNavigate();
  const { userToken, signIn } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const token = 'Token'; // presumably getting the token after loginisation

    if (token) {
      signIn(token, () => navigate(ROUTES.ROOT + ROUTES.GRAPHIQL));
    }
  };

  if (userToken) {
    return <Navigate to={ROUTES.ROOT + ROUTES.GRAPHIQL} replace />;
  }

  return (
    <div className={clsx(classes.wrapper)}>
      <div className={clsx(classes.header)}>
        <h1>SIGN IN</h1>
        <p className={clsx(classes.header__question)}>
          {`Don't have an account? `}
          <NavLink
            to={ROUTES.ROOT + ROUTES.SIGNUP}
            className={classes.header__link}
          >
            Sign Up
          </NavLink>
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default SignInPage;
