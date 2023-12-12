import { NavLink } from 'react-router-dom';
import { AuthLinkProps } from './AuthLink.interface';
import CustomButton from '../../CustomButton/CustomButton';
import styles from './AuthLink.module.scss';

const AuthLink = ({ children, to, type }: AuthLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      <CustomButton type={type} size="medium">
        {children}
      </CustomButton>
    </NavLink>
  );
};

export default AuthLink;
