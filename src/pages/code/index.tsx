import type { NextPage } from 'next';

import { useState } from 'react';

import { Editor, Picker } from '#/components';

const Code: NextPage = () => {
  const [lang, handleLang] = useState<string>('plain');

  return (
    <>
      <Picker
        value={lang}
        onChange={handleLang}
      />
      <Editor
        code=""
        lang={lang}
      />
    </>
  );
};

export default Code;
