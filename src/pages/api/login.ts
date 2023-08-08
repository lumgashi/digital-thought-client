import getConfig from 'next/config';
import jwt_decode from 'jwt-decode';

import withSessionRoute from '@/lib/withSession';
import { fetchJson } from '@/lib/api';
import cors from '@/lib/corsMiddleware';

const { serverRuntimeConfig } = getConfig();
const baseUrl = serverRuntimeConfig.backendUrl;

export default withSessionRoute(async (req, res) => {
  await cors(req, res);

  if (req.method === 'POST') {
    const body = await req.body;
    const url = `${baseUrl}/api/auth/login`;

    try {
      const { data } = await fetchJson(url, {
        body: JSON.stringify(body),
        method: 'POST',
      });

      const { accessToken } = data;
      const userData: any = jwt_decode(accessToken);

      const { email, role } = userData;
      const user = { isLoggedIn: true, accessToken, email, role };

      req.session.accessToken = user.accessToken;
      req.session.userData = { email, role };
      await req.session.save();

      return res.json(user);
    } catch (error: any) {
      const { response } = error;
      return res.status(response?.status || 500).json(error.data);
    }
  }
  return res.status(405).send('Method not allowed.');
});
