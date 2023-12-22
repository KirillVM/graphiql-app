import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { editorTheme } from '../../../constants/editorThemes';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setEditorValue } from '../../../store/editorSlice/editorSlice';
import { editorValueSelector } from '../../../store/editorSlice/editorSliceSelectors';
import styles from './Editor.module.scss';

const Editor = () => {
  const value = useAppSelector(editorValueSelector);
  const dispatch = useAppDispatch();

  const handleChange = React.useCallback(
    (val: string) => {
      dispatch(setEditorValue(val));
    },
    [dispatch]
  );

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
        <button className={styles.request_btn}></button>
      </div>
    </div>
  );
};
export default Editor;
