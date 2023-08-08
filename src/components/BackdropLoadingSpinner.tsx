import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
  isLoading: boolean;
}

export default function BackdropLoadingSpinner({ isLoading }: Props) {
  return (
    <Backdrop open={isLoading} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <CircularProgress />
    </Backdrop>
  );
}
