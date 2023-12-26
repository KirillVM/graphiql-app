import Editor from './Editor/Editor';
import Viewer from './Viewer/Viewer';
import styles from './Graphiql.module.scss';
import { useAuth } from '@src/hooks/useAuth';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Documentation from '@src/components/Documentation/Documentation';

const GraphiqlPage = () => {
  const { isSignIn, setIsSignIn } = useAuth();
  useEffect(() => {
    if (isSignIn) {
      toast.success('You succsessfuly sign in!');
      setIsSignIn(false);
    }
  }, [isSignIn, setIsSignIn]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.playground}>
          <Documentation />
          <Editor />
          <Viewer />
        </div>
      </div>
      <ToastContainer className={'toast'} />
    </>
  );
};

export default GraphiqlPage;
