import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent } from 'react';
import ROUTES from '../../router/routes';

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
    <>
      <h1>SignInPage</h1>
    </>
  );
};

export default SignInPage;
