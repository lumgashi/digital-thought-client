import React from 'react';
import { Box, BoxProps } from '@mui/material';

type RestBoxProps = Omit<BoxProps, 'alignItems' | 'justifyContent' | 'flexWrap' | 'flexDirection'>;

export interface FlexProps extends RestBoxProps {
  align?: BoxProps['alignItems'];
  justify?: BoxProps['justifyContent'];
  wrap?: BoxProps['flexWrap'];
  direction?: BoxProps['flexDirection'];
}

export default function Flex(props: FlexProps) {
  const { align, justify, wrap, direction, sx, ...boxProps } = props;

  const styles = {
    ...sx,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexDirection: direction,
  };

  return <Box display="flex" {...boxProps} sx={styles} />;
}
