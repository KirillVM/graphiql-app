import classes from './RegistrationForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from './RegistrationForm.interfaces';
import registrationFormSchema from './RegistrationForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
// import { useNavigate } from 'react-router-dom';

const RegistrationForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'onChange',
  });
  const { email, password, confirmPassword } = errors;
  // dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // dispatch(setFromData(data))
    // navigate(to: '/main');
  };
  return (
    <form
      className={clsx(classes.form)}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      {/* <div className={clsx(classes.img)}></div> */}
      <label htmlFor="email" className={clsx(classes.form__row)}>
        <p className={clsx(classes['form__row-name'])}>Email</p>
        <input
          {...register('email', {
            required: true,
          })}
          id="email"
          className={clsx(classes.form__input)}
        ></input>
        {email ? (
          <p className={clsx(classes.error)}>{email.message}</p>
        ) : (
          <p className={clsx(classes.error)}> </p>
        )}
      </label>
      <label htmlFor="password" className={clsx(classes.form__row)}>
        <p className={clsx(classes['form__row-name'])}>Password</p>
        <input
          {...register('password', {
            required: true,
          })}
          id="password"
          className={clsx(classes.form__input)}
        ></input>
        {password ? (
          <p className={clsx(classes.error)}>{password.message}</p>
        ) : (
          <p className={clsx(classes.error)}> </p>
        )}
      </label>
      <label htmlFor="confirm-password" className={clsx(classes.form__row)}>
        <p className={clsx(classes['form__row-name'])}>Confirm password</p>
        <input
          {...register('confirmPassword', {
            required: true,
          })}
          id="confirm-password"
          className={clsx(classes.form__input)}
        ></input>
        {confirmPassword ? (
          <p className={clsx(classes.error)}>{confirmPassword.message}</p>
        ) : (
          <p className={clsx(classes.error)}> </p>
        )}
      </label>
      <button
        className={clsx(classes.button_submit)}
        disabled={Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
