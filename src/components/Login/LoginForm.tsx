import { useRouter } from 'next/router';
import { Button, Grid, InputLabel, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useFormErrors from '@/hooks/useFormErrors';
import InputController from '@/components/Forms/InputController';
import PasswordInputController from '@/components/Forms/PasswordInputController';
import LinkButton from '@/components/LinkButton';
import { useAuth } from '@/providers/AuthProvider';
import { ProfileTypes } from '@/interfaces/user.interface';

import { LoginFields, loginSchema } from './schema';

type LoginProps = {
  onClick: () => void;
};

export default function LoginForm({ onClick }: LoginProps) {
  const router = useRouter();

  const { login, userProfile, isInitializing } = useAuth();

  const {
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<LoginFields>({
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema()) as any,
  });

  const { handleErrors } = useFormErrors<LoginFields>(setError);

  const submitForm = async (data: LoginFields) => {
    try {
      await login(data.email, data.password);

      if (userProfile === ProfileTypes.ADMIN) {
        router.push('/backoffice');
      } else if (userProfile === ProfileTypes.AUTHOR) {
        router.push('/author');
      } else {
        router.push('/');
      }
    } catch (error) {
      handleErrors(error, data);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Grid container spacing={1} my={4}>
        <Grid item xs={12}>
          <Typography variant="h2">Welcome back!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Please enter your credentials to access your account.
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
                disabled={isInitializing}
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
                disabled={isInitializing}
                sx={{ mt: 1 }}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} flexDirection="row" justifyContent="flex-end">
            <Grid item>
              <Button variant="text" tw="normal-case text-sm opacity-75" onClick={onClick}>
                Forgot password?
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth endIcon={<LoginIcon />}>
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <LinkButton href="/signup" variant="text" tw="normal-case text-sm opacity-75">
              Not a member? Sign up
            </LinkButton>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
