import './registrationForm.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from './registrationForm.interfaces';
import registrationFormSchema from './registrationForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
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
  const { fname, email, password, confirmPassword } = errors;
  // dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // dispatch(setFromData(data))
    // navigate(to: '/main');
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Registration</h1>
        <label htmlFor="fname" className="form__row">
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
        </label>
        <label htmlFor="email" className="form__row">
          Email
          <input
            {...register('email', {
              required: true,
            })}
            id="email"
            className="form__email"
            placeholder="email@gmail.com"
          ></input>
          {email ? <p>{email.message}</p> : <p> </p>}
        </label>
        <label htmlFor="password" className="form__row">
          Password
          <input
            {...register('password', {
              required: true,
            })}
            id="password"
            className="form__password"
            placeholder="Password"
          ></input>
          {password ? <p>{password.message}</p> : <p> </p>}
        </label>
        <label htmlFor="confirm-password" className="form__row">
          Confirm password
          <input
            {...register('confirmPassword', {
              required: true,
            })}
            id="confirm-password"
            className="form__confirmPassword"
            placeholder="Confirm password"
          ></input>
          {confirmPassword ? <p>{confirmPassword.message}</p> : <p> </p>}
        </label>
        <button
          className="form__button"
          disabled={Object.keys(errors).length > 0}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
