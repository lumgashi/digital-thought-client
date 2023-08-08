import { ProfileTypes } from './user.interface';

export default interface JWToken {
  email: string;
  role: ProfileTypes;
}
