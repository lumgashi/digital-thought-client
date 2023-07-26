import * as React from 'react';
import useSWR, { mutate } from 'swr';

import Api from '@/lib/api';
import { User, ProfileTypes } from '@/interfaces/user.interface';

import { useNotification } from './NotificationProvider';

interface AuthContextValue {
  user?: User;
  userProfile?: ProfileTypes;
  isAuthenticated: boolean;
  isInitializing: boolean;
  error: any;
  setUserProfile: React.Dispatch<React.SetStateAction<ProfileTypes | undefined>>;
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
  setUserProfile: () => {},
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
  const [userProfile, setUserProfile] = React.useState<ProfileTypes>();

  React.useEffect(() => {
    if (!isValidating && user?.isLoggedIn && user?.allowedProfiles) {
      const profileFromStorage = window.localStorage.getItem('userProfile') ?? undefined;

      if (profileFromStorage) {
        setUserProfile(profileFromStorage as ProfileTypes);
      } else {
        setUserProfile(user?.profile);
      }
    }
  }, [isValidating, user?.allowedProfiles, user?.isLoggedIn, user?.profile]);

  React.useEffect(() => {
    if (userProfile) {
      window.localStorage.setItem('userProfile', userProfile.toString());
    }
  }, [userProfile]);

  const login = React.useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        const data: User = await Api.post('login', { email, password });
        const profile = data?.profile ? data?.profile : undefined;

        setUserProfile(profile);
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
      mutate(response, false);
      setUserProfile(undefined);
      window.localStorage.removeItem('userProfile');

      openSnackbar('Logged out successfully');
    } catch (err) {
      mutateUser({ isLoggedIn: false }, false);
      throw err;
    }
  };

  const value = {
    user,
    userProfile,
    isAuthenticated: Boolean(user?.isLoggedIn),
    isInitializing: Boolean(!user && !error), // App is initialising, reloading, refreshing.
    error,
    setUserProfile,
    login,
    logout,
    mutateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
