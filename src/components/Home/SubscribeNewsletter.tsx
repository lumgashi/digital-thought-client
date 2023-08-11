import { Box, Grid } from '@mui/material';
import { theme as twinTheme } from 'twin.macro';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useColorMode } from '@/providers/ColorModeProvider';
import Headline from '@/components/Common/Base/Headline';
import Text from '@/components/Common/Base/Text';
import InputController from '@/components/Forms/InputController';
import useNewsletterApi from '@/hooks/useNewsletterApi';
import useFormErrors from '@/hooks/useFormErrors';
import LoadingButton from '@/components/LoadingButton';
import CheckboxController from '@/components/Forms/CheckboxController';

import { NewsletterSignupForm, newsletterSignupSchema } from './schema';

export default function SubscribeNewsletter() {
  const { colorMode } = useColorMode();
  const { signupNewsletter, isLoading } = useNewsletterApi();

  const {
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<NewsletterSignupForm>({
    mode: 'onBlur',
    resolver: yupResolver(newsletterSignupSchema()) as any,
  });

  const { handleErrors } = useFormErrors<NewsletterSignupForm>(setError);

  const submitForm = async (data: NewsletterSignupForm) => {
    try {
      await signupNewsletter(data);
    } catch (err) {
      handleErrors(err, data);
    }
  };

  return (
    <Box
      sx={{
        my: 10,
        padding: { xs: 4, md: 8 },
        paddingLeft: { md: 12 },
        background:
          colorMode === 'dark'
            ? (twinTheme`colors.neutral.300` as string)
            : (twinTheme`colors.gray.200` as string),
      }}
      tw="rounded"
    >
      <Grid container spacing={2} maxWidth="lg">
        <Grid item xs={12}>
          <Headline variant="h5" component="h6">
            Sign up for newsletters
          </Headline>
        </Grid>
        <Grid item xs={12}>
          <Text variant="body2" tw="font-medium">
            Subscribe to keep up with fresh news and exciting updates.
          </Text>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(submitForm)}>
            <Grid container mt={2} rowSpacing={2}>
              <Grid item xs={12} md={6}>
                <Box tw="w-full flex flex-row items-start space-x-1">
                  <InputController
                    control={control}
                    errors={errors}
                    label=""
                    placeholder="Enter your email address"
                    name="email"
                    disabled={isLoading}
                    required
                    sx={{ mt: 0 }}
                  />
                  <LoadingButton type="submit" isLoading={isLoading} tw="mt-0.5 rounded py-3 px-6">
                    Send
                  </LoadingButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={6.5}>
                <CheckboxController
                  control={control}
                  errors={errors}
                  name="privacy_policy"
                  label="I agree to my email address being stored and uses to receive weekly newsletter."
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
