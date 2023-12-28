import { FieldType } from '../Schema.interface';
import Arg from './Arg/Arg';
import { FieldProps } from './Field.interface';
import styles from './Field.module.scss';

const getTypeName = (
  type: FieldType,
  setActiveType: (type: string) => void,
  lastSymbols: string = ''
): JSX.Element => {
  if (type.kind === 'LIST') {
    return (
      <>
        <a onClick={() => setActiveType(type.ofType?.name as string)}>
          {<span className={styles.additional}>[</span>}
          {`${type.ofType?.name}`}
          {<span className={styles.additional}>]{lastSymbols}</span>}
        </a>
      </>
    );
  } else if (type.kind === 'SCALAR') {
    return <a onClick={() => setActiveType(type.name)}>{`${type.name}`}</a>;
  } else if (type.kind === 'NON_NULL') {
    if (type.ofType?.kind === 'LIST') {
      return getTypeName(type.ofType, setActiveType, '!');
    } else {
      return (
        <>
          <a
            onClick={() => setActiveType(type.ofType?.name as string)}
          >{`${type.ofType?.name}`}</a>
          <span className={styles.additional}>!</span>
        </>
      );
    }
  } else {
    return <a onClick={() => setActiveType(type.name)}>{type.name}</a>;
  }
};

const Field = ({
  name,
  args,
  type,
  description,
  setActiveType,
}: FieldProps) => {
  const updArgs =
    args.length !== 0 ? (
      <ul className={styles.field}>
        (
        {args.map((arg, index) => (
          <Arg
            key={index}
            name={arg.name}
            type={arg.type}
            index={index}
            setActiveType={setActiveType}
          />
        ))}
        )
      </ul>
    ) : null;

  return (
    <li key={name} id={name}>
      <div>
        {name}
        {updArgs}:{getTypeName(type, setActiveType)}
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default Field;
