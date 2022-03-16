import type { GetServerSideProps } from 'next';

import { database } from '#/api/database';
import { getSession } from 'next-auth/react';
import { validEmail, validString } from '#/utils/validate';

export const props: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
};

type AuthCredentials = {
  name: string | null;
  password: string | null;
};

export const auth = async (credentials: AuthCredentials) => {
  const name = validString(credentials.name);

  if (name === null) {
    return null;
  }

  const password = validString(credentials.password);

  if (password === null) {
    return null;
  }

  const email = validEmail(name);
  const query = email === null ? 'name' : 'email';

  const user = await database.user.upsert({
    create: {
      [query]: name,
      password
    },
    update: {
      [query]: name
    },
    where: {
      [query]: name
    }
  });

  if (user.password === password) {
    return user;
  }

  return null;
};
