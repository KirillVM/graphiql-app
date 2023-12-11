import clsx from 'clsx';
import { ButtonProps } from './Button.interface';
import styles from './Button.module.scss';

const Button = ({ children, type, disabled, onClick }: ButtonProps) => {
  const buttonClass = clsx(styles.button, {
    [styles.button_white]: type === 'white',
    [styles.button_black]: type === 'black',
  });

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
