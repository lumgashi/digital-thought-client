import React from 'react';
import { BoxProps, Typography, TypographyProps } from '@mui/material';

type Variant = 'subtitle1' | 'subtitle2' | 'body1' | 'body2';

const variants: Record<Variant, TypographyProps> = {
  subtitle1: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 'bold',
  },
  subtitle2: {
    fontSize: '20px',
    lineHeight: '28px',
  },
  body1: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 300,
  },
  body2: {
    fontSize: '16px',
    lineHeight: '24px',
  },
};

interface Props extends Omit<TypographyProps, 'variant'> {
  /** @default body1 */
  variant?: Variant;
  component?: BoxProps['component'];
  color?: BoxProps['color'] | 'textSecondary';
}

export default function Text(props: Props) {
  const { variant = 'body1', component, color, sx, ...typographyProps } = props;

  return <Typography {...variants[variant]} {...typographyProps} sx={{ ...sx }} />;
}
