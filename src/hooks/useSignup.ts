import * as React from 'react';

import Api from '@/lib/api';
import { useNotification } from '@/providers/NotificationProvider';
import { SignupFields } from '@/components/Signup/schema';
import { useAuth } from '@/providers/AuthProvider';

export default function useSignup() {
  const { mutateUser } = useAuth();
  const { openSnackbar } = useNotification();
  const [isLoading, setIsLoading] = React.useState(false);

  const register = async (data: SignupFields) => {
    setIsLoading(true);
    try {
      const user = await Api.post('register', { ...data });
      mutateUser(user);

      openSnackbar('You have successfully registered');
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  return {
    register,
    isLoading,
  };
}
