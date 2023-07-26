import Layout from '@/components/Layout';
import LoginForm from '@/components/Login';

export default function Login() {
  return (
    <Layout spacing={3} maxWidth="xs">
      <LoginForm />
    </Layout>
  );
}

export const getStaticProps = async () => ({
  props: {},
});
