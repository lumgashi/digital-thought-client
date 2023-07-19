import * as React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  List,
  MenuItem,
  Radio,
  Typography,
  useMediaQuery,
} from '@mui/material';

import CustomDialogTitle from '@/components/Common/CustomDialogTitle';
import theme from '@/config/theme';
import { ColorModeType, useColorMode } from '@/providers/ColorModeProvider';

type Props = {
  open: boolean;
  onClose?: () => void;
  onSuccess?: (colorMode: ColorModeType) => void;
};

export default function ColorModeDialog({ open, onClose, onSuccess }: Props) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { colorMode, handleColorModeChange } = useColorMode();

  const [radioValue, setRadioValue] = React.useState<ColorModeType | undefined>(undefined);

  const confirmColorModeChange = () => {
    if (radioValue) {
      handleColorModeChange.toggleColorMode(radioValue);

      if (onSuccess) {
        onSuccess(radioValue);
      }
    }
  };

  React.useEffect(() => {
    if (colorMode) {
      setRadioValue(colorMode);
    }
  }, [colorMode]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs">
      <div tw="flex flex-col overflow-auto">
        <CustomDialogTitle
          id="change-temperature-unit-dialog"
          onClose={isMobile ? undefined : onClose}
          title="Dark Mode"
        />

        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography>
                Adjust the appearance to reduce glare and give your eyes a break.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <MenuItem disableGutters onClick={() => setRadioValue('dark')}>
                  <Radio
                    value="dark"
                    size="small"
                    name="dark"
                    checked={radioValue === 'dark'}
                    onChange={() => setRadioValue('dark')}
                  />
                  <Typography tw="ml-2">On</Typography>
                </MenuItem>
                <MenuItem disableGutters onClick={() => setRadioValue('light')}>
                  <Radio
                    value="light"
                    size="small"
                    name="light"
                    checked={radioValue === 'light'}
                    onChange={() => setRadioValue('light')}
                  />
                  <Typography tw="ml-2">Off</Typography>
                </MenuItem>
              </List>
            </Grid>

            <Grid item container xs={12} justifyContent="flex-end">
              <Button onClick={confirmColorModeChange}>OK</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </div>
    </Dialog>
  );
}
