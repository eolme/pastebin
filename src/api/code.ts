import type { GetServerSideProps, NextApiHandler } from 'next';

import { database } from '#/api/database';
import { default as cuid } from 'cuid';

export const props: GetServerSideProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true
    };
  }

  const name = context.params.name as string;

  if (!name) {
    return {
      notFound: true
    };
  }

  const model = await database.code.findFirst({
    where: {
      name
    },
    select: {
      ownerId: true,
      name: true,
      code: true,
      lang: true
    }
  });

  if (model === null) {
    return {
      notFound: true
    };
  }

  return {
    // Props must be plain object
    props: Object.assign({}, model)
  };
};

export const handle: NextApiHandler = async (req, res) => {
  if (!req.body) {
    res.writeHead(400);
    res.end();

    return;
  }

  const {
    name = cuid(),
    code = '',
    lang = 'plain'
  } = req.body as Record<string, string>;

  const model = await database.code.upsert({
    create: {
      name,
      code,
      lang
    },
    update: {
      name,
      code,
      lang
    },
    where: {
      name
    }
  });

  res.writeHead(200);
  res.end(JSON.stringify(model));
};

export const create: NextApiHandler = async (req, res) => {
  const model = await database.code.create({
    data: {
      code: '',
      lang: 'plain'
    }
  });

  res.writeHead(201);
  res.end(JSON.stringify(model));
};
