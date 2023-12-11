import { NavLink } from 'react-router-dom';
import Button from '../../Button/Button';
import styles from './AuthLink.module.scss';
import { AuthLinkProps } from './AuthLink.interface';

const AuthLink = ({ children, to, type }: AuthLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      <Button type={type}>{children}</Button>
    </NavLink>
  );
};

export default AuthLink;
