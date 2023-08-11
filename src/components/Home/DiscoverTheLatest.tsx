import { Divider, Grid } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Headline from '@/components/Common/Base/Headline';
import Text from '@/components/Common/Base/Text';
import CustomLink from '@/components/CustomLink';
import { homeSliderArticles } from '@/utils/homeSliderArticles';
import VerticalCard from '@/components/Common/ArticleCards/VerticalCard';

export default function DiscoverTheLatest() {
  return (
    <Grid container rowSpacing={10}>
      <Grid item xs={12}>
        <Headline variant="h4" component="h5" textAlign="center">
          Discover the latest in...
        </Headline>
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <Grid item container xs={12} justifyContent="space-between">
          <Grid item>
            <Headline variant="h5" component="h5">
              Customer Service
            </Headline>
          </Grid>
          <Grid item>
            <CustomLink
              href="/articles?topic=customer-service"
              tw="flex flex-row items-center font-semibold"
            >
              <Text variant="body2" tw="font-semibold">
                View more Posts
              </Text>
              <KeyboardArrowRightIcon fontSize="small" />
            </CustomLink>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {homeSliderArticles.slice(0, 3).map((article) => (
          <Grid item xs={12} lg={4} key={article.id}>
            <VerticalCard article={article} />
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <Grid item container xs={12} justifyContent="space-between">
          <Grid item>
            <Headline variant="h5" component="h5">
              Growth & Culture
            </Headline>
          </Grid>
          <Grid item>
            <CustomLink
              href="/articles?topic=customer-service"
              tw="flex flex-row items-center font-semibold"
            >
              <Text variant="body2" tw="font-semibold">
                View more Posts
              </Text>
              <KeyboardArrowRightIcon fontSize="small" />
            </CustomLink>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {homeSliderArticles.slice(0, 3).map((article) => (
          <Grid item xs={12} lg={4} key={article.id}>
            <VerticalCard article={article} />
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <Grid item container xs={12} justifyContent="space-between">
          <Grid item>
            <Headline variant="h5" component="h5">
              Inside Help Scout
            </Headline>
          </Grid>
          <Grid item>
            <CustomLink
              href="/articles?topic=customer-service"
              tw="flex flex-row items-center font-semibold"
            >
              <Text variant="body2" tw="font-semibold">
                View more Posts
              </Text>
              <KeyboardArrowRightIcon fontSize="small" />
            </CustomLink>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {homeSliderArticles.slice(0, 3).map((article) => (
          <Grid item xs={12} lg={4} key={article.id}>
            <VerticalCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
