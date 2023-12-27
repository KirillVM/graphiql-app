import Arg from './Arg/Arg';
import { FieldProps } from './Field.interface';
import styles from './Field.module.scss';

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

  let typeName;

  if (type.kind === 'LIST') {
    typeName = (
      <a
        onClick={() => setActiveType(type.ofType?.name as string)}
      >{`[${type.ofType?.name}]`}</a>
    );
  } else if (type.kind === 'SCALAR') {
    typeName = <a onClick={() => setActiveType(type.name)}>{`${type.name}`}</a>;
  } else if (type.kind === 'NON_NULL') {
    typeName = (
      <a
        onClick={() => setActiveType(type.ofType?.name as string)}
      >{`${type.ofType?.name}!`}</a>
    );
  } else {
    typeName = <a onClick={() => setActiveType(type.name)}>{type.name}</a>;
  }

  return (
    <li key={name} id={name}>
      <div>
        {name}
        {updArgs}:{typeName}
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default Field;
