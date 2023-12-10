import rss_logo from '../../assets/icons/rss-logo.svg';
import github_logo from '../../assets/icons/github.svg';
import styles from './footer.module.scss';
import { GITHUB_USERS } from '@src/constants/constants';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <a target="_blank" href="https://rs.school/react/" rel="noreferrer">
          <img src={rss_logo} alt="Rolling Scopes School logo" />
        </a>
        <p className={styles.year}>2023</p>
        <div className={styles.githubs}>
          {GITHUB_USERS.map((developer) => (
            <a
              key={developer}
              target="_blank"
              href={`https://github.com/${developer}`}
              rel="noreferrer"
            >
              <img src={github_logo} alt="Github icon" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
