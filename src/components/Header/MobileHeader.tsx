import * as React from 'react';
import { Box, CssBaseline, Drawer, IconButton, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import theme from '@/config/theme';
import NotificationMenu from './NotificationMenu';
import AccountMenu from './AccountMenu';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function MobileHeader() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiAppBar position="fixed">
        <Toolbar tw="flex flex-row justify-between">
          <span>LOGO HERE</span>

          <div tw="flex flex-row items-center justify-center space-x-1">
            <NotificationMenu />
            <AccountMenu />
            <IconButton
              size="small"
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{
                ...(open && {
                  display: 'none',
                }),
                '&.MuiIconButton-root ': {
                  bgcolor: theme.palette.common.white,
                },
              }}
            >
              <MenuIcon tw="text-gray-500" />
            </IconButton>
          </div>
        </Toolbar>
      </MuiAppBar>

      <Drawer
        sx={{
          width: 1,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '75%',
            boxShadow: '-1px 0px 6px 0px rgba(0,0,0,0.2)',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader tw="flex flex-row justify-between px-4 mt-2">
          <Typography variant="h2">Menu</Typography>
          <IconButton
            size="small"
            onClick={handleDrawerClose}
            sx={{
              '&.MuiIconButton-root ': {
                bgcolor: theme.palette.common.white,
              },
            }}
          >
            <CloseRoundedIcon tw="text-gray-500" />
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </Box>
  );
}
