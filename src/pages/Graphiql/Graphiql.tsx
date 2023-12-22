import { useAuth } from '@src/hooks/useAuth';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GraphiqlPage = () => {
  const { isSignIn, setIsSignIn } = useAuth();
  useEffect(() => {
    if (isSignIn) {
      toast.success('You succsessfuly sign in!');
      setIsSignIn(false);
    }
  }, [isSignIn]);
  return (
    <>
      <h1>GraphiqlPage</h1>
      <ToastContainer style={{ top: '11rem' }} />
    </>
  );
};

export default GraphiqlPage;
