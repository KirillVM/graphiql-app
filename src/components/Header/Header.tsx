import styles from './Header.module.scss';
import { useAuth } from '../../hooks/useAuth';
import SignOutBtn from './SignOutBtn/SignOutBtn';
import ButtonsLang from './ButtonsLang/ButtonLang';
import AuthLinks from './AuthLinks/AuthLinks';

const Header = () => {
  const { userToken } = useAuth();

  return (
    <header>
      <div className={styles.container}>
        <ButtonsLang />
        {!userToken ? <AuthLinks /> : <SignOutBtn />}
      </div>
    </header>
  );
};

export default Header;
