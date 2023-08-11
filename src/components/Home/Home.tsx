import { Container, Grid } from '@mui/material';

import BlogCategories from './BlogCategories';
import DiscoverTheLatest from './DiscoverTheLatest';
import Hero from './Hero';
import SubscribeNewsletter from './SubscribeNewsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <BlogCategories />
      <Container disableGutters maxWidth="lg" sx={{ my: 10 }}>
        <Grid container>
          <Grid item xs={12}>
            <DiscoverTheLatest />
          </Grid>
          <Grid item xs={12}>
            <SubscribeNewsletter />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
    </>
  );
}
