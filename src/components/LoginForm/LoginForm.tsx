import classes from './LoginForm.module.scss';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormData } from './LoginForm.interfaces';
import loginFormSchema from './LoginForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import FormInput from '@components/FormInput/FormInput';
import { signInUser } from '@src/services/firebaseApi/firebaseApi';
// import { useNavigate } from 'react-router-dom';

const FIELDS_COUNT = 2;

const LoginForm = (): JSX.Element => {
  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: { dirtyFields, errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<LoginFormData> = (data) => {
    signInUser(data.email, data.password);
  };

  const isDirtyFields = Object.values(dirtyFields).length < FIELDS_COUNT;
  const isError = Object.keys(errors).length > 0;

  return (
    <form
      className={clsx(classes.form)}
      onSubmit={handleSubmit(onSubmitHandler)}
      autoComplete="off"
    >
      <input type="password" style={{ display: 'none' }}></input>
      <FormProvider {...methods}>
        <FormInput type="email" errorName="email" label="Email" />
        <FormInput type="password" errorName="password" label="Password" />
      </FormProvider>
      <button
        className={clsx(classes.button_submit)}
        disabled={isDirtyFields || isError}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;