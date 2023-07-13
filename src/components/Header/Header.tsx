import { useMediaQuery } from '@mui/material';

import theme from '@/config/theme';
import MobileHeader from './MobileHeader';

export default function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <div>
      <h1>header</h1>
    </div>
  );
}
