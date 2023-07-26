import * as yup from 'yup';

export type LoginFields = {
  email: string;
  password: string;
};

export const loginSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('This email is invalid')
      .required('This entry is required')
      .max(255, 'Maximum characters allowed is 255'),
    password: yup
      .string()
      .required('This entry is required')
      .max(180, 'Maximum characters allowed is 180'),
  });

export const resetSchema = () =>
  yup.object().shape({
    password: yup
      .string()
      .required('This entry is required')
      .min(8, 'Minimum characters allowed is 8')
      .max(180, 'Maximum characters allowed is 180'),
    passwordRepeat: yup
      .string()
      //   .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('This entry is required'),
  });

export const forgotSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('This email is invalid')
      .required('This entry is required')
      .max(255, 'Maximum characters allowed is 255'),
  });
