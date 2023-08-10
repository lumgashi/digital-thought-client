import React from 'react';
import { Container, useMediaQuery } from '@mui/material';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import theme from '@/config/theme';

interface LayoutProps {
  children: NonNullable<React.ReactNode>;
  spacing?: number;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

export default function Layout({ children, spacing = 0, maxWidth = 'lg' }: LayoutProps) {
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <div tw="flex flex-col h-screen">
      <Header />
      <Container
        disableGutters
        tw="flex-grow"
        sx={[spacing > 0 && { padding: theme.spacing(spacing, isDesktop ? 0 : 2) }]}
        maxWidth={maxWidth}
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
}
