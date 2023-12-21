import classes from './RegistrationForm.module.scss';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { RegistrationFormData } from './RegistrationForm.interfaces';
import registrationFormSchema from './RegistrationForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import FormInput from '@components/FormInput/FormInput';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@src/services/firebaseApi/firebaseApi';

const FIELDS_COUNT = 3;

const RegistrationForm = (): JSX.Element => {
  const methods = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: { dirtyFields, errors },
  } = methods;

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmitHandler: SubmitHandler<RegistrationFormData> = (data) => {
    createUserWithEmailAndPassword(data.email, data.password).then(() => {});
  };

  const isDirtyFields = Object.values(dirtyFields).length < FIELDS_COUNT;
  const isError = Object.keys(errors).length > 0;

  return (
    <>
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
      <ToastContainer />
    </>
  );
};

export default RegistrationForm;
