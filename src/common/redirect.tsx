import type { FC } from 'react';

import { dom } from '#/utils/dom';

export const redirect = (to: string) => {
  const Redirect: FC = () => {
    if (dom) {
      window.location.href = to;
    }

    return null;
  };

  return Redirect;
};

export const redirectStatic = (to: string) => {
  return () => ({
    redirect: {
      destination: to,
      permanent: false
    }
  });
};
