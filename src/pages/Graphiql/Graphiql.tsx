import Editor from './Editor/Editor';
import Viewer from './Viewer/Viewer';
import styles from './Graphiql.module.scss';
import { useAuth } from '@src/hooks/useAuth';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalization } from '@src/hooks/useLocalization';

const GraphiqlPage = () => {
  const { isSignIn, setIsSignIn } = useAuth();
  const { localizationData } = useLocalization();
  const { toastMessages } = localizationData;
  useEffect(() => {
    if (isSignIn) {
      toast.success(toastMessages.successSignIn);
      setIsSignIn(false);
    }
  }, [isSignIn, setIsSignIn]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.playground}>
          <Editor />
          <Viewer />
        </div>
      </div>
      <ToastContainer className={'toast'} />
    </>
  );
};

export default GraphiqlPage;
