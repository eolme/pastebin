import type { NextPage } from 'next';
import type { CodeModel } from '#/api/entities/code';

import { useState } from 'react';

import { Editor, Picker } from '#/components';

const Name: NextPage<CodeModel> = ({ code, lang: _lang }) => {
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
