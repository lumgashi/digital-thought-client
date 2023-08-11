import * as yup from 'yup';

export type NewsletterSignupForm = {
  email: string;
  privacy_policy: boolean;
};

export const newsletterSignupSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('This is not a valid email')
      .required('This entry is required')
      .max(255, 'You can enter up to 255 characters only'),
    privacy_policy: yup.boolean().oneOf([true], 'You must accept privacy policy'),
  });
