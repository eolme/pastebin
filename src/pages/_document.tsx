import {
  default as Next,
  Html as NextDocument,
  Head as NextHead,
  Main as NextRender,
  NextScript
} from 'next/document';

class Document extends Next {
  render() {
    return (
      <NextDocument
        lang="en"
        translate="no"
        x-ms-format-detection="none"
      >
        <NextHead />
        <body>
          <NextRender />
          <NextScript />
        </body>
      </NextDocument>
    );
  }
}

export default Document;
