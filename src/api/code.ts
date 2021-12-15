import type { GetServerSideProps, NextApiHandler } from 'next';

import { DI } from './di';
import { nanoid } from 'nanoid';

export const props: GetServerSideProps = async (context) => {
  const name = context.params.name as string;

  if (!name || name.length !== 32) {
    return {
      notFound: true
    };
  }

  const repo = await DI.code();
  const model = await repo.findOrCreate(name, {
    name,
    code: '',
    lang: 'plain'
  });

  return {
    // Props must be plain object
    props: Object.assign({}, model)
  };
};

export const handle: NextApiHandler = async (req, res) => {
  const {
    name = '',
    code = '',
    lang = 'plain'
  } = req.body as Record<string, string>;

  if (name.length !== 32) {
    res.writeHead(400);
    res.end();

    return;
  }

  const repo = await DI.code();
  const model = await repo.update(name, {
    name,
    code,
    lang
  });

  res.writeHead(200);
  res.end(JSON.stringify(model));
};

export const create: NextApiHandler = async (req, res) => {
  const name = nanoid(32);

  const repo = await DI.code();
  const model = await repo.instance({
    name,
    code: '',
    lang: 'plain'
  });

  res.writeHead(201);
  res.end(JSON.stringify(model));
};
