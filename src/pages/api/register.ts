import getConfig from 'next/config';

import withSessionRoute from '@/lib/withSession';
import { fetchJson } from '@/lib/api';
import cors from '@/lib/corsMiddleware';

const { serverRuntimeConfig } = getConfig();
const baseUrl = serverRuntimeConfig.backendUrl;

export default withSessionRoute(async (req, res) => {
  await cors(req, res);

  if (req.method === 'POST') {
    const body = await req.body;
    const url = `${baseUrl}/api/auth/register`;

    try {
      const { data } = await fetchJson(url, {
        body: JSON.stringify(body),
        method: 'POST',
      });

      const { accessToken, email, role } = data;

      const user = { isLoggedIn: true, accessToken, email, role };
      req.session.accessToken = accessToken;
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
