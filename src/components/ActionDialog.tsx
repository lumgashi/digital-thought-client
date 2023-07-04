import * as React from 'react';
import {
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import LoadingButton from '@/components/LoadingButton';

type Props = {
  buttonDisabled?: boolean;
  content: string;
  confirmationButtonText?: string;
  hideCancel?: boolean;
  isLoading?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  open: boolean;
  title?: string;
  onConfirm: () => Promise<void>;
  onClose: (event: {}, reason?: 'backdropClick' | 'escapeKeyDown') => void;
};

export default function ActionDialog({
  buttonDisabled = false,
  content,
  confirmationButtonText,
  hideCancel = false,
  isLoading = false,
  maxWidth = 'sm',
  open,
  title,
  onConfirm,
  onClose,
}: Props) {
  return (
    <Dialog open={open} maxWidth={maxWidth} onClose={onClose} aria-labelledby="action-dialog">
      <div tw="flex flex-col overflow-auto">
        <DialogTitle>
          <Typography variant="h2" component="span">
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div tw="text-center" id="action-dialog-description">
            {content}
          </div>
        </DialogContent>
      </div>
      <DialogActions>
        {!hideCancel && (
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>
        )}
        <LoadingButton
          variant="contained"
          color="primary"
          disabled={buttonDisabled}
          isLoading={isLoading}
          onClick={onConfirm}
        >
          {confirmationButtonText ?? 'Ok'}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
