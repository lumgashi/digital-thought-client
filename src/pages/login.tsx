import GuestGuard from '@/components/Guards/GuestGuard';
import Layout from '@/components/Layout';
import LoginForm from '@/components/Login';

export default function Login() {
  return (
    <GuestGuard>
      <Layout spacing={3} maxWidth="xs">
        <LoginForm />
      </Layout>
    </GuestGuard>
  );
}

export const getStaticProps = async () => ({
  props: {},
});
