import * as React from 'react';
import useSWR from 'swr';

import Api from '@/lib/api';
import { User, ProfileTypes } from '@/interfaces/user.interface';

import { useNotification } from './NotificationProvider';

interface AuthContextValue {
  user?: User;
  userRole?: ProfileTypes;
  isAuthenticated: boolean;
  isInitializing: boolean;
  error: any;
  setUserRole: React.Dispatch<React.SetStateAction<ProfileTypes | undefined>>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  mutateUser: (
    data?: User | Promise<User>,
    shouldRevalidate?: boolean
  ) => Promise<User | undefined>;
}

export const AuthContext = React.createContext<AuthContextValue>({
  isAuthenticated: false,
  isInitializing: true,
  error: null,
  setUserRole: () => {},
  login: async () => {},
  logout: async () => {},
  mutateUser: async () => undefined,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { openSnackbar } = useNotification();

  const { data: user, mutate: mutateUser, error, isValidating } = useSWR<User>('auth');
  const [userRole, setUserRole] = React.useState<ProfileTypes>();

  React.useEffect(() => {
    if (!isValidating && user?.isLoggedIn) {
      const profileFromStorage = window.localStorage.getItem('userProfile') ?? undefined;

      if (profileFromStorage) {
        setUserRole(profileFromStorage as ProfileTypes);
      } else {
        setUserRole(user?.role);
      }
    }
  }, [isValidating, user?.allowedProfiles, user?.isLoggedIn, user?.role]);

  React.useEffect(() => {
    if (userRole) {
      window.localStorage.setItem('userProfile', userRole.toString());
    }
  }, [userRole]);

  const login = React.useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        const data: User = await Api.post('login', { email, password });
        const role = data?.role ? data?.role : undefined;

        setUserRole(role);
        await mutateUser(data, false);
      } catch (err) {
        mutateUser({ isLoggedIn: false }, false);
        throw err;
      }
    },
    [mutateUser]
  );

  const logout = async (): Promise<void> => {
    try {
      const response = await Api.delete('auth');
      mutateUser(response, false);
      setUserRole(undefined);
      window.localStorage.removeItem('userProfile');

      openSnackbar('Logged out successfully');
    } catch (err) {
      mutateUser({ isLoggedIn: false }, false);
      throw err;
    }
  };

  const value = {
    user,
    userRole,
    isAuthenticated: Boolean(user?.isLoggedIn),
    isInitializing: Boolean(!user && !error), // App is initialising, reloading, refreshing.
    error,
    setUserRole,
    login,
    logout,
    mutateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
