import type { GetServerSideProps } from 'next';

import { DI } from '#/api/di';
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
    throw new Error('name null');
  }

  const password = validString(credentials.password);

  if (password === null) {
    throw new Error('password null');
  }

  const email = validEmail(name);
  const query = email === null ? 'name' : 'email';

  const repo = await DI.user();

  const user = await repo.findOne({
    where: {
      [query]: name
    }
  });

  if (user == null) {
    return repo.createAndSave({
      [query]: name,
      password
    });
  }

  if (user.password === password) {
    return user;
  }

  throw new Error('not found');
};
