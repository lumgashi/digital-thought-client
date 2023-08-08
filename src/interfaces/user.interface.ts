export enum ProfileTypes {
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
  MEMBER = 'MEMBER',
  USER = 'USER',
}

export interface User {
  email?: string;
  password?: string;
  role?: ProfileTypes;
  isLoggedIn?: boolean;
  isVerified?: boolean;
  allowedProfiles?: number[] | undefined;
}
