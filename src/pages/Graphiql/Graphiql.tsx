import Editor from './Editor/Editor';
import Viewer from './Viewer/Viewer';
import styles from './Graphiql.module.scss';
import { useAuth } from '@src/hooks/useAuth';
import { Suspense, lazy, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import docs from '@assets/icons/docs.svg';
import Loader from '@src/components/Loader/Loader';
import { RootState } from '@src/store/store';
import { useSelector } from 'react-redux';

const LazyDocumentation = lazy(
  () => import('@src/components/Documentation/Documentation')
);

const GraphiqlPage = () => {
  const { isSignIn, setIsSignIn } = useAuth();
  const [showDocs, setShowDocs] = useState(false);

  const handleClick = () => {
    setShowDocs(!showDocs);
  };

  const graphiqlApiUrl = useSelector(
    (state: RootState) => state.playground.graphiqlApiUrl
  );

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
          <button className={styles['docs-button']} onClick={handleClick}>
            <img src={docs} alt="Docs" />
          </button>
          <Suspense
            fallback={
              <div className={styles['loader-container']}>
                <div className={styles.loader}>
                  <Loader />
                </div>
              </div>
            }
          >
            {showDocs && <LazyDocumentation url={graphiqlApiUrl} />}
          </Suspense>
          <Editor />
          <Viewer />
        </div>
      </div>
      <ToastContainer className={'toast'} />
    </>
  );
};

export default GraphiqlPage;
