import ReactCodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { editorTheme } from '../../../utils/themes/editorTheme';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setEditorValue } from '../../../store/playgroundSlice/playgroundSlice';
import {
  apiSchemaSelector,
  editorValueSelector,
} from '../../../store/playgroundSlice/playgroundSelectors';
import { getGraphiqlData } from '../../../store/playgroundSlice/playgroundThunks';
import { GraphQLSchema } from 'graphql';
import RequestToolbar from '../RequestToolbar/RequestToolbar';
import executeQueryIcon from '@assets/icons/execute-query.svg';
import prettifyIcon from '@assets/icons/prettify-query.svg';
import styles from './Editor.module.scss';

const Editor = () => {
  const value = useAppSelector(editorValueSelector);
  const graphqlShema = useAppSelector(apiSchemaSelector);
  const dispatch = useAppDispatch();

  const handleChange = (val: string) => {
    dispatch(setEditorValue(val));
  };

  const handleRequest = () => {
    dispatch(getGraphiqlData(null));
  };

  const handleRequestPrettify = () => {
    const formattedValue = value
      .replace(/}/g, '}\n')
      .replace(/{/g, '{\n')
      .replace(/}/g, '\n}');

    const lines = formattedValue.split('\n');
    let formattedQuery = '';
    let level = 0;

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      const decreaseLevel = trimmedLine.startsWith('}') ? -1 : 0;
      const increaseLevel = trimmedLine.endsWith('{') ? 1 : 0;

      if (trimmedLine !== '') {
        level += decreaseLevel;

        formattedQuery +=
          ' '.repeat(Math.max(0, level * 2)) + trimmedLine + '\n';

        level += increaseLevel;
      }
    });

    dispatch(setEditorValue(formattedQuery));
  };

  return (
    <div className={styles.editor_gql}>
      <div className={styles.codemirror_editor}>
        <ReactCodeMirror
          value={value}
          placeholder={'# Welcome to GraphiQL'}
          height="500px"
          theme={editorTheme}
          onChange={handleChange}
          extensions={[graphql(graphqlShema as GraphQLSchema)]}
        />
      </div>
      <div className={styles.tooll_bar}>
        <button onClick={handleRequest}>
          <img src={executeQueryIcon} alt="Execute Query icon" />
        </button>
        <button onClick={handleRequestPrettify}>
          <img src={prettifyIcon} alt="Prettyfy icon" />
        </button>
      </div>
      <RequestToolbar />
    </div>
  );
};
export default Editor;
