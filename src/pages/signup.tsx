import GuestGuard from '@/components/Guards/GuestGuard';
import Layout from '@/components/Layout';
import { SignupComponent } from '@/components/Signup';

export default function Signup() {
  return (
    <GuestGuard>
      <Layout spacing={8} maxWidth="sm">
        <SignupComponent />
      </Layout>
    </GuestGuard>
  );
}

export const getStaticProps = async () => ({
  props: {},
});
