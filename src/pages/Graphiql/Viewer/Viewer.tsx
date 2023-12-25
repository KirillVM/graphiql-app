import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { viewerTheme } from '../../../utils/themes/viewerTheme';
import { useAppSelector } from '../../../store/hooks';
import {
  loadingStatusSelector,
  responseDataSelector,
} from '../../../store/playgroundSlice/playgroundSelectors';
import Loader from '../../../components/Loader/Loader';
import styles from './Viewer.module.scss';
import { serializeToJSON } from '../../../utils/themes/helpers';

const Viewer = () => {
  const responseData = useAppSelector(responseDataSelector);
  const isDataLoading = useAppSelector(loadingStatusSelector);
  const value = responseData ? serializeToJSON(responseData) : '';

  if (isDataLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.editor_json}>
      <CodeMirror
        value={value}
        height="500px"
        theme={viewerTheme}
        editable={false}
        readOnly={true}
        extensions={[json()]}
        basicSetup={{ lineNumbers: false }}
      />
    </div>
  );
};
export default Viewer;
