// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import type { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { SWRConfig } from 'swr';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import createEmotionCache from '@/utils/createEmotionCache';
import StylesGlobal from '@/components/GlobalStyles';
import Api from '@/lib/api';
import theme from '@/config/theme';
import { NotificationProvider } from '@/providers/NotificationProvider';

const clientSideEmotionCache = createEmotionCache();

interface DtAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: DtAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <SWRConfig value={{ fetcher: Api.get }}>
        <CacheProvider value={emotionCache}>
          <MuiThemeProvider theme={theme}>
            <StylesGlobal />
            <NotificationProvider>
              <Component {...pageProps} />
            </NotificationProvider>
          </MuiThemeProvider>
        </CacheProvider>
      </SWRConfig>
    </>
  );
}
