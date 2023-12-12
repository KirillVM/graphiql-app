import classes from './RegistrationForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from './RegistrationForm.interfaces';
import registrationFormSchema from './RegistrationForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import checkSVG from '@assets/icons/check.svg';
import eyeSVG from '@assets/icons/eye.svg';
import eyeHideSVG from '@assets/icons/eye-hide.svg';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const RegistrationForm = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
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
        <div className={clsx(classes['name-container'])}>
          <p
            className={clsx(classes['form__row-name'], {
              [classes.red]: email,
              [classes.green]: !email,
            })}
          >
            Email{' '}
          </p>
          {!email && (
            <img
              className={clsx(classes['check-image'])}
              src={checkSVG}
              alt=""
            />
          )}
        </div>
        <input
          {...register('email', {
            required: true,
          })}
          type="email"
          id="email"
          className={clsx(classes.form__input, { [classes.border_red]: email })}
        ></input>
        {email ? (
          <p className={clsx(classes.error)}>{email.message}</p>
        ) : (
          <p className={clsx(classes.error)}> </p>
        )}
      </label>
      <label htmlFor="password" className={clsx(classes.form__row)}>
        <div className={clsx(classes['name-container'])}>
          <p
            className={clsx(classes['form__row-name'], {
              [classes.red]: password,
              [classes.green]: !password,
            })}
          >
            Password
          </p>
          {!password && (
            <img
              className={clsx(classes['check-image'])}
              src={checkSVG}
              alt=""
            />
          )}
        </div>
        <input
          {...register('password', {
            required: true,
          })}
          type={showPassword ? 'text' : 'password'}
          id="password"
          className={clsx(classes.form__input, {
            [classes.border_red]: password,
          })}
        ></input>
        <div className={clsx(classes['eye-container'])}>
          {showPassword ? (
            <img
              className={clsx(classes['eye-image'])}
              src={eyeSVG}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(false);
              }}
            />
          ) : (
            <img
              className={clsx(classes['eye-image'])}
              src={eyeHideSVG}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(true);
              }}
            />
          )}
        </div>
        {password ? (
          <p className={clsx(classes.error)}>{password.message}</p>
        ) : (
          <p className={clsx(classes.error)}> </p>
        )}
      </label>
      <label htmlFor="confirm-password" className={clsx(classes.form__row)}>
        <div className={clsx(classes['name-container'])}>
          <p
            className={clsx(classes['form__row-name'], {
              [classes.red]: confirmPassword,
              [classes.green]: !confirmPassword,
            })}
          >
            Confirm password
          </p>
          {!confirmPassword && (
            <img
              className={clsx(classes['check-image'])}
              src={checkSVG}
              alt=""
            />
          )}
        </div>
        <input
          {...register('confirmPassword', {
            required: true,
          })}
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirm-password"
          className={clsx(classes.form__input, {
            [classes.border_red]: confirmPassword,
          })}
        ></input>
        <div className={clsx(classes['eye-container'])}>
          {showConfirmPassword ? (
            <img
              className={clsx(classes['eye-image'])}
              src={eyeSVG}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                setShowConfirmPassword(false);
              }}
            />
          ) : (
            <img
              className={clsx(classes['eye-image'])}
              src={eyeHideSVG}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                setShowConfirmPassword(true);
              }}
            />
          )}
        </div>
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
