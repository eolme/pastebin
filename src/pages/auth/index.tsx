import type { NextPage } from 'next';
import type { ClientSafeProvider } from 'next-auth/react';

import { AuthForm } from '#/components/auth';

type AuthLoginProps = {
  csrf: string;
  providers: ClientSafeProvider[];
};

const AuthLogin: NextPage<AuthLoginProps> = ({ csrf, providers }) => {
  return (
    <AuthForm
      csrf={csrf}
      providers={providers}
    />
  );
};

const getServerSideProps = async (context) => {
  return (await import('#/api/auth')).props(context);
};

export { getServerSideProps };
export default AuthLogin;
