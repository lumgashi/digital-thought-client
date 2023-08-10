import { Box } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function EntryLayout({ children }: Props) {
  return (
    <Box
      tw="rounded-md"
      sx={{
        py: { xs: 2, sm: 4, md: 8 },
        px: { xs: 2, sm: 10, md: 16 },
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      {children}
    </Box>
  );
}
