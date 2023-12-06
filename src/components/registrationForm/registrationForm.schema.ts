import { object, ref, string } from 'yup';

const requeredMessage = 'Field is requered';

const registrationFormSchema = object().shape({
  fname: string()
    .required(requeredMessage)
    .matches(/^[A-Z]/, 'First latter should be capital')
    .matches(/\D+$/, `Name shouldn't contain numbers`),
  email: string().required(requeredMessage).email('Incorrect email'),
  password: string()
    .required(requeredMessage)
    .matches(/^(?=.*[a-z])/, 'Should contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Should contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Should contain at least one number')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'Should contain at least one special character'
    ),
  confirmPassword: string()
    .required(requeredMessage)
    .oneOf([ref('password')], `You password don't match`)
    .min(8, 'Yuor password too short'),
});

export default registrationFormSchema;
