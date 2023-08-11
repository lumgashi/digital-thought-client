import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const variants: Record<Variant, TypographyProps> = {
  h1: {
    fontSize: ['36px', '40px', '48px', '72px'],
    lineHeight: ['40px', '1.2', '1'],
    fontWeight: 'bold',
  },
  h2: {
    fontSize: ['32px', '36px', '40px', '60px'],
    lineHeight: ['1.25', '40px', '1.2', '1'],
    fontWeight: 'bold',
  },
  h3: {
    fontSize: ['28px', '32px', '36px', '48px'],
    lineHeight: ['32px', '1.25', '40px', '1'],
    fontWeight: 'bold',
  },
  h4: {
    fontSize: ['24px', '28px', '32px', '36px'],
    lineHeight: ['32px', '32px', '40px'],
    fontWeight: '800',
  },
  h5: {
    fontSize: ['20px', '24px'],
    lineHeight: ['24px', '32px'],
    fontWeight: 'bold',
  },
  h6: {
    fontSize: '16px',
    lineHeight: 1.5,
    fontWeight: 'bold',
  },
};

export interface HeadlineProps extends Omit<TypographyProps, 'component' | 'variant'> {
  component: Variant;
  variant: Variant;
  upperCase?: boolean;
}

export default function Headline(props: HeadlineProps) {
  const { component, variant, upperCase, sx, ...typographyProps } = props;

  return (
    <Typography
      {...variants[variant]}
      {...typographyProps}
      sx={{
        textTransform: upperCase ? 'uppercase' : undefined,
        ...sx,
      }}
    />
  );
}
