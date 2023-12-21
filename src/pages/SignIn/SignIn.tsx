import classes from './SignIn.module.scss';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import ROUTES from '../../router/routes';
import clsx from 'clsx';
import LoginForm from '@src/components/LoginForm/LoginForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@src/services/firebaseApi/firebaseApi';

const SignInPage = () => {
  const navigate = useNavigate();
  const { userToken, signIn } = useAuth();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      signIn(user.refreshToken, () => navigate(ROUTES.ROOT + ROUTES.GRAPHIQL));
    }
  }, [user, signIn, navigate]);

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
