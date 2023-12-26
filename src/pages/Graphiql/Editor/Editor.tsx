import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { editorTheme } from '../../../utils/themes/editorTheme';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setEditorValue } from '../../../store/playgroundSlice/playgroundSlice';
import { editorValueSelector } from '../../../store/playgroundSlice/playgroundSelectors';
import { getGraphiqlData } from '../../../store/playgroundSlice/playgroundThunks';
import styles from './Editor.module.scss';

const Editor = () => {
  const value = useAppSelector(editorValueSelector);
  const dispatch = useAppDispatch();

  const handleChange = (val: string) => {
    dispatch(setEditorValue(val));
  };

  const handleRequest = () => {
    dispatch(getGraphiqlData(null));
  };

  return (
    <div className={styles.editor_gql}>
      <div className={styles.codemirror_editor}>
        <CodeMirror
          value={value}
          placeholder={'# Welcome to GraphiQL'}
          height="500px"
          theme={editorTheme}
          extensions={[graphql()]}
          onChange={handleChange}
        />
      </div>
      <div className={styles.tooll_bar}>
        <button className={styles.request_btn} onClick={handleRequest}></button>
      </div>
    </div>
  );
};
export default Editor;
