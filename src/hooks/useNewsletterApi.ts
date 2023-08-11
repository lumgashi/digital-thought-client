import * as React from 'react';

import Api from '@/lib/api';
import { NewsletterSignupForm } from '@/components/Home/schema';
import { useNotification } from '@/providers/NotificationProvider';

export default function useNewsletterApi() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { openSnackbar } = useNotification();

  const signupNewsletter = async (body: NewsletterSignupForm) => {
    setIsLoading(true);

    const { email } = body;

    try {
      await Api.post('newsletter/signup', { email });
      openSnackbar('You have subscribed to our newsletters successfully.');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
  };

  return {
    signupNewsletter,
    isLoading,
  };
}
