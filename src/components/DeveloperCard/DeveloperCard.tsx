import { DeveloperCardProps } from './DeveloperCard.interface';
import styles from './DeveloperCard.module.scss';

const DeveloperCard = ({ developer }: DeveloperCardProps) => {
  return (
    <div
      className={styles.developer}
      id={styles[`${developer.name.split(' ').join('-').toLocaleLowerCase()}`]}
    >
      <div className={styles.photo}>
        <img src={developer.image} alt={developer.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h4>{developer.name}</h4>
          <div className={styles.roles}>
            {developer.roles.map((role: string) => (
              <span className={styles.role} key={`${developer.id}-${role}`}>
                {role}
              </span>
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.biography}>
          <h6>Biography:</h6>
          <p>{developer.biography}</p>
        </div>
        <div className={styles.contribution}>
          <h6>Contribution:</h6>
          <p>{developer.contribution}</p>
        </div>
        <div className={styles.github}>
          <h6>Github:</h6>
          <a
            target="_blank"
            href={`https://github.com/${developer.github}`}
            rel="noreferrer"
          >
            {developer.github}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
