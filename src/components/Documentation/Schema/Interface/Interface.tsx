import { InterfaceProps } from './Interface.interface';

const Interface = ({ name, setActiveType }: InterfaceProps) => {
  return <a onClick={() => setActiveType(name)}>{name}</a>;
};

export default Interface;
