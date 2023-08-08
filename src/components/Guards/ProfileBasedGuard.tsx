import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { ProfileTypes } from '@/interfaces/user.interface';
import { useAuth } from '@/providers/AuthProvider';
import BackdropLoadingSpinner from '@/components/BackdropLoadingSpinner';

interface ProfileBasedGuardProps {
  profiles: ProfileTypes[];
  redirectTo?: string;
  children: ReactNode;
}

export default function ProfileBasedGuard({
  profiles,
  redirectTo,
  children,
}: ProfileBasedGuardProps) {
  const router = useRouter();

  const { isInitializing, isAuthenticated, userRole } = useAuth();

  if (isInitializing) {
    return <BackdropLoadingSpinner isLoading={isInitializing} />;
  }

  if (!isAuthenticated) {
    router.push('/login');
  }

  if (userRole && !profiles.includes(userRole)) {
    if (userRole === ProfileTypes.ADMIN) router.push(redirectTo ? redirectTo : '/backoffice');
    if (userRole === ProfileTypes.AUTHOR) router.push(redirectTo ? redirectTo : '/author');
    if (userRole === ProfileTypes.MEMBER) router.push(redirectTo ? redirectTo : '/');
    if (userRole === ProfileTypes.USER) router.push(redirectTo ? redirectTo : '/');
    return null;
  }

  return <>{children}</>;
}
