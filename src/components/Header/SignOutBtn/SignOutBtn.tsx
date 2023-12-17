import Button from '../../CustomButton/CustomButton';
import log_out from '../../../assets/icons/log-out.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import ROUTES from '../../../router/routes';
import styles from './SignOutBtn.module.scss';

const SignOutBtn = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleClick = () => {
    signOut(() => navigate(ROUTES.ROOT));
  };

  return (
    <Button type="white" onClick={handleClick} size="medium">
      Sign Out <img className={styles.img} src={log_out} alt="log out" />
    </Button>
  );
};

export default SignOutBtn;
