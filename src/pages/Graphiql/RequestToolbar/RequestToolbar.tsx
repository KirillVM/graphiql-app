import { useState } from 'react';
import clsx from 'clsx';
import { RequestToolbarProps, sectionType } from './RequestToolbar.interface';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  headersSelector,
  variablesSelector,
} from '../../../store/playgroundSlice/playgroundSelectors';
import {
  setHeaders,
  setVariables,
} from '../../../store/playgroundSlice/playgroundSlice';
import styles from './RequestToolbar.module.scss';
import ToolbarEditor from '../Editor/ToolbarEditor/ToolbarEditor';
import { useLocalization } from '@src/hooks/useLocalization';

const RequestToolbar = ({
  isToolbarOpen,
  onOpenToolbar,
}: RequestToolbarProps) => {
  const [activeSection, setActiveSection] = useState<sectionType>('variables');
  const headers = useAppSelector(headersSelector);
  const variables = useAppSelector(variablesSelector);
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    onOpenToolbar(!isToolbarOpen);
  };
  const handleSectionToogle = (title: sectionType) => {
    onOpenToolbar(true);
    setActiveSection(title);
  };
  const handleVariablesChange = (value: string) => {
    dispatch(setVariables(value));
  };
  const handleHeadersChange = (value: string) => {
    dispatch(setHeaders(value));
  };

  const { localizationData } = useLocalization();
  const { requestToolbar } = localizationData;

  const titles = requestToolbar.sections.map((title) => (
    <div
      className={clsx(styles.title, {
        [styles.active]: title === activeSection && isToolbarOpen,
      })}
      key={title}
      onClick={() => handleSectionToogle(title)}
    >
      {title}
    </div>
  ));

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar_inner}>
        <div className={styles.titles}>{...titles}</div>
        <div
          className={clsx(styles.toggle_btn, {
            [styles.open]: isToolbarOpen,
          })}
          onClick={handleOpen}
        ></div>
      </div>
      <div
        className={clsx(styles.editors, {
          [styles.open]: isToolbarOpen,
        })}
      >
        {activeSection === 'variables' ? (
          <ToolbarEditor value={variables} onChange={handleVariablesChange} />
        ) : (
          <ToolbarEditor value={headers} onChange={handleHeadersChange} />
        )}
      </div>
    </div>
  );
};

export default RequestToolbar;
