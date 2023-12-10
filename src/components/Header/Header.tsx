import classes from './Header.module.scss';
import ROUTES from '@src/router/routes';
import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <NavLink to={ROUTES.SIGNUP} className={classes.nav__link}>
        Sign up
      </NavLink>
    </div>
  );
};

export default Header;
