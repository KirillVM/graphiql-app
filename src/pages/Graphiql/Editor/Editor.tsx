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
        <button className={styles.request_btn} onClick={handleRequest}></button>
      </div>
      <RequestToolbar />
    </div>
  );
};
export default Editor;
