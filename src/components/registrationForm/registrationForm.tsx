import classes from './registrationForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from './registrationForm.interfaces';
import registrationFormSchema from './registrationForm.schema';
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
    <>
      <div className={clsx(classes.wrapper)}>
        <h1>Registration</h1>
        <form
          className={clsx(classes.form)}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          {/* <label htmlFor="fname" className={clsx(classes.form__row)}>
          Name
          <input
            {...register('fname', {
              required: true,
            })}
            id="fname"
            className="form__fname"
            placeholder="Ivan"
          ></input>
          {fname ? <p>{fname.message}</p> : <p> </p>}
        </label> */}
          <label htmlFor="email" className={clsx(classes.form__row)}>
            Email
            <input
              {...register('email', {
                required: true,
              })}
              id="email"
              className={clsx(classes.form__input)}
              placeholder="email@gmail.com"
            ></input>
            {email ? <p>{email.message}</p> : <p> </p>}
          </label>
          <label htmlFor="password" className={clsx(classes.form__row)}>
            Password
            <input
              {...register('password', {
                required: true,
              })}
              id="password"
              className={clsx(classes.form__input)}
              placeholder="Password"
            ></input>
            {password ? <p>{password.message}</p> : <p> </p>}
          </label>
          <label htmlFor="confirm-password" className={clsx(classes.form__row)}>
            Confirm password
            <input
              {...register('confirmPassword', {
                required: true,
              })}
              id="confirm-password"
              className={clsx(classes.form__input)}
              placeholder="Confirm password"
            ></input>
            {confirmPassword ? <p>{confirmPassword.message}</p> : <p> </p>}
          </label>
          <button
            className={clsx(classes.button_submit)}
            disabled={Object.keys(errors).length > 0}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
