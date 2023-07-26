import * as React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { theme as twinTheme } from 'twin.macro';

import theme from '@/config/theme';
import { navigationItems } from '@/utils/navigation';
import { useColorMode } from '@/providers/ColorModeProvider';

import NotificationMenu from './NotificationMenu';
import AccountMenu from './AccountMenu';

const DrawerHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function MobileHeader() {
  const router = useRouter();

  const [open, setOpen] = React.useState<boolean>(false);

  const { colorMode } = useColorMode();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : 'inherit',
          boxShadow: '-1px 0px 12px 0px rgba(0,0,0,0.4)',
        }}
      >
        <Container tw="w-full flex flex-row justify-between items-center py-4">
          <span>LOGO HERE</span>

          <div tw="flex flex-row items-center justify-center space-x-1">
            <NotificationMenu />
            <AccountMenu />
            <Tooltip title="Menu" arrow>
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
                }}
              >
                <MenuIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </Container>
      </Box>

      <div>
        <Drawer
          sx={{
            width: 1,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '75%',
              boxShadow: '-1px 0px 12px 0px rgba(0,0,0,0.4)',
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader tw="flex flex-row justify-between px-4 mt-2">
            <Typography variant="h2">Menu</Typography>
            <IconButton size="small" onClick={handleDrawerClose}>
              <CloseRoundedIcon fontSize="small" />
            </IconButton>
          </DrawerHeader>

          <Divider tw="my-2" />

          <List>
            {navigationItems.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  bgcolor:
                    router.asPath === item.href
                      ? colorMode === 'dark'
                        ? (twinTheme`colors.neutral.300` as string)
                        : (twinTheme`colors.gray.300` as string)
                      : 'inherit',
                }}
                onClick={() => router.push(item.href)}
              >
                <ListItemText>
                  <Typography tw="text-lg font-bold">{item.title}</Typography>
                </ListItemText>
              </ListItem>
            ))}

            <Divider tw="my-2" />

            <ListItem onClick={() => router.push('/login')}>
              <ListItemText>
                <Typography tw="text-lg font-bold">Login</Typography>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => router.push('/signup')}>
              <ListItemText>
                <Typography tw="text-lg font-bold">Sign up</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </Box>
  );
}
