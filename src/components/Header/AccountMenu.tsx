import * as React from 'react';
import {
  Box,
  Divider,
  IconButton,
  ListSubheader,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import theme from '@/config/theme';

const settings = ['Logout'];

export default function AccountMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (option?: string) => {
    if (option === 'Logout') {
      //   logout();
    }
    setAnchorElUser(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpenUserMenu}
        sx={{
          borderRadius: '100%',
          backgroundColor: theme.palette.primary.light,
          '& .MuiSvgIcon-root': {
            color: theme.palette.common.white,
          },
          ':hover': {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        <PersonOutlineOutlinedIcon />
      </IconButton>
    </>
  );
}
