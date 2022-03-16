import type { NextPage } from 'next';
import type { Code } from '@prisma/client';

import { useState } from 'react';

import { Editor, Picker } from '#/components';

const Name: NextPage<Code> = ({ code, lang: _lang }) => {
  const [lang, handleLang] = useState<string>(_lang);

  return (
    <>
      <Picker
        value={lang}
        onChange={handleLang}
      />
      <Editor
        code={code}
        lang={lang}
      />
    </>
  );
};

const getServerSideProps = async (context) => {
  return (await import('#/api/code')).props(context);
};

export { getServerSideProps };
export default Name;
