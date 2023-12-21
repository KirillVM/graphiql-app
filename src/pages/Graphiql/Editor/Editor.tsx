import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { editorTheme } from '../../../constants/editorThemes';
import styles from './Editor.module.scss';

const Editor = () => {
  const [value, setValue] = React.useState('');
  const onChange = React.useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <div className={styles.editor_gql}>
      <div className={styles.codemirror_editor}>
        <CodeMirror
          value={value}
          placeholder={'# Welcome to GraphiQL'}
          height="500px"
          theme={editorTheme}
          extensions={[graphql()]}
          onChange={onChange}
        />
      </div>
      <div className={styles.tooll_bar}>
        <button className={styles.request_btn}></button>
      </div>
    </div>
  );
};
export default Editor;
