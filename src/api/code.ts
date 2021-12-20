import type { GetServerSideProps, NextApiHandler } from 'next';
import type { CodeModel, CodeTable } from '#/api/models/code';

import { connect } from '#/api/supabase';

export const props: GetServerSideProps<CodeModel> = async (context) => {
  if (!context.params || !context.params.name) {
    return {
      notFound: true
    };
  }

  const name = context.params.name.toString();

  const user = 'user' in context.req.headers ?
    Number.parseInt(context.req.headers.user.toString(), 10) :
    0;

  if (!name || name.length !== 32) {
    return {
      notFound: true
    };
  }

  const request = await connect.
    from<CodeTable>('code').
    select('owner, name, lang, code').
    eq('name', name).
    limit(1).
    single();

  if (request.error) {
    return {
      notFound: true
    };
  }

  // Props must be plain object
  const model: CodeModel = {
    read: user !== request.body.owner,
    code: request.body.code,
    lang: request.body.lang,
    name: request.body.name
  };

  return {
    props: model
  };
};

export const handle: NextApiHandler = async (req, res) => {
  if (!req.body) {
    res.writeHead(400);
    res.end();

    return;
  }

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

  // TODO
  const model = {};

  res.writeHead(200);
  res.end(JSON.stringify(model));
};

export const create: NextApiHandler = async (req, res) => {
  // TODO
  const model = {};

  res.writeHead(201);
  res.end(JSON.stringify(model));
};
