import type { GetServerSideProps, NextPage } from 'next';
import type { Code } from '#/api/models/code';

import { useState } from 'react';

import { Editor, Picker } from '#/components';

const Name: NextPage<Code> = ({ code, lang: _lang }) => {
  const [lang, handleLang] = useState(_lang);

  return (
    <div className="page">
      <Picker
        value={lang}
        onChange={handleLang}
      />
      <Editor
        code={code}
        lang={lang}
      />
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  return await (await import('#/api/code')).props(context);
};

export { getServerSideProps };
export default Name;
