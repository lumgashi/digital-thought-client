import withSessionRoute from '@/lib/withSession';
import cors from '@/lib/corsMiddleware';
import proxyMiddleware from '@/lib/proxyMiddleware';

export default withSessionRoute(async (req, res) => {
  await cors(req, res);

  const token = req.session.accessToken;

  await proxyMiddleware(token)(req, res);
});

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
