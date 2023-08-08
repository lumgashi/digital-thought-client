import * as React from 'react';
import tw from 'twin.macro';
import { FieldErrors, useController, get } from 'react-hook-form';
import { FormControlLabel, CheckboxProps, FormHelperText, Checkbox } from '@mui/material';

type Props = {
  control: any;
  errors: FieldErrors;
  name: string;
  label: string | React.ReactElement;
  size?: 'small' | 'medium';
  alignTop?: boolean;
};

export default function CheckboxController({
  control,
  errors,
  name,
  label,
  checked,
  size = 'medium',
  alignTop = false,
  ...props
}: Props & CheckboxProps) {
  const {
    field: { value, ref, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue: checked,
  });

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox size={size} {...props} {...inputProps} checked={!!value} inputRef={ref} />
        }
        label={label}
        css={[size === 'small' ? tw`text-sm` : tw`text-base`, alignTop && tw`items-start`]}
      />
      {!!get(errors, name) && <FormHelperText error>{get(errors, name)?.message}</FormHelperText>}
    </>
  );
}
