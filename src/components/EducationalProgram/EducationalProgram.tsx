import rss_logo from '../../assets/icons/rss-logo.svg';
import sloth from '../../assets/images/sloth.png';
import styles from './EducationalProgram.module.scss';

const EducationalProgram = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>Our educational program</h3>
        <p>
          RS School is an educational program organized by The Rolling Scopes
          developer community since 2013. The core idea of RS School is that
          education should be accessible to everyone, regardless of age,
          professional status, or place of residence. In RS School, education is
          entirely free of charge. The main instructors and trainers are
          experienced front-end and JavaScript developers from various parts of
          the world and different companies. They are ready to share their
          knowledge and expertise, helping students explore the world of web
          development.
        </p>
        <p>
          The principle of RS School is «Openness and Passing Knowledge
          Forward». All educational materials and the program&apos;s platform
          are publicly available on GitHub and YouTube. What&apos;s particularly
          important is RS School students who have received free education are
          invited to return in the future as mentors to pass on their knowledge
          to the next generation of students.
        </p>
        <p>
          RS School offers a variety of courses, including JavaScript, front-end
          development, as well as React courses. These courses are available
          online, making learning highly flexible and convenient for all who are
          interested. Join RS School and dive into the world of web development,
          where education is a powerful tool for self-improvement and a
          successful career.
        </p>
        <div className={styles['rss-logo']}>
          <a target="_blank" href="https://rs.school/react/" rel="noreferrer">
            {' '}
            <img src={rss_logo} alt="Rolling Scopes School logo" />
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <img src={sloth} alt="Sloth" />
      </div>
    </div>
  );
};

export default EducationalProgram;
