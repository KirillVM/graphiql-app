import { useState } from 'react';
import clsx from 'clsx';
import { sections } from '../../../constants/playground';
import { sectionType } from './RequestToolbar.interface';
import ReactCodeMirror from '@uiw/react-codemirror';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  headersSelector,
  variablesSelector,
} from '../../../store/playgroundSlice/playgroundSelectors';
import {
  setHeaders,
  setVariables,
} from '../../../store/playgroundSlice/playgroundSlice';
import { json } from '@codemirror/lang-json';
import { editorToolbarTheme } from '../../../utils/themes/editorToolbarTheme';
import styles from './RequestToolbar.module.scss';

const RequestToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<sectionType>('variables');
  const headers = useAppSelector(headersSelector);
  const variables = useAppSelector(variablesSelector);
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSectionToogle = (title: sectionType) => {
    setIsOpen(true);
    setActiveSection(title);
  };
  const handleVariablesChange = (value: string) => {
    dispatch(setVariables(value));
  };
  const handleHeadersChange = (value: string) => {
    dispatch(setHeaders(value));
  };

  const titles = sections.map((title) => (
    <div
      className={clsx(styles.title, {
        [styles.active]: title === activeSection && isOpen,
      })}
      key={title}
      onClick={() => handleSectionToogle(title)}
    >
      {title}
    </div>
  ));

  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.titles}>{...titles}</div>
        <div
          className={clsx(styles.toggle_btn, {
            [styles.open]: isOpen,
          })}
          onClick={handleOpen}
        ></div>
      </div>
      <div
        className={clsx(styles.editor, {
          [styles.open]: isOpen,
        })}
      >
        {activeSection === 'variables' ? (
          <ReactCodeMirror
            height="150px"
            value={variables}
            extensions={[json()]}
            onChange={handleVariablesChange}
            theme={editorToolbarTheme}
          />
        ) : (
          <ReactCodeMirror
            height="150px"
            value={headers}
            extensions={[json()]}
            onChange={handleHeadersChange}
            theme={editorToolbarTheme}
          />
        )}
      </div>
    </>
  );
};

export default RequestToolbar;
