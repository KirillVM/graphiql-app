import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { viewerTheme } from '../../../utils/themes/viewerTheme';
import { useAppSelector } from '../../../store/hooks';
import { responseDataSelector } from '../../../store/playgroundSlice/playgroundSelectors';
import styles from './Viewer.module.scss';

const Viewer = () => {
  const responseData = useAppSelector(responseDataSelector);
  const value = responseData ? JSON.stringify(responseData, null, 2) : '';

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
