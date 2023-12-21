import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { viewerTheme } from '../../../constants/editorThemes';
import styles from './Viewer.module.scss';

const value = `{
  data: {
    todos: {
      data: [
        {
          id: '1',
          title: 'delectus aut autem',
          completed: false,
          user: {
            name: 'Leanne Graham',
          },
        },
      ],
    },
  },
}`;

const Viewer = () => {
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
