import EducationalProgram from '@src/components/EducationalProgram/EducationalProgram';
import AboutProject from '@src/components/AboutProject/AboutProject';
import styles from './Welcome.module.scss';
import DeveloperCard from '@src/components/DeveloperCard/DeveloperCard';
import { DEVELOPERS } from '@src/constants/developers';

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome Page</h1>
      <EducationalProgram />
      <AboutProject />
      <div className={styles.team}>
        <h3>Our team</h3>
        <div className={styles.developers}>
          {DEVELOPERS.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
