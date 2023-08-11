import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Slider from 'react-slick';
import { theme as twinTheme } from 'twin.macro';

import { homeSliderArticles } from '@/utils/homeSliderArticles';
import { useColorMode } from '@/providers/ColorModeProvider';
import Flex from '@/components/Common/Base/Flex';
import VerticalCard from '@/components/Common/ArticleCards/VerticalCard';

type ButtonProps = {
  onClick: any;
  colorMode: any;
  children: React.ReactNode;
};

const CustomIconButton = ({ onClick, colorMode, children }: ButtonProps) => (
  <IconButton
    onClick={onClick}
    sx={{
      padding: 0,
      background:
        colorMode === 'light'
          ? (twinTheme`colors.gray.400` as string)
          : (twinTheme`colors.neutral.300` as string),
      '&:hover': {
        background:
          colorMode === 'light'
            ? (twinTheme`colors.gray.400` as string)
            : (twinTheme`colors.neutral.300` as string),
        opacity: 0.9,
      },
    }}
  >
    {children}
  </IconButton>
);

const PrevArrow = (props: any) => {
  const { onClick } = props;
  const { colorMode } = useColorMode();

  return (
    <Flex justifyItems="center" align="center" tw="h-full absolute -left-7">
      <CustomIconButton onClick={onClick} colorMode={colorMode}>
        <KeyboardArrowLeftIcon fontSize="small" sx={{ color: 'white' }} />
      </CustomIconButton>
    </Flex>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  const { colorMode } = useColorMode();

  return (
    <Flex justifyItems="center" align="center" tw="h-full absolute top-0 -right-7">
      <CustomIconButton onClick={onClick} colorMode={colorMode}>
        <KeyboardArrowRightIcon fontSize="small" sx={{ color: 'white' }} />
      </CustomIconButton>
    </Flex>
  );
};

export default function HomeSlider() {
  return (
    <div tw="w-full">
      <Slider
        className="center"
        dots={false}
        swipe
        arrows
        centerMode={true}
        slidesToShow={1}
        speed={500}
        autoplay
        autoplaySpeed={3000}
        infinite
        lazyLoad="progressive"
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        tw="w-full relative hover:cursor-pointer"
      >
        {homeSliderArticles.map((article) => (
          <VerticalCard article={article} key={article.id} />
        ))}
      </Slider>
    </div>
  );
}
