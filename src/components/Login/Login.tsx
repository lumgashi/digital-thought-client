import * as React from 'react';

import LoginForm from './LoginForm';
// import ForgotPasswordForm from './ForgotPasswordForm';

type ViewTypes = 'login' | 'forgot' | 'forgot-success';

export default function Login() {
  const [view, setView] = React.useState<ViewTypes>('login');

  return (
    <>
      {view === 'login' && <LoginForm onClick={() => setView('forgot')} />}
      {/* {view === 'forgot' && (
        <ForgotPasswordForm onClick={() => setView('login')} onSuccess={() => setView('login')} />
      )} */}
    </>
  );
}
