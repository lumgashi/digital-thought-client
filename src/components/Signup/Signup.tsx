import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, InputLabel, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import useFormErrors from '@/hooks/useFormErrors';
import useSignup from '@/hooks/useSignup';
import InputController from '@/components/Forms/InputController';
import PasswordInputController from '@/components/Forms/PasswordInputController';
import CheckboxController from '@/components/Forms/CheckboxController';
import LinkButton from '@/components/LinkButton';
import EntryLayout from '@/components/Common/EntryLayout';

import { schema, SignupFields } from './schema';

export default function Signup() {
  const router = useRouter();
  const { register, isLoading } = useSignup();

  const {
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<SignupFields>({
    mode: 'onSubmit',
    resolver: yupResolver(schema()) as any,
  });

  const { handleErrors } = useFormErrors<SignupFields>(setError);

  const submitForm = async (data: SignupFields) => {
    try {
      await register(data);
      router.push({
        pathname: '/profile',
        query: {
          from_page: 'signup',
        },
      });
    } catch (error) {
      handleErrors(error, data);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <EntryLayout>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2">Register now</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Become a member of the most widely used blog website.
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={2} mt={1}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <InputLabel>Email</InputLabel>
              </Grid>
              <Grid item xs={12}>
                <InputController
                  control={control}
                  errors={errors}
                  placeholder="john@email.com"
                  name="email"
                  autoFocus
                  disabled={isLoading}
                  sx={{ mt: 1 }}
                />
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <InputLabel>Password</InputLabel>
              </Grid>
              <Grid item xs={12}>
                <PasswordInputController
                  control={control}
                  errors={errors}
                  placeholder="***********"
                  name="password"
                  disabled={isLoading}
                  sx={{ mt: 1 }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <CheckboxController
                name="terms_accepted"
                control={control}
                errors={errors}
                label={
                  <Typography variant="body1">
                    I accept{' '}
                    <NextLink href="/terms" passHref>
                      Terms
                    </NextLink>{' '}
                    and{' '}
                    <NextLink href="/conditions" passHref>
                      Conditions
                    </NextLink>
                  </Typography>
                }
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth endIcon={<HowToRegIcon />}>
              Sign up
            </Button>
          </Grid>
          <Grid item xs={12} mt={1}>
            <LinkButton href="/login" variant="text" tw="normal-case text-sm opacity-75">
              Already a member? Login
            </LinkButton>
          </Grid>
        </Grid>
      </EntryLayout>
    </form>
  );
}
