import classes from './Header.module.scss';
import ROUTES from '@src/router/routes';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <div className={clsx(classes.header)}>
      <NavLink to={ROUTES.SIGNUP} className={classes.nav__link}>
        Sign up
      </NavLink>
    </div>
  );
};

export default Header;
