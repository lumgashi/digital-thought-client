import * as React from 'react';
import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type SnackbarNotificationProps = {
  id: string | undefined;
  open: boolean;
  duration?: number;
  message: string;
  type?: AlertColor;
  title?: string;
  onClose: () => void;
};

export default function SnackbarNotification({
  id,
  open = false,
  duration = 7000,
  message,
  type,
  title,
  onClose,
}: SnackbarNotificationProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={duration}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      key={id}
      open={open}
      onClose={onClose}
    >
      <Alert
        variant="secondary"
        severity={type}
        onClose={onClose}
        iconMapping={{
          error: <CancelIcon />,
          warning: <ErrorIcon />,
          info: <InfoIcon />,
          success: <CheckCircleIcon />,
        }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
}
