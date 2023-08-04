import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export type NextIronHandler = (req: NextApiRequest, res: NextApiResponse) => void | Promise<void>;
export type IronHandler = (req: NextApiRequest, res: NextApiResponse) => void | Promise<void>;

declare module 'iron-session' {
  interface IronSessionData {
    accessToken: string;
    user?: any;
  }
}

const withSessionRoute = (handler: NextApiHandler) =>
  withIronSessionApiRoute(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: 'dt-cookie',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });

export default withSessionRoute;
