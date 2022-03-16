import type { GetServerSideProps } from 'next';

import { default as Auth } from 'next-auth';
import { default as VK } from 'next-auth/providers/vk';
import { default as Github } from 'next-auth/providers/github';
import { default as Credentials } from 'next-auth/providers/credentials';

import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { database } from '#/api/database';
import { auth } from '#/api/user';

import { getCsrfToken, getProviders, getSession } from 'next-auth/react';

export const handler = Auth({
  adapter: PrismaAdapter(database),
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.JWT_KEY,
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.JWT_KEY
  },
  providers: [
    VK({
      clientId: process.env.PROVIDER_VK_ID,
      clientSecret: process.env.PROVIDER_VK_KEY
    }),
    Github({
      clientId: process.env.PROVIDER_GITHUB_ID,
      clientSecret: process.env.PROVIDER_GITHUB_KEY
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        name: {},
        password: {}
      },
      authorize: auth
    })
  ],
  pages: {
    signIn: '/auth',
    signOut: '/auth/clear',
    error: '/auth/error'
  }
});

export const props: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session !== null) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const csrf = await getCsrfToken(context);
  const rawProviders = await getProviders();

  const providers = Object.values(rawProviders).filter((provider) => {
    return provider.type === 'oauth';
  });

  return {
    props: {
      csrf,
      providers
    }
  };
};
