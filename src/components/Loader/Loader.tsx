import classes from './Loader.module.scss';
import clsx from 'clsx';

const Loader = (): JSX.Element => {
  return (
    <>
      <div className={clsx(classes.container)}>
        <p style={{ margin: 0 }}>Please wait.....</p>
        <div className={clsx(classes.animation)}></div>
      </div>
    </>
  );
};

export default Loader;
