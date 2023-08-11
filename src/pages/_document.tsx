import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

import createEmotionCache from '@/utils/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {process.env.BUILD_ENV === 'development' && <meta name="robots" content="none" />}
          <link
            rel="prefetch"
            href="/fonts/SFNSText-Light-300.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/SFNSText-Regular-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/SFNSText-Medium-500.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/SFNSText-SemiBold-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/SFNSText-Bold-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/SFNSText-ExtraBold-800.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="prefetch"
            href="/fonts/SFNSText-Black-900.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
