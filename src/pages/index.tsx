import { HomeComponent } from '@/components/Home';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout maxWidth={false} spacing={2}>
      <HomeComponent />
    </Layout>
  );
}

export const getStaticProps = async () => ({
  props: {},
});
