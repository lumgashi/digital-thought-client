import * as React from 'react';
import {
  Badge,
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
      <Tooltip title="Notifications">
        <IconButton
          sx={{
            borderRadius: '100%',
            '&.MuiIconButton-root': {
              backgroundColor: 'inherit',
            },
          }}
          onClick={handleOpen}
        >
          <Badge color="error" variant="dot">
            <NotificationsNoneIcon fontSize="small" />
          </Badge>
        </IconButton>
      </Tooltip>

      <Scrollbar>
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
          <ListSubheader>Notifications</ListSubheader>
          <Divider tw="my-2" />
          {notifications.map((notification, index) => (
            <MenuItem key={index} onClick={handleClose} tw="flex flex-row justify-between">
              <Typography textAlign="center" variant="body1" tw="line-clamp-1 mr-4">
                {notification}
              </Typography>
              <Badge color="secondary" variant="dot" />
            </MenuItem>
          ))}
        </Menu>
      </Scrollbar>
    </>
  );
}
