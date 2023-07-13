import * as React from 'react';
import {
  Badge,
  Box,
  Divider,
  IconButton,
  ListSubheader,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { Scrollbar } from '@/components/Common/Scrollbar';

const notifications = [
  'This is a looooooooooooooooooooooooong notification number 1',
  'This is notification number 2',
  'This is notification number 3',
  'This is notification number 4',
  'This is notification number 5',
  'This is notification number 6',
  'This is notification number 7',
  'This is notification number 7',
  'This is notification number 7',
  'This is notification number 7',
  'This is notification number 7',
  'This is notification number 7',
];

export default function NotificationMenu() {
  const [anchorElNotification, setAnchorElNotification] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElNotification(null);
  };

  return (
    <>
      <IconButton sx={{ borderRadius: '100%' }} onClick={handleOpen}>
        <Badge color="primary" variant="dot">
          <NotificationsNoneIcon />
        </Badge>
      </IconButton>

      <Menu
        sx={{ mt: '40px', '& .MuiList-root': { maxWidth: 350, maxHeight: 450, padding: 1.5 } }}
        id="menu-appbar"
        anchorEl={anchorElNotification}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNotification)}
        onClose={handleClose}
      >
        <ListSubheader tw="uppercase">Notifications</ListSubheader>
        <Divider tw="my-2" />
        {notifications.map((notification) => (
          <MenuItem key={notification} onClick={handleClose} tw="flex flex-row justify-between">
            <Typography textAlign="center" variant="body1" tw="line-clamp-1 mr-4">
              {notification}
            </Typography>
            <Badge color="secondary" variant="dot" />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
