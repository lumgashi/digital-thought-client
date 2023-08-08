import * as React from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/providers/AuthProvider';

interface GuestGuardProps {
  children: React.ReactNode;
}

export default function GuestGuard({ children }: GuestGuardProps) {
  const router = useRouter();

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  return <>{children}</>;
}
