import classes from './RegistrationForm.module.scss';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from './RegistrationForm.interfaces';
import registrationFormSchema from './RegistrationForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import FormInput from './FormInput/FormInput';
// import { useNavigate } from 'react-router-dom';

const FIELDS_COUNT = 3;

const RegistrationForm = (): JSX.Element => {
  const methods = useForm<FormData>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: { dirtyFields, errors },
  } = methods;
  // dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // dispatch(setFromData(data))
    // navigate(to: '/main');
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
        <FormInput
          type="password"
          errorName="confirmPassword"
          label="Confirm password"
        />
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

export default RegistrationForm;
