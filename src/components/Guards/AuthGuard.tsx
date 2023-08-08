import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import BackdropLoadingSpinner from '@/components/BackdropLoadingSpinner';
import { useAuth } from '@/providers/AuthProvider';

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();

  const { isAuthenticated, isInitializing } = useAuth();

  const [requestedLocation, setRequestedLocation] = React.useState<string | null>(null);

  if (isInitializing) {
    if (router.pathname !== requestedLocation) {
      setRequestedLocation(router.pathname);
    }
    return <BackdropLoadingSpinner isLoading={isInitializing} />;
  }

  if (!isAuthenticated) {
    router.push('/login');
  }

  // In case the route changes during request, we navigate to the initially
  // requested route.
  if (requestedLocation && router.pathname !== requestedLocation) {
    setRequestedLocation(null);
    router.push(requestedLocation);
    return null;
  }

  return <>{children}</>;
}
