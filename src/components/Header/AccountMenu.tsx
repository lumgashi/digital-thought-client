import * as React from 'react';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useColorMode } from '@/providers/ColorModeProvider';
import theme from '@/config/theme';
import { useAuth } from '@/providers/AuthProvider';

type SettingType = {
  id: number;
  label: string;
  icon: React.ReactNode;
  href?: string;
};

const settings: SettingType[] = [
  { id: 1, label: 'Log Out', icon: <LogoutIcon fontSize="small" /> },
];

export default function AccountMenu() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const { logout } = useAuth();
  const { colorMode, handleColorModeChange } = useColorMode();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
  };

  const handleClickUserMenu = (option?: number) => {
    if (option === 1) {
      logout();
    }

    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Account Settings">
        <IconButton
          onClick={handleOpenUserMenu}
          size={isMobile ? 'small' : 'medium'}
          sx={{
            '&.MuiIconButton-root': {
              backgroundColor: isMobile ? 'inherit' : 'none',
            },
          }}
        >
          <ManageAccountsIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '40px', '& .MuiList-root': { maxWidth: 350, maxHeight: 450, padding: 1.5 } }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleClose}
      >
        <ListSubheader>Account Settings</ListSubheader>
        <Divider tw="my-2" />
        <ListItem
          disablePadding
          sx={{
            mx: 2,
            '& .MuiListItemIcon-root': { minWidth: 35, width: 'auto' },
            '& .MuiListItemText-root': { flex: 0, minWidth: 80, width: 'auto' },
          }}
        >
          <ListItemIcon>
            <DarkModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Typography component="span" tw="font-medium">
              Display
            </Typography>
          </ListItemText>

          <Tooltip title={colorMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <IconButton
              size="small"
              onClick={() =>
                handleColorModeChange.toggleColorMode(colorMode === 'dark' ? 'light' : 'dark')
              }
            >
              {colorMode === 'dark' ? (
                <Brightness7Icon fontSize="small" />
              ) : (
                <Brightness4Icon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </ListItem>
        <Divider tw="my-2" />
        {settings.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClickUserMenu(item.id)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography tw="font-medium">{item.label}</Typography>
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>

      {/* <ColorModeDialog
        open={colorModeOpen}
        onClose={handleCloseColorMode}
        onSuccess={(colorMode) => handleColorModeSuccess(colorMode)}
      /> */}
    </>
  );
}
