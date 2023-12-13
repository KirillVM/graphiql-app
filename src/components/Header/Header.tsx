import { useAuth } from '../../hooks/useAuth';
import SignOutBtn from './SignOutBtn/SignOutBtn';
import ButtonsLang from './ButtonsLang/ButtonsLang';
import AuthLinks from './AuthLinks/AuthLinks';
import PagesLink from './PagesLink/PagesLink';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';

const Header = () => {
  const { userToken } = useAuth();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={clsx({ [styles.header_scrolling]: scrolling })}>
      <div className={styles.container}>
        <ButtonsLang />
        {userToken && <PagesLink />}
        {!userToken ? <AuthLinks /> : <SignOutBtn />}
      </div>
    </header>
  );
};

export default Header;
