import { SyntheticEvent } from 'react';

export interface RegistrationFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormProps {
  handleSubmit: (e: SyntheticEvent<SubmitEvent>) => void;
}
