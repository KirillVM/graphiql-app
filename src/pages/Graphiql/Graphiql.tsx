import { useAuth } from '@src/hooks/useAuth';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GraphiqlPage = () => {
  const { userToken } = useAuth();
  useEffect(() => {
    toast.success('You succsessfuly sign in!');
  }, [userToken]);
  return (
    <>
      <h1>GraphiqlPage</h1>
      <ToastContainer style={{ top: '11rem' }} />
    </>
  );
};

export default GraphiqlPage;
