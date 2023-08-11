import { CssBaseline, GlobalStyles } from '@mui/material';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = (
  <GlobalStyles
    styles={`
        /* noto-sans-300 */
        @font-face {
            font-family: 'San Francisco', sans-serif;
            font-style: normal;
            font-weight: 300;
            src: url('/fonts/SFNSText-Light-300.woff2') format('woff2'); /* Super Modern Browsers */
            src: local(''),
            url('/fonts/SFNSText-Light-300.woff') format('woff'), /* Modern Browsers */
            url('/fonts/SFNSText-Light-300.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        /* noto-sans-400 */
        @font-face {
            font-family: 'San Francisco', sans-serif;
            font-style: normal;
            font-weight: 400;
            src: url('/fonts/SFNSText-Regular-400.woff2') format('woff2'); /* Super Modern Browsers */
            src: local(''),
            url('/fonts/SFNSText-Regular-400.woff') format('woff'), /* Modern Browsers */
            url('/fonts/SFNSText-Regular-400.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        /* noto-sans-500 */
        @font-face {
            font-family: 'San Francisco', sans-serif;
            font-style: normal;
            font-weight: 500;
            src: url('/fonts/SFNSText-Medium-500.woff2') format('woff2'); /* Super Modern Browsers */
            src: local(''),
            url('/fonts/SFNSText-Medium-500.woff') format('woff'), /* Modern Browsers */
            url('/fonts/SFNSText-Medium-500.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        /* noto-sans-600 */
        @font-face {
            font-family: 'San Francisco', sans-serif;
            font-style: normal;
            font-weight: 600;
            src: url('/fonts/SFNSText-SemiBold-600.woff2') format('woff2'); /* Super Modern Browsers */
            src: local(''),
            url('/fonts/SFNSText-SemiBold-600.woff') format('woff'), /* Modern Browsers */
            url('/fonts/SFNSText-SemiBold-600.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        /* noto-sans-700 */
        @font-face {
            font-family: 'San Francisco', sans-serif;
            font-style: normal;
            font-weight: 700;
            src: url('/fonts/SFNSText-Bold-700.woff2') format('woff2'); /* Super Modern Browsers */
            src: local(''),
            url('/fonts/SFNSText-Bold-700.woff') format('woff'), /* Modern Browsers */
            url('/fonts/SFNSText-Bold-700.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        /* noto-sans-800 */
        @font-face {
            font-family: 'San Francisco', sans-serif;
            font-style: normal;
            font-weight: 800;
            src: url('/fonts/SFNSText-ExtraBold-800.woff2') format('woff2'); /* Super Modern Browsers */
            src: local(''),
            url('/fonts/SFNSText-ExtraBold-800.woff') format('woff'), /* Modern Browsers */
            url('/fonts/SFNSText-ExtraBold-800.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        /* noto-sans-900 */
        @font-face {
            font-family: 'San Francisco', sans-serif;
            font-style: normal;
            font-weight: 900;
            src: url('/fonts/SFNSText-Black-900.woff2') format('woff2'); /* Super Modern Browsers */
            src: local(''),
            url('/fonts/SFNSText-Black-900.woff') format('woff'), /* Modern Browsers */
            url('/fonts/SFNSText-Black-900.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        
        body {
            ${tw`antialiased`}
        }
        `}
  />
);

const StylesGlobal = () => (
  <>
    <CssBaseline />
    <BaseStyles />
    {CustomStyles}
  </>
);

export default StylesGlobal;
