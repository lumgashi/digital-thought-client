import Link from 'next/link';
import { Box, Container, Divider, Typography } from '@mui/material';
import { theme as twinTheme } from 'twin.macro';

import { useColorMode } from '@/providers/ColorModeProvider';

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <footer>
      <Box
        sx={{
          backgroundColor:
            colorMode === 'dark'
              ? (twinTheme`colors.neutral.300` as string)
              : (twinTheme`colors.gray.300` as string),
        }}
      >
        <Container maxWidth="lg">
          <div tw="mx-auto py-4 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div tw="flex flex-col space-y-4">
              <div tw="flex flex-row justify-between">
                <Typography variant="h3">digitalthought.com</Typography>

                <Link href="/">
                  <span>LOGO HERE</span>
                </Link>
              </div>

              <Divider
                tw="h-0.5"
                sx={{
                  '&.MuiDivider-root': {
                    backgroundColor:
                      colorMode === 'dark'
                        ? (twinTheme`colors.neutral.400` as string)
                        : (twinTheme`colors.gray.400` as string),
                  },
                }}
              />

              <div tw="flex flex-row justify-end">
                <Typography>© 2023 digitalthought.com</Typography>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </footer>
  );
}
