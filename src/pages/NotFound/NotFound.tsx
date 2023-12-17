import styles from './NotFound.module.scss';
import ooops_tape from '../../assets/images/tape-ooops.svg';
import image from '../../assets/images/img-404.svg';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={ooops_tape} alt="Ooops!" />
      <p>There are no playground for graphQL requests here</p>
      <div className={styles.image}>
        <img src={image} alt="404" />
      </div>
      <CustomButton type="white" size="large" onClick={() => navigate('/')}>
        Go to welcome page
      </CustomButton>
    </div>
  );
};

export default NotFoundPage;
