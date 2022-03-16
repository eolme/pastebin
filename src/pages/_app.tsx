import type { FC } from 'react';
import type { AppProps } from 'next/app';

import { default as NextApp } from 'next/app';
import { default as NextHead } from 'next/head';
import { SessionProvider } from 'next-auth/react';

import '#/styles/index.css';

const App: FC<AppProps> = (props) => {
  /* eslint-disable react/destructuring-assignment */

  return (
    <SessionProvider session={props.pageProps.session}>
      <NextHead>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no,viewport-fit=cover"
        />
        <meta
          key="telephone"
          name="format-detection"
          content="telephone=no,date=no,address=no,email=no"
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
      <div className="page">
        <NextApp {...props} />
      </div>
    </SessionProvider>
  );
};

export default App;
