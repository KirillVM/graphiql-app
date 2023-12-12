import styles from './Header.module.scss';
import ROUTES from '../../router/routes';
import AuthLink from './AuthLink/AuthLink';
import { useAuth } from '../../hooks/useAuth';
import SignOutBtn from './SignOutBtn/SignOutBtn';
import ButtonsLang from './ButtonsLang/ButtonLang';

const Header = () => {
  const { userToken } = useAuth();

  const btnAuthContent = !userToken ? (
    <>
      <AuthLink to={ROUTES.SIGNIN} type="white">
        Sign In
      </AuthLink>
      <AuthLink to={ROUTES.SIGNUP} type="black">
        Sign Up
      </AuthLink>
    </>
  ) : (
    <SignOutBtn />
  );

  return (
    <header>
      <div className={styles.container}>
        <ButtonsLang />
        <div className={styles.btns_auth}>{btnAuthContent}</div>
      </div>
    </header>
  );
};

export default Header;
