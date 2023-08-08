import * as React from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';

import parseValidationErrors from '@/lib/parseValidationErrors';
import { useNotification } from '@/providers/NotificationProvider';

export default function useFormErrors<TFieldValues extends FieldValues>(
  setError: UseFormSetError<TFieldValues>
) {
  const { openSnackbar } = useNotification();

  const handleErrors = React.useCallback(
    (error: any, data: TFieldValues) => {
      const backendErrors = parseValidationErrors(error?.data?.errors);
      if (backendErrors) {
        const unattachedErrors: string[] = [];
        Object.keys(backendErrors).forEach((key: any) => {
          if (key in data) {
            setError(key as any, {
              type: 'manual',
              message: backendErrors[key][0] as any,
            });
          } else if (key.includes('.')) {
            const arrayKey = key.split('.');
            if (arrayKey[0] in data) {
              setError(key as any, {
                type: 'manual',
                message: backendErrors[key][0] as any,
              });
            }
          } else {
            unattachedErrors.push(backendErrors[key][0] as any);
          }
        });
        if (unattachedErrors.length > 0) {
          openSnackbar(unattachedErrors[0], 'error');
        }
      } else if (error.status === 404) {
        openSnackbar('Not found', 'error');
      } else if (error?.status && error?.message) {
        openSnackbar(error.message, 'error');
      } else {
        openSnackbar('Something went wrong', 'error');
      }
    },
    [openSnackbar, setError]
  );

  return {
    handleErrors,
  };
}
