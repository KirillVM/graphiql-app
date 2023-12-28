import { EnumProps } from './Enum.interface';

const Enum = ({ enumValue }: EnumProps) => {
  return <li>{enumValue.name}</li>;
};

export default Enum;
