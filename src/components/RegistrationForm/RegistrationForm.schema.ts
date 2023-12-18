import { object, ref, string } from 'yup';
import { VALIDATION_RULES_REG_EXP } from './validationRules';

const requeredMessage = 'Field is requered';

const registrationFormSchema = object().shape({
  email: string().required(requeredMessage).email('Incorrect email'),
  password: string()
    .required(requeredMessage)
    .matches(
      VALIDATION_RULES_REG_EXP.oneLowercaseChar,
      'Should contain at least one lowercase character'
    )
    .matches(
      VALIDATION_RULES_REG_EXP.oneUppercaseChar,
      'Should contain at least one uppercase character'
    )
    .matches(
      VALIDATION_RULES_REG_EXP.oneNumber,
      'Should contain at least one number'
    )
    .matches(
      VALIDATION_RULES_REG_EXP.oneSpecialChar,
      'Should contain at least one special character'
    )
    .min(8, 'Yuor password too short'),
  confirmPassword: string()
    .required(requeredMessage)
    .oneOf([ref('password')], `You password don't match`),
});

export default registrationFormSchema;
