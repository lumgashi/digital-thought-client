import { DialogTitle, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface DialogTitleProps {
  id: string;
  title: string;
  onClose?: () => void;
  startIcon?: React.ReactNode;
}

export default function CustomDialogTitle({ id, title, onClose, startIcon }: DialogTitleProps) {
  return (
    <DialogTitle id={id} tw="mt-2">
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item container xs={'auto'} alignItems="center">
          {startIcon && startIcon}
          <Typography variant="h2">{title}</Typography>
        </Grid>

        {onClose && (
          <Grid item>
            <IconButton size="small" aria-label="close" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </DialogTitle>
  );
}
