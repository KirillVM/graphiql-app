import Editor from './Editor/Editor';
import Viewer from './Viewer/Viewer';
import styles from './Graphiql.module.scss';

const GraphiqlPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.playground}>
        <Editor />
        <Viewer />
      </div>
    </div>
  );
};

export default GraphiqlPage;
