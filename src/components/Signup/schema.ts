import * as yup from 'yup';

export type SignupFields = {
  email: string;
  password: string;
  terms_accepted: boolean;
};

export const schema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('This email is invalid')
      .required('This entry is required')
      .max(255, 'Maximum characters allowed is 255'),
    password: yup
      .string()
      .required('This entry is required')
      .min(8, 'Minimum characters allowed is 8')
      .max(180, 'Maximum characters allowed is 180'),
    terms_accepted: yup.boolean().oneOf([true], 'You must accept terms and conditions'),
  });
