// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import React from 'react';
import type { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { SWRConfig } from 'swr';

import createEmotionCache from '@/utils/createEmotionCache';
import StylesGlobal from '@/components/GlobalStyles';
import Api from '@/lib/api';
import { NotificationProvider } from '@/providers/NotificationProvider';
import { ColorModeProvider } from '@/providers/ColorModeProvider';

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
          <ColorModeProvider>
            <StylesGlobal />
            <NotificationProvider>
              <Component {...pageProps} />
            </NotificationProvider>
          </ColorModeProvider>
        </CacheProvider>
      </SWRConfig>
    </>
  );
}
