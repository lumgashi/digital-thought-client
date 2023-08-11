import { Box, Container, Grid, Typography } from '@mui/material';

import LinkButton from '@/components/LinkButton';

import HomeSlider from './HomeSlider';

export default function Hero() {
  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12} md={6} lg={7}>
            <Grid item container xs={12} rowSpacing={6}>
              <Grid item xs={12}>
                <Typography variant="h1" tw="text-7xl lg:text-8xl font-bold">
                  Seeking the unseen.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" tw="text-xl font-medium">
                  Charting unknown realms of imagination, <br /> guided by the compass of language.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <LinkButton href="/articles" fullWidth>
                  Get started
                </LinkButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={5} sx={{ display: { xs: 'none', md: 'flex' } }} pr={4}>
            <HomeSlider />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
