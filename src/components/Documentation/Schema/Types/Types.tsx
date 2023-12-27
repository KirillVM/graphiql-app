import { FieldType } from '../Schema.interface';
import { TypesProps } from './Types.interface';
import styles from './Types.module.scss';

const Types = ({ types, setActiveType }: TypesProps) => {
  return (
    <ul className={styles['types-list']}>
      {types.map((type: FieldType) => (
        <li key={type.name} id={type.name}>
          <a onClick={() => setActiveType(type.name)}>{type.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Types;
