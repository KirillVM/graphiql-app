import { ArgProps } from './Arg.interface';

const Arg = ({ name, type, index, setActiveType }: ArgProps) => {
  return (
    <li key={index}>
      {name}:<a onClick={() => setActiveType(type.name)}>{type.name}</a>
    </li>
  );
};

export default Arg;
