// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getConfig from 'next/config';

import withSession from '@/lib/withSession';
import { fetchJson } from '@/lib/api';
import cors from '@/lib/corsMiddleware';

const { serverRuntimeConfig } = getConfig();
const baseUrl = serverRuntimeConfig.backendUrl;

export default withSession(async (req, res) => {
  await cors(req, res);

  if (req.method === 'GET') {
    const token = req.session.accessToken;
    const user = req.session.userData;

    if (token) {
      try {
        const response = { isLoggedIn: true, token, ...user };

        await req.session.save();

        return res.json(response);
      } catch (error: any) {
        return res.json({
          isLoggedIn: false,
        });
      }
    }

    return res.json({
      isLoggedIn: false,
    });
  }

  if (req.method === 'DELETE') {
    try {
      await fetchJson(`${baseUrl}/logout`);
    } catch (_err) {
      //
    }
    req.session.destroy();
    return res.json({ isLoggedIn: false });
  }

  return res.status(405).send('Method not allowed.');
});
