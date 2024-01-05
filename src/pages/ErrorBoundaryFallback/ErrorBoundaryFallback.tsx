import styles from './ErrorBoundaryFallback.module.scss';
import clsx from 'clsx';
import CustomButton from '@src/components/CustomButton/CustomButton';

const ErrorBoundaryFallback = (): JSX.Element => {
  const onClickHandler = () => {
    window.location.reload();
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.container)}>
        <h1>SOMETHING WENT WRONG</h1>
        <CustomButton type="white" size="large" onClick={onClickHandler}>
          Reload Page
        </CustomButton>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
