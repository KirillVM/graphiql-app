import { InterfaceProps } from './Interface.interface';
import styles from './Interface.module.scss';

const Interface = ({ name, setActiveType }: InterfaceProps) => {
  return (
    <a className={styles.link} onClick={() => setActiveType(name)}>
      {name}
    </a>
  );
};

export default Interface;
