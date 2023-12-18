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
  console.log(
    Object.values(dirtyFields).reduce((acc, item, array) => {
      console.log(acc, item, array);
      return item ? (acc += 1) : (acc = acc);
    }, 0),
    Object.values(dirtyFields).length
  );
  return (
    <form
      className={clsx(classes.form)}
      onSubmit={handleSubmit(onSubmitHandler)}
      autoComplete="off"
    >
      <input type="password" style={{ display: 'none' }}></input>
      <FormProvider {...methods}>
        <FormInput type="email" errorName="email" lable="Email" />
        <FormInput type="password" errorName="password" lable="Password" />
        <FormInput
          type="password"
          errorName="confirmPassword"
          lable="Confirm password"
        />
      </FormProvider>
      <button
        className={clsx(classes.button_submit)}
        disabled={
          Object.values(dirtyFields).length < FIELDS_COUNT ||
          Object.keys(errors).length > 0
        }
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
