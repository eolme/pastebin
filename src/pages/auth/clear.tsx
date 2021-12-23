import type { NextPage } from 'next';

import { signOut } from 'next-auth/react';
import { dom } from '#/utils/dom';
import { useMount } from 'ahooks';

const AuthClear: NextPage = () => {
  useMount(() => {
    if (dom) {
      signOut({
        callbackUrl: '/',
        redirect: true
      });
    }
  });

  return null;
};

export default AuthClear;
