import Header from '@/components/Header';
import React from 'react';

interface LayoutProps {
  children: NonNullable<React.ReactNode>;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div tw="flex flex-col">
      <Header />
      {children}
    </div>
  );
}
