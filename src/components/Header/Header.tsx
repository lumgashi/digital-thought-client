import * as React from 'react';
import { Container, Divider, Grid, Toolbar, useMediaQuery } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import theme from '@/config/theme';
import CustomLink from '@/components/CustomLink';
import LinkButton from '@/components/LinkButton';
import { useAuth } from '@/providers/AuthProvider';

import MobileHeader from './MobileHeader';
import Navigation from './Navigation';
import NotificationMenu from './NotificationMenu';
import AccountMenu from './AccountMenu';

export default function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { isAuthenticated, isInitializing } = useAuth();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <div tw="w-full">
      <MuiAppBar position="relative" sx={{ boxShadow: 'none' }}>
        <Toolbar tw="py-4">
          <Container maxWidth="lg" disableGutters>
            <div tw="flex flex-row justify-between items-center">
              <div tw="flex flex-row items-end">
                <Grid container spacing={2}>
                  <Grid item>
                    <CustomLink href="/">LOGO HERE</CustomLink>
                  </Grid>
                  <Grid item>
                    <Navigation />
                  </Grid>
                </Grid>
              </div>

              {mounted && !isInitializing && (
                <div tw="flex flex-row items-center space-x-1">
                  {isAuthenticated ? (
                    <>
                      <NotificationMenu />
                      <AccountMenu />
                    </>
                  ) : (
                    <div tw="flex flex-row items-center space-x-2">
                      <LinkButton href="/login" endIcon={<PersonIcon />}>
                        Login
                      </LinkButton>
                      <LinkButton href="/signup" variant="outlined" endIcon={<PersonAddIcon />}>
                        Sign up
                      </LinkButton>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Container>
        </Toolbar>
      </MuiAppBar>

      <Divider />
    </div>
  );
}
