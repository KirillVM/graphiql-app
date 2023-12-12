import { useState } from 'react';
import { DeveloperCardProps } from './DeveloperCard.interface';
import styles from './DeveloperCard.module.scss';
import clsx from 'clsx';

const DeveloperCard = ({ developer }: DeveloperCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

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
        <button className={styles['details-button']} onClick={toggleDetails}>
          {showDetails ? 'Hide details' : 'Show details'}
        </button>
        <hr />
        <div
          className={clsx(styles.details, {
            [styles['details-visible']]: showDetails,
          })}
        >
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
    </div>
  );
};

export default DeveloperCard;
