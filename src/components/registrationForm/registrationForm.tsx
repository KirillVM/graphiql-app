import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from './registrationForm.interfaces';
import './registrationForm.scss';

const RegistrationForm = (): JSX.Element => {
  const methods = useForm<FormData>();
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form className="form" onSubmit={methods.handleSubmit(handleSubmit)}>
        <label htmlFor="fname" className="form__row">
          Name
          <input
            {...methods.register('fname', {
              required: true,
            })}
            id="fname"
            className="form__fname"
            placeholder="Name"
          ></input>
        </label>
        <label htmlFor="email" className="form__row">
          Email
          <input
            {...methods.register('email', {
              required: true,
            })}
            id="email"
            className="form__email"
            placeholder="Email"
          ></input>
        </label>
        <label htmlFor="password" className="form__row">
          Password
          <input
            {...methods.register('password', {
              required: true,
            })}
            id="password"
            className="form__password"
            placeholder="Password"
          ></input>
        </label>
        <label htmlFor="confirm-password" className="form__row">
          Confirm password
          <input
            {...methods.register('confirmPassword', {
              required: true,
            })}
            id="confirm-password"
            className="form__confirmPassword"
            placeholder="Confirm password"
          ></input>
        </label>
        <button className="form__button">Submit</button>
      </form>
    </>
  );
};

export default RegistrationForm;
