import type { FC } from 'react';

import { highlight, languages as loaded } from 'prismjs/components/prism-core';
import { default as CodeEditor } from 'react-simple-code-editor';

import { useEffect, useRef, useState } from 'react';
import { useEventListener, useMemoizedFn, useUpdate } from 'ahooks';

import { useRouter } from 'next/router';

import { languages } from '#/common/languages';
import { dom } from '#/utils/dom';
import { request } from '#/utils/request';

const pickLang = (lang: string) => {
  if (lang in loaded) {
    return loaded[lang];
  }

  return loaded.plain;
};

type EditorProps = {
  read: boolean;
  code: string;
  lang: string;
};

export const Editor: FC<EditorProps> = ({ read, code, lang }) => {
  const router = useRouter();

  const [value, handleValue] = useState(code);
  const update = useUpdate();

  const langRef = useRef(lang);

  langRef.current = lang;

  const codeRef = useRef(value);

  codeRef.current = value;

  useEffect(() => {
    if (!dom) {
      return;
    }

    if (lang in languages && !(lang in loaded)) {
      const load = languages[lang];

      load().then(update);
    }
  }, [lang]);

  const save = useMemoizedFn(async () => {
    if (read) {
      return;
    }

    return request('/api/code', {
      name: router.query.name,
      lang: langRef.current,
      code: codeRef.current
    });
  });

  useEventListener('keydown', (event) => {
    if (event.metaKey && event.code === 'KeyS') {
      event.preventDefault();

      save();

      return false;
    }

    if (event.shiftKey && event.code === 'F12') {
      event.preventDefault();

      save();

      return false;
    }
  });

  const render = useMemoizedFn((str: string) => {
    return highlight(str, pickLang(langRef.current));
  });

  return (
    <CodeEditor
      value={value}
      onValueChange={handleValue}
      highlight={render}
      padding={12}
      tabSize={2}
      insertSpaces={true}
      ignoreTabKey={false}
      textareaId="editor"
      textareaClassName="editor-code"
      preClassName="editor-code"
      className="editor-code"
    />
  );
};
