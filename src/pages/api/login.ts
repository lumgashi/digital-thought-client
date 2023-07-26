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
    const url = `${baseUrl}/login`;

    try {
      const { token, ...otherData } = await fetchJson(url, {
        body: JSON.stringify(body),
        method: 'POST',
      });
      const user = { isLoggedIn: true, ...otherData };

      req.session.token = token;
      await req.session.save();

      return res.json(user);
    } catch (error: any) {
      const { response } = error;
      return res.status(response?.status || 500).json(error.data);
    }
  }
  return res.status(405).send('Method not allowed.');
});
