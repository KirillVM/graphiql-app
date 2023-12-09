import { FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ROUTES from '../../router/routes';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { userToken, signIn } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userToken = 'Token'; // presumably getting the token after registartion

    if (userToken) {
      signIn(userToken, () => navigate(ROUTES.ROOT + ROUTES.GRAPHIQL));
    }
  };

  if (userToken) {
    return <Navigate to={ROUTES.ROOT + ROUTES.GRAPHIQL} replace />;
  }

  return (
    <>
      <h1>SignUpPage</h1>
    </>
  );
};

export default SignUpPage;
