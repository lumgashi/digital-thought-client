import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { Box, Grid } from '@mui/material';
import { theme as twinTheme } from 'twin.macro';

import { useColorMode } from '@/providers/ColorModeProvider';
import Headline from '@/components/Common/Base/Headline';
import Text from '@/components/Common/Base/Text';
import CustomLink from '@/components/CustomLink';

const categories = [
  'Politics',
  'Office Hours',
  'Travel Tales',
  'Artistic Expressions',
  'Tech Innovations',
  'Health & Wellness',
  'Food Adventures',
  'Book Nook',
  'Mindful Living',
  'Science Wonders',
  'Personal Growth',
  'Fashion & Style',
  'Nature`s Beauty',
  'Home & Decor',
  'Fitness Journeys',
  'Cultural Insights',
  'Photography Corner',
  'Entertainment Buzz',
  'Writing Inspiration',
  'Spiritual Reflections',
];

export default function BlogCategories() {
  const { colorMode } = useColorMode();

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        my: 10,
        py: 2,
        background:
          colorMode === 'dark'
            ? (twinTheme`colors.neutral.300` as string)
            : (twinTheme`colors.gray.200` as string),
      }}
    >
      <Grid container rowSpacing={6} py={4}>
        <Grid item xs={12}>
          <Headline variant="h5" component="h5" textAlign="center">
            Blog Categories
          </Headline>
        </Grid>
        <Grid item xs={12}>
          <Slider {...settings}>
            {categories.map((category, index) => (
              <>
                <Box key={index} tw="w-full flex flex-row justify-around items-center">
                  <div tw="w-fit">
                    <CustomLink href={category}>
                      <Text textAlign="center" component="span" tw="font-medium">
                        {category}
                      </Text>
                    </CustomLink>
                  </div>
                  <Box
                    sx={{
                      width: '1px',
                      height: 70,
                      bgcolor:
                        colorMode === 'dark'
                          ? (twinTheme`colors.neutral.200` as string)
                          : (twinTheme`colors.gray.400` as string),
                      transform: 'rotate(20deg)',
                    }}
                  />
                </Box>
              </>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
}
