import * as React from 'react';
import { Button, ButtonProps, CircularProgress, styled } from '@mui/material';

const CircularProgressButton = styled(CircularProgress)(() => ({
  position: 'absolute',
  color: 'inherit !important',
}));

type LoadingButtonProps = {
  disabled?: boolean;
  isLoading: boolean;
};

export default function LoadingButton({
  children,
  isLoading,
  disabled,
  ...props
}: React.PropsWithChildren<LoadingButtonProps & ButtonProps>) {
  return (
    <Button disabled={isLoading || disabled} {...props} tw="relative">
      {children}
      {isLoading && <CircularProgressButton size={20} />}
    </Button>
  );
}
