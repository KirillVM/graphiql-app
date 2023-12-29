import { QueryTypeProps } from './QueryType.interface';
import styles from './QueryType.module.scss';

const QueryType = ({ name, setActiveType }: QueryTypeProps) => {
  return (
    <p className={styles.query}>
      query: <a onClick={() => setActiveType(name)}>{name}</a>
    </p>
  );
};

export default QueryType;
