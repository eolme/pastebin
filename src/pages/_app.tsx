import type { FC } from 'react';
import type { AppProps } from 'next/app';

import { Fragment } from 'react';
import { default as NextApp } from 'next/app';
import { default as NextHead } from 'next/head';

import '#/styles/index.css';

const App: FC<AppProps> = (props) => {
  return (
    <Fragment key="app">
      <NextHead>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no,viewport-fit=cover"
        />
        <meta
          key="telephone"
          name="format-detection"
          content="telephone=no"
        />
        <meta
          key="date"
          name="format-detection"
          content="date=no"
        />
        <meta
          key="address"
          name="format-detection"
          content="address=no"
        />
        <meta
          key="email"
          name="format-detection"
          content="email=no"
        />
        <meta
          key="referrer"
          name="referrer"
          content="no-referrer"
        />
        <meta
          key="robots"
          name="robots"
          content="none"
        />
        <link
          key="canonical"
          rel="canonical"
          href={process.env.NEXT_PUBLIC_HOST}
        />
        <link
          key="alternate-en"
          rel="alternate"
          lang="en"
          href={process.env.NEXT_PUBLIC_HOST}
        />
        <link
          key="alternate-x-default"
          rel="alternate"
          lang="x-default"
          href={process.env.NEXT_PUBLIC_HOST}
        />
      </NextHead>
      <NextApp {...props} />
    </Fragment>
  );
};

export default App;
