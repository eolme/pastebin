import { default as memo } from 'memoize-one';

const queue = (arr: Array<() => Promise<any>>) => {
  let promise = Promise.resolve();
  arr.forEach((chain) => promise = promise.then(chain));
  return promise;
};

export const languages: Readonly<Record<string, () => Promise<any>>> = {
  'abap': memo(() => queue([
    () => import('prismjs/components/prism-abap.min.js')
  ])),
  'abnf': memo(() => queue([
    () => import('prismjs/components/prism-abnf.min.js')
  ])),
  'actionscript': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-actionscript.min.js')
  ])),
  'ada': memo(() => queue([
    () => import('prismjs/components/prism-ada.min.js')
  ])),
  'agda': memo(() => queue([
    () => import('prismjs/components/prism-agda.min.js')
  ])),
  'al': memo(() => queue([
    () => import('prismjs/components/prism-al.min.js')
  ])),
  'antlr4': memo(() => queue([
    () => import('prismjs/components/prism-antlr4.min.js')
  ])),
  'apacheconf': memo(() => queue([
    () => import('prismjs/components/prism-apacheconf.min.js')
  ])),
  'apex': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-sql.min.js'),
    () => import('prismjs/components/prism-apex.min.js')
  ])),
  'apl': memo(() => queue([
    () => import('prismjs/components/prism-apl.min.js')
  ])),
  'applescript': memo(() => queue([
    () => import('prismjs/components/prism-applescript.min.js')
  ])),
  'aql': memo(() => queue([
    () => import('prismjs/components/prism-aql.min.js')
  ])),
  'arduino': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-cpp.min.js'),
    () => import('prismjs/components/prism-arduino.min.js')
  ])),
  'arff': memo(() => queue([
    () => import('prismjs/components/prism-arff.min.js')
  ])),
  'asciidoc': memo(() => queue([
    () => import('prismjs/components/prism-asciidoc.min.js')
  ])),
  'asm6502': memo(() => queue([
    () => import('prismjs/components/prism-asm6502.min.js')
  ])),
  'asmatmel': memo(() => queue([
    () => import('prismjs/components/prism-asmatmel.min.js')
  ])),
  'aspnet': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-csharp.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-aspnet.min.js')
  ])),
  'autohotkey': memo(() => queue([
    () => import('prismjs/components/prism-autohotkey.min.js')
  ])),
  'autoit': memo(() => queue([
    () => import('prismjs/components/prism-autoit.min.js')
  ])),
  'avisynth': memo(() => queue([
    () => import('prismjs/components/prism-avisynth.min.js')
  ])),
  'avro-idl': memo(() => queue([
    () => import('prismjs/components/prism-avro-idl.min.js')
  ])),
  'bash': memo(() => queue([
    () => import('prismjs/components/prism-bash.min.js')
  ])),
  'basic': memo(() => queue([
    () => import('prismjs/components/prism-basic.min.js')
  ])),
  'batch': memo(() => queue([
    () => import('prismjs/components/prism-batch.min.js')
  ])),
  'bicep': memo(() => queue([
    () => import('prismjs/components/prism-bicep.min.js')
  ])),
  'birb': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-birb.min.js')
  ])),
  'bison': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-bison.min.js')
  ])),
  'bnf': memo(() => queue([
    () => import('prismjs/components/prism-bnf.min.js')
  ])),
  'brainfuck': memo(() => queue([
    () => import('prismjs/components/prism-brainfuck.min.js')
  ])),
  'brightscript': memo(() => queue([
    () => import('prismjs/components/prism-brightscript.min.js')
  ])),
  'bro': memo(() => queue([
    () => import('prismjs/components/prism-bro.min.js')
  ])),
  'bsl': memo(() => queue([
    () => import('prismjs/components/prism-bsl.min.js')
  ])),
  'c': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js')
  ])),
  'cfscript': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-cfscript.min.js')
  ])),
  'chaiscript': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-cpp.min.js'),
    () => import('prismjs/components/prism-chaiscript.min.js')
  ])),
  'cil': memo(() => queue([
    () => import('prismjs/components/prism-cil.min.js')
  ])),
  'clike': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js')
  ])),
  'clojure': memo(() => queue([
    () => import('prismjs/components/prism-clojure.min.js')
  ])),
  'cmake': memo(() => queue([
    () => import('prismjs/components/prism-cmake.min.js')
  ])),
  'cobol': memo(() => queue([
    () => import('prismjs/components/prism-cobol.min.js')
  ])),
  'coffeescript': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-coffeescript.min.js')
  ])),
  'concurnas': memo(() => queue([
    () => import('prismjs/components/prism-concurnas.min.js')
  ])),
  'coq': memo(() => queue([
    () => import('prismjs/components/prism-coq.min.js')
  ])),
  'core': memo(() => queue([
    () => import('prismjs/components/prism-core.min.js')
  ])),
  'cpp': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-cpp.min.js')
  ])),
  'crystal': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-ruby.min.js'),
    () => import('prismjs/components/prism-crystal.min.js')
  ])),
  'csharp': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-csharp.min.js')
  ])),
  'cshtml': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-csharp.min.js'),
    () => import('prismjs/components/prism-cshtml.min.js')
  ])),
  'csp': memo(() => queue([
    () => import('prismjs/components/prism-csp.min.js')
  ])),
  'css-extras': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-css.min.js'),
    () => import('prismjs/components/prism-css-extras.min.js')
  ])),
  'css': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-css.min.js')
  ])),
  'csv': memo(() => queue([
    () => import('prismjs/components/prism-csv.min.js')
  ])),
  'cypher': memo(() => queue([
    () => import('prismjs/components/prism-cypher.min.js')
  ])),
  'd': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-d.min.js')
  ])),
  'dart': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-dart.min.js')
  ])),
  'dataweave': memo(() => queue([
    () => import('prismjs/components/prism-dataweave.min.js')
  ])),
  'dax': memo(() => queue([
    () => import('prismjs/components/prism-dax.min.js')
  ])),
  'dhall': memo(() => queue([
    () => import('prismjs/components/prism-dhall.min.js')
  ])),
  'diff': memo(() => queue([
    () => import('prismjs/components/prism-diff.min.js')
  ])),
  'django': memo(() => queue([
    () => import('prismjs/components/prism-django.min.js')
  ])),
  'dns-zone-file': memo(() => queue([
    () => import('prismjs/components/prism-dns-zone-file.min.js')
  ])),
  'docker': memo(() => queue([
    () => import('prismjs/components/prism-docker.min.js')
  ])),
  'dot': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-dot.min.js')
  ])),
  'ebnf': memo(() => queue([
    () => import('prismjs/components/prism-ebnf.min.js')
  ])),
  'editorconfig': memo(() => queue([
    () => import('prismjs/components/prism-editorconfig.min.js')
  ])),
  'eiffel': memo(() => queue([
    () => import('prismjs/components/prism-eiffel.min.js')
  ])),
  'ejs': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-ejs.min.js')
  ])),
  'elixir': memo(() => queue([
    () => import('prismjs/components/prism-elixir.min.js')
  ])),
  'elm': memo(() => queue([
    () => import('prismjs/components/prism-elm.min.js')
  ])),
  'erb': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-ruby.min.js'),
    () => import('prismjs/components/prism-erb.min.js')
  ])),
  'erlang': memo(() => queue([
    () => import('prismjs/components/prism-erlang.min.js')
  ])),
  'etlua': memo(() => queue([
    () => import('prismjs/components/prism-lua.min.js'),
    () => import('prismjs/components/prism-etlua.min.js')
  ])),
  'excel-formula': memo(() => queue([
    () => import('prismjs/components/prism-excel-formula.min.js')
  ])),
  'factor': memo(() => queue([
    () => import('prismjs/components/prism-factor.min.js')
  ])),
  'false': memo(() => queue([
    () => import('prismjs/components/prism-false.min.js')
  ])),
  'firestore-security-rules': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-firestore-security-rules.min.js')
  ])),
  'flow': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-flow.min.js')
  ])),
  'fortran': memo(() => queue([
    () => import('prismjs/components/prism-fortran.min.js')
  ])),
  'fsharp': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-fsharp.min.js')
  ])),
  'ftl': memo(() => queue([
    () => import('prismjs/components/prism-ftl.min.js')
  ])),
  'gap': memo(() => queue([
    () => import('prismjs/components/prism-gap.min.js')
  ])),
  'gdscript': memo(() => queue([
    () => import('prismjs/components/prism-gdscript.min.js')
  ])),
  'gedcom': memo(() => queue([
    () => import('prismjs/components/prism-gedcom.min.js')
  ])),
  'gherkin': memo(() => queue([
    () => import('prismjs/components/prism-gherkin.min.js')
  ])),
  'git': memo(() => queue([
    () => import('prismjs/components/prism-git.min.js')
  ])),
  'glsl': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-glsl.min.js')
  ])),
  'gml': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-gml.min.js')
  ])),
  'gn': memo(() => queue([
    () => import('prismjs/components/prism-gn.min.js')
  ])),
  'go-module': memo(() => queue([
    () => import('prismjs/components/prism-go-module.min.js')
  ])),
  'go': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-go.min.js')
  ])),
  'graphql': memo(() => queue([
    () => import('prismjs/components/prism-yaml.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-markdown.min.js'),
    () => import('prismjs/components/prism-graphql.min.js')
  ])),
  'groovy': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-groovy.min.js')
  ])),
  'haml': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-ruby.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-haml.min.js')
  ])),
  'handlebars': memo(() => queue([
    () => import('prismjs/components/prism-handlebars.min.js')
  ])),
  'haskell': memo(() => queue([
    () => import('prismjs/components/prism-haskell.min.js')
  ])),
  'haxe': memo(() => queue([
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-haxe.min.js')
  ])),
  'hcl': memo(() => queue([
    () => import('prismjs/components/prism-hcl.min.js')
  ])),
  'hlsl': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-hlsl.min.js')
  ])),
  'hoon': memo(() => queue([
    () => import('prismjs/components/prism-hoon.min.js')
  ])),
  'hpkp': memo(() => queue([
    () => import('prismjs/components/prism-hpkp.min.js')
  ])),
  'hsts': memo(() => queue([
    () => import('prismjs/components/prism-hsts.min.js')
  ])),
  'http': memo(() => queue([
    () => import('prismjs/components/prism-uri.min.js'),
    () => import('prismjs/components/prism-csp.min.js'),
    () => import('prismjs/components/prism-hpkp.min.js'),
    () => import('prismjs/components/prism-hsts.min.js'),
    () => import('prismjs/components/prism-http.min.js')
  ])),
  'ichigojam': memo(() => queue([
    () => import('prismjs/components/prism-ichigojam.min.js')
  ])),
  'icon': memo(() => queue([
    () => import('prismjs/components/prism-icon.min.js')
  ])),
  'icu-message-format': memo(() => queue([
    () => import('prismjs/components/prism-icu-message-format.min.js')
  ])),
  'idris': memo(() => queue([
    () => import('prismjs/components/prism-haskell.min.js'),
    () => import('prismjs/components/prism-idris.min.js')
  ])),
  'iecst': memo(() => queue([
    () => import('prismjs/components/prism-iecst.min.js')
  ])),
  'ignore': memo(() => queue([
    () => import('prismjs/components/prism-ignore.min.js')
  ])),
  'inform7': memo(() => queue([
    () => import('prismjs/components/prism-inform7.min.js')
  ])),
  'ini': memo(() => queue([
    () => import('prismjs/components/prism-ini.min.js')
  ])),
  'io': memo(() => queue([
    () => import('prismjs/components/prism-io.min.js')
  ])),
  'j': memo(() => queue([
    () => import('prismjs/components/prism-j.min.js')
  ])),
  'java': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-java.min.js')
  ])),
  'javadoc': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-java.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javadoclike.min.js'),
    () => import('prismjs/components/prism-javadoc.min.js')
  ])),
  'javadoclike': memo(() => queue([
    () => import('prismjs/components/prism-javadoclike.min.js')
  ])),
  'javascript': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js')
  ])),
  'javastacktrace': memo(() => queue([
    () => import('prismjs/components/prism-javastacktrace.min.js')
  ])),
  'jexl': memo(() => queue([
    () => import('prismjs/components/prism-jexl.min.js')
  ])),
  'jolie': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-jolie.min.js')
  ])),
  'jq': memo(() => queue([
    () => import('prismjs/components/prism-jq.min.js')
  ])),
  'js-extras': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-js-extras.min.js')
  ])),
  'js-templates': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-js-templates.min.js')
  ])),
  'jsdoc': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-typescript.min.js'),
    () => import('prismjs/components/prism-javadoclike.min.js'),
    () => import('prismjs/components/prism-jsdoc.min.js')
  ])),
  'json': memo(() => queue([
    () => import('prismjs/components/prism-json.min.js')
  ])),
  'json5': memo(() => queue([
    () => import('prismjs/components/prism-json.min.js'),
    () => import('prismjs/components/prism-json5.min.js')
  ])),
  'jsonp': memo(() => queue([
    () => import('prismjs/components/prism-json.min.js'),
    () => import('prismjs/components/prism-jsonp.min.js')
  ])),
  'jsstacktrace': memo(() => queue([
    () => import('prismjs/components/prism-jsstacktrace.min.js')
  ])),
  'jsx': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-jsx.min.js')
  ])),
  'julia': memo(() => queue([
    () => import('prismjs/components/prism-julia.min.js')
  ])),
  'keepalived': memo(() => queue([
    () => import('prismjs/components/prism-keepalived.min.js')
  ])),
  'keyman': memo(() => queue([
    () => import('prismjs/components/prism-keyman.min.js')
  ])),
  'kotlin': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-kotlin.min.js')
  ])),
  'kumir': memo(() => queue([
    () => import('prismjs/components/prism-kumir.min.js')
  ])),
  'kusto': memo(() => queue([
    () => import('prismjs/components/prism-kusto.min.js')
  ])),
  'latex': memo(() => queue([
    () => import('prismjs/components/prism-latex.min.js')
  ])),
  'latte': memo(() => queue([
    () => import('prismjs/components/prism-php.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-latte.min.js')
  ])),
  'less': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-css.min.js'),
    () => import('prismjs/components/prism-less.min.js')
  ])),
  'lilypond': memo(() => queue([
    () => import('prismjs/components/prism-scheme.min.js'),
    () => import('prismjs/components/prism-lilypond.min.js')
  ])),
  'liquid': memo(() => queue([
    () => import('prismjs/components/prism-liquid.min.js')
  ])),
  'lisp': memo(() => queue([
    () => import('prismjs/components/prism-lisp.min.js')
  ])),
  'livescript': memo(() => queue([
    () => import('prismjs/components/prism-livescript.min.js')
  ])),
  'llvm': memo(() => queue([
    () => import('prismjs/components/prism-llvm.min.js')
  ])),
  'log': memo(() => queue([
    () => import('prismjs/components/prism-javastacktrace.min.js'),
    () => import('prismjs/components/prism-log.min.js')
  ])),
  'lua': memo(() => queue([
    () => import('prismjs/components/prism-lua.min.js')
  ])),
  'magma': memo(() => queue([
    () => import('prismjs/components/prism-magma.min.js')
  ])),
  'makefile': memo(() => queue([
    () => import('prismjs/components/prism-makefile.min.js')
  ])),
  'markdown': memo(() => queue([
    () => import('prismjs/components/prism-yaml.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-markdown.min.js')
  ])),
  'markup-templating': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-markup-templating.min.js')
  ])),
  'markup': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js')
  ])),
  'matlab': memo(() => queue([
    () => import('prismjs/components/prism-matlab.min.js')
  ])),
  'maxscript': memo(() => queue([
    () => import('prismjs/components/prism-maxscript.min.js')
  ])),
  'mel': memo(() => queue([
    () => import('prismjs/components/prism-mel.min.js')
  ])),
  'mermaid': memo(() => queue([
    () => import('prismjs/components/prism-mermaid.min.js')
  ])),
  'mizar': memo(() => queue([
    () => import('prismjs/components/prism-mizar.min.js')
  ])),
  'mongodb': memo(() => queue([
    () => import('prismjs/components/prism-mongodb.min.js')
  ])),
  'monkey': memo(() => queue([
    () => import('prismjs/components/prism-monkey.min.js')
  ])),
  'moonscript': memo(() => queue([
    () => import('prismjs/components/prism-moonscript.min.js')
  ])),
  'n1ql': memo(() => queue([
    () => import('prismjs/components/prism-n1ql.min.js')
  ])),
  'n4js': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-n4js.min.js')
  ])),
  'nand2tetris-hdl': memo(() => queue([
    () => import('prismjs/components/prism-nand2tetris-hdl.min.js')
  ])),
  'naniscript': memo(() => queue([
    () => import('prismjs/components/prism-naniscript.min.js')
  ])),
  'nasm': memo(() => queue([
    () => import('prismjs/components/prism-nasm.min.js')
  ])),
  'neon': memo(() => queue([
    () => import('prismjs/components/prism-neon.min.js')
  ])),
  'nevod': memo(() => queue([
    () => import('prismjs/components/prism-nevod.min.js')
  ])),
  'nginx': memo(() => queue([
    () => import('prismjs/components/prism-nginx.min.js')
  ])),
  'nim': memo(() => queue([
    () => import('prismjs/components/prism-nim.min.js')
  ])),
  'nix': memo(() => queue([
    () => import('prismjs/components/prism-nix.min.js')
  ])),
  'nsis': memo(() => queue([
    () => import('prismjs/components/prism-nsis.min.js')
  ])),
  'objectivec': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-objectivec.min.js')
  ])),
  'ocaml': memo(() => queue([
    () => import('prismjs/components/prism-ocaml.min.js')
  ])),
  'opencl': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-cpp.min.js'),
    () => import('prismjs/components/prism-opencl.min.js')
  ])),
  'openqasm': memo(() => queue([
    () => import('prismjs/components/prism-openqasm.min.js')
  ])),
  'oz': memo(() => queue([
    () => import('prismjs/components/prism-oz.min.js')
  ])),
  'parigp': memo(() => queue([
    () => import('prismjs/components/prism-parigp.min.js')
  ])),
  'parser': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-parser.min.js')
  ])),
  'pascal': memo(() => queue([
    () => import('prismjs/components/prism-pascal.min.js')
  ])),
  'pascaligo': memo(() => queue([
    () => import('prismjs/components/prism-pascaligo.min.js')
  ])),
  'pcaxis': memo(() => queue([
    () => import('prismjs/components/prism-pcaxis.min.js')
  ])),
  'perl': memo(() => queue([
    () => import('prismjs/components/prism-perl.min.js')
  ])),
  'php-extras': memo(() => queue([
    () => import('prismjs/components/prism-php-extras.min.js')
  ])),
  'php': memo(() => queue([
    () => import('prismjs/components/prism-php.min.js')
  ])),
  'phpdoc': memo(() => queue([
    () => import('prismjs/components/prism-javadoclike.min.js'),
    () => import('prismjs/components/prism-phpdoc.min.js')
  ])),
  'plsql': memo(() => queue([
    () => import('prismjs/components/prism-sql.min.js'),
    () => import('prismjs/components/prism-plsql.min.js')
  ])),
  'powerquery': memo(() => queue([
    () => import('prismjs/components/prism-powerquery.min.js')
  ])),
  'powershell': memo(() => queue([
    () => import('prismjs/components/prism-powershell.min.js')
  ])),
  'processing': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-processing.min.js')
  ])),
  'prolog': memo(() => queue([
    () => import('prismjs/components/prism-prolog.min.js')
  ])),
  'promql': memo(() => queue([
    () => import('prismjs/components/prism-promql.min.js')
  ])),
  'properties': memo(() => queue([
    () => import('prismjs/components/prism-properties.min.js')
  ])),
  'protobuf': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-protobuf.min.js')
  ])),
  'psl': memo(() => queue([
    () => import('prismjs/components/prism-psl.min.js')
  ])),
  'pug': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-pug.min.js')
  ])),
  'puppet': memo(() => queue([
    () => import('prismjs/components/prism-puppet.min.js')
  ])),
  'pure': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-c.min.js'),
    () => import('prismjs/components/prism-pure.min.js')
  ])),
  'purebasic': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-purebasic.min.js')
  ])),
  'purescript': memo(() => queue([
    () => import('prismjs/components/prism-haskell.min.js'),
    () => import('prismjs/components/prism-purescript.min.js')
  ])),
  'python': memo(() => queue([
    () => import('prismjs/components/prism-python.min.js')
  ])),
  'q': memo(() => queue([
    () => import('prismjs/components/prism-q.min.js')
  ])),
  'qml': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-qml.min.js')
  ])),
  'qore': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-qore.min.js')
  ])),
  'qsharp': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-qsharp.min.js')
  ])),
  'r': memo(() => queue([
    () => import('prismjs/components/prism-r.min.js')
  ])),
  'racket': memo(() => queue([
    () => import('prismjs/components/prism-scheme.min.js'),
    () => import('prismjs/components/prism-racket.min.js')
  ])),
  'reason': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-reason.min.js')
  ])),
  'regex': memo(() => queue([
    () => import('prismjs/components/prism-regex.min.js')
  ])),
  'rego': memo(() => queue([
    () => import('prismjs/components/prism-rego.min.js')
  ])),
  'renpy': memo(() => queue([
    () => import('prismjs/components/prism-renpy.min.js')
  ])),
  'rest': memo(() => queue([
    () => import('prismjs/components/prism-rest.min.js')
  ])),
  'rip': memo(() => queue([
    () => import('prismjs/components/prism-rip.min.js')
  ])),
  'roboconf': memo(() => queue([
    () => import('prismjs/components/prism-roboconf.min.js')
  ])),
  'robotframework': memo(() => queue([
    () => import('prismjs/components/prism-robotframework.min.js')
  ])),
  'ruby': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-ruby.min.js')
  ])),
  'rust': memo(() => queue([
    () => import('prismjs/components/prism-rust.min.js')
  ])),
  'sas': memo(() => queue([
    () => import('prismjs/components/prism-sql.min.js'),
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-groovy.min.js'),
    () => import('prismjs/components/prism-lua.min.js'),
    () => import('prismjs/components/prism-sas.min.js')
  ])),
  'sass': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-css.min.js'),
    () => import('prismjs/components/prism-sass.min.js')
  ])),
  'scala': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-java.min.js'),
    () => import('prismjs/components/prism-scala.min.js')
  ])),
  'scheme': memo(() => queue([
    () => import('prismjs/components/prism-scheme.min.js')
  ])),
  'scss': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-css.min.js'),
    () => import('prismjs/components/prism-scss.min.js')
  ])),
  'shell-session': memo(() => queue([
    () => import('prismjs/components/prism-bash.min.js'),
    () => import('prismjs/components/prism-shell-session.min.js')
  ])),
  'smali': memo(() => queue([
    () => import('prismjs/components/prism-smali.min.js')
  ])),
  'smalltalk': memo(() => queue([
    () => import('prismjs/components/prism-smalltalk.min.js')
  ])),
  'smarty': memo(() => queue([
    () => import('prismjs/components/prism-php.min.js'),
    () => import('prismjs/components/prism-smarty.min.js')
  ])),
  'sml': memo(() => queue([
    () => import('prismjs/components/prism-sml.min.js')
  ])),
  'solidity': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-solidity.min.js')
  ])),
  'solution-file': memo(() => queue([
    () => import('prismjs/components/prism-solution-file.min.js')
  ])),
  'soy': memo(() => queue([
    () => import('prismjs/components/prism-soy.min.js')
  ])),
  'sparql': memo(() => queue([
    () => import('prismjs/components/prism-turtle.min.js'),
    () => import('prismjs/components/prism-sparql.min.js')
  ])),
  'splunk-spl': memo(() => queue([
    () => import('prismjs/components/prism-splunk-spl.min.js')
  ])),
  'sqf': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-sqf.min.js')
  ])),
  'sql': memo(() => queue([
    () => import('prismjs/components/prism-sql.min.js')
  ])),
  'squirrel': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-squirrel.min.js')
  ])),
  'stan': memo(() => queue([
    () => import('prismjs/components/prism-stan.min.js')
  ])),
  'stylus': memo(() => queue([
    () => import('prismjs/components/prism-stylus.min.js')
  ])),
  'swift': memo(() => queue([
    () => import('prismjs/components/prism-swift.min.js')
  ])),
  'systemd': memo(() => queue([
    () => import('prismjs/components/prism-systemd.min.js')
  ])),
  't4-cs': memo(() => queue([
    () => import('prismjs/components/prism-t4-cs.min.js')
  ])),
  't4-templating': memo(() => queue([
    () => import('prismjs/components/prism-t4-templating.min.js')
  ])),
  't4-vb': memo(() => queue([
    () => import('prismjs/components/prism-t4-vb.min.js')
  ])),
  'tap': memo(() => queue([
    () => import('prismjs/components/prism-yaml.min.js'),
    () => import('prismjs/components/prism-tap.min.js')
  ])),
  'tcl': memo(() => queue([
    () => import('prismjs/components/prism-tcl.min.js')
  ])),
  'textile': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-css.min.js'),
    () => import('prismjs/components/prism-textile.min.js')
  ])),
  'toml': memo(() => queue([
    () => import('prismjs/components/prism-toml.min.js')
  ])),
  'tremor': memo(() => queue([
    () => import('prismjs/components/prism-tremor.min.js')
  ])),
  'tsx': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-typescript.min.js'),
    () => import('prismjs/components/prism-jsx.min.js'),
    () => import('prismjs/components/prism-tsx.min.js')
  ])),
  'tt2': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-tt2.min.js')
  ])),
  'turtle': memo(() => queue([
    () => import('prismjs/components/prism-turtle.min.js')
  ])),
  'twig': memo(() => queue([
    () => import('prismjs/components/prism-twig.min.js')
  ])),
  'typescript': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-javascript.min.js'),
    () => import('prismjs/components/prism-typescript.min.js')
  ])),
  'typoscript': memo(() => queue([
    () => import('prismjs/components/prism-typoscript.min.js')
  ])),
  'unrealscript': memo(() => queue([
    () => import('prismjs/components/prism-unrealscript.min.js')
  ])),
  'uorazor': memo(() => queue([
    () => import('prismjs/components/prism-uorazor.min.js')
  ])),
  'uri': memo(() => queue([
    () => import('prismjs/components/prism-uri.min.js')
  ])),
  'v': memo(() => queue([
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-v.min.js')
  ])),
  'vala': memo(() => queue([
    () => import('prismjs/components/prism-regex.min.js'),
    () => import('prismjs/components/prism-clike.min.js'),
    () => import('prismjs/components/prism-vala.min.js')
  ])),
  'vbnet': memo(() => queue([
    () => import('prismjs/components/prism-basic.min.js'),
    () => import('prismjs/components/prism-vbnet.min.js')
  ])),
  'velocity': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-velocity.min.js')
  ])),
  'verilog': memo(() => queue([
    () => import('prismjs/components/prism-verilog.min.js')
  ])),
  'vhdl': memo(() => queue([
    () => import('prismjs/components/prism-vhdl.min.js')
  ])),
  'vim': memo(() => queue([
    () => import('prismjs/components/prism-vim.min.js')
  ])),
  'visual-basic': memo(() => queue([
    () => import('prismjs/components/prism-visual-basic.min.js')
  ])),
  'warpscript': memo(() => queue([
    () => import('prismjs/components/prism-warpscript.min.js')
  ])),
  'wasm': memo(() => queue([
    () => import('prismjs/components/prism-wasm.min.js')
  ])),
  'web-idl': memo(() => queue([
    () => import('prismjs/components/prism-web-idl.min.js')
  ])),
  'wiki': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-wiki.min.js')
  ])),
  'wolfram': memo(() => queue([
    () => import('prismjs/components/prism-wolfram.min.js')
  ])),
  'wren': memo(() => queue([
    () => import('prismjs/components/prism-wren.min.js')
  ])),
  'xeora': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-xeora.min.js')
  ])),
  'xml-doc': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-xml-doc.min.js')
  ])),
  'xojo': memo(() => queue([
    () => import('prismjs/components/prism-xojo.min.js')
  ])),
  'xquery': memo(() => queue([
    () => import('prismjs/components/prism-markup.min.js'),
    () => import('prismjs/components/prism-xquery.min.js')
  ])),
  'yaml': memo(() => queue([
    () => import('prismjs/components/prism-yaml.min.js')
  ])),
  'yang': memo(() => queue([
    () => import('prismjs/components/prism-yang.min.js')
  ])),
  'zig': memo(() => queue([
    () => import('prismjs/components/prism-zig.min.js')
  ]))
};

export const options = [
  {
    'name': 'plain',
    'value': 'plain'
  },
  {
    'name': 'abap',
    'value': 'abap'
  },
  {
    'name': 'abnf',
    'value': 'abnf'
  },
  {
    'name': 'actionscript',
    'value': 'actionscript'
  },
  {
    'name': 'ada',
    'value': 'ada'
  },
  {
    'name': 'agda',
    'value': 'agda'
  },
  {
    'name': 'al',
    'value': 'al'
  },
  {
    'name': 'antlr4',
    'value': 'antlr4'
  },
  {
    'name': 'apacheconf',
    'value': 'apacheconf'
  },
  {
    'name': 'apex',
    'value': 'apex'
  },
  {
    'name': 'apl',
    'value': 'apl'
  },
  {
    'name': 'applescript',
    'value': 'applescript'
  },
  {
    'name': 'aql',
    'value': 'aql'
  },
  {
    'name': 'arduino',
    'value': 'arduino'
  },
  {
    'name': 'arff',
    'value': 'arff'
  },
  {
    'name': 'asciidoc',
    'value': 'asciidoc'
  },
  {
    'name': 'asm6502',
    'value': 'asm6502'
  },
  {
    'name': 'asmatmel',
    'value': 'asmatmel'
  },
  {
    'name': 'aspnet',
    'value': 'aspnet'
  },
  {
    'name': 'autohotkey',
    'value': 'autohotkey'
  },
  {
    'name': 'autoit',
    'value': 'autoit'
  },
  {
    'name': 'avisynth',
    'value': 'avisynth'
  },
  {
    'name': 'avro-idl',
    'value': 'avro-idl'
  },
  {
    'name': 'bash',
    'value': 'bash'
  },
  {
    'name': 'basic',
    'value': 'basic'
  },
  {
    'name': 'batch',
    'value': 'batch'
  },
  {
    'name': 'bicep',
    'value': 'bicep'
  },
  {
    'name': 'birb',
    'value': 'birb'
  },
  {
    'name': 'bison',
    'value': 'bison'
  },
  {
    'name': 'bnf',
    'value': 'bnf'
  },
  {
    'name': 'brainfuck',
    'value': 'brainfuck'
  },
  {
    'name': 'brightscript',
    'value': 'brightscript'
  },
  {
    'name': 'bro',
    'value': 'bro'
  },
  {
    'name': 'bsl',
    'value': 'bsl'
  },
  {
    'name': 'c',
    'value': 'c'
  },
  {
    'name': 'cfscript',
    'value': 'cfscript'
  },
  {
    'name': 'chaiscript',
    'value': 'chaiscript'
  },
  {
    'name': 'cil',
    'value': 'cil'
  },
  {
    'name': 'clike',
    'value': 'clike'
  },
  {
    'name': 'clojure',
    'value': 'clojure'
  },
  {
    'name': 'cmake',
    'value': 'cmake'
  },
  {
    'name': 'cobol',
    'value': 'cobol'
  },
  {
    'name': 'coffeescript',
    'value': 'coffeescript'
  },
  {
    'name': 'concurnas',
    'value': 'concurnas'
  },
  {
    'name': 'coq',
    'value': 'coq'
  },
  {
    'name': 'core',
    'value': 'core'
  },
  {
    'name': 'cpp',
    'value': 'cpp'
  },
  {
    'name': 'crystal',
    'value': 'crystal'
  },
  {
    'name': 'csharp',
    'value': 'csharp'
  },
  {
    'name': 'cshtml',
    'value': 'cshtml'
  },
  {
    'name': 'csp',
    'value': 'csp'
  },
  {
    'name': 'css-extras',
    'value': 'css-extras'
  },
  {
    'name': 'css',
    'value': 'css'
  },
  {
    'name': 'csv',
    'value': 'csv'
  },
  {
    'name': 'cypher',
    'value': 'cypher'
  },
  {
    'name': 'd',
    'value': 'd'
  },
  {
    'name': 'dart',
    'value': 'dart'
  },
  {
    'name': 'dataweave',
    'value': 'dataweave'
  },
  {
    'name': 'dax',
    'value': 'dax'
  },
  {
    'name': 'dhall',
    'value': 'dhall'
  },
  {
    'name': 'diff',
    'value': 'diff'
  },
  {
    'name': 'django',
    'value': 'django'
  },
  {
    'name': 'dns-zone-file',
    'value': 'dns-zone-file'
  },
  {
    'name': 'docker',
    'value': 'docker'
  },
  {
    'name': 'dot',
    'value': 'dot'
  },
  {
    'name': 'ebnf',
    'value': 'ebnf'
  },
  {
    'name': 'editorconfig',
    'value': 'editorconfig'
  },
  {
    'name': 'eiffel',
    'value': 'eiffel'
  },
  {
    'name': 'ejs',
    'value': 'ejs'
  },
  {
    'name': 'elixir',
    'value': 'elixir'
  },
  {
    'name': 'elm',
    'value': 'elm'
  },
  {
    'name': 'erb',
    'value': 'erb'
  },
  {
    'name': 'erlang',
    'value': 'erlang'
  },
  {
    'name': 'etlua',
    'value': 'etlua'
  },
  {
    'name': 'excel-formula',
    'value': 'excel-formula'
  },
  {
    'name': 'factor',
    'value': 'factor'
  },
  {
    'name': 'false',
    'value': 'false'
  },
  {
    'name': 'firestore-security-rules',
    'value': 'firestore-security-rules'
  },
  {
    'name': 'flow',
    'value': 'flow'
  },
  {
    'name': 'fortran',
    'value': 'fortran'
  },
  {
    'name': 'fsharp',
    'value': 'fsharp'
  },
  {
    'name': 'ftl',
    'value': 'ftl'
  },
  {
    'name': 'gap',
    'value': 'gap'
  },
  {
    'name': 'gdscript',
    'value': 'gdscript'
  },
  {
    'name': 'gedcom',
    'value': 'gedcom'
  },
  {
    'name': 'gherkin',
    'value': 'gherkin'
  },
  {
    'name': 'git',
    'value': 'git'
  },
  {
    'name': 'glsl',
    'value': 'glsl'
  },
  {
    'name': 'gml',
    'value': 'gml'
  },
  {
    'name': 'gn',
    'value': 'gn'
  },
  {
    'name': 'go-module',
    'value': 'go-module'
  },
  {
    'name': 'go',
    'value': 'go'
  },
  {
    'name': 'graphql',
    'value': 'graphql'
  },
  {
    'name': 'groovy',
    'value': 'groovy'
  },
  {
    'name': 'haml',
    'value': 'haml'
  },
  {
    'name': 'handlebars',
    'value': 'handlebars'
  },
  {
    'name': 'haskell',
    'value': 'haskell'
  },
  {
    'name': 'haxe',
    'value': 'haxe'
  },
  {
    'name': 'hcl',
    'value': 'hcl'
  },
  {
    'name': 'hlsl',
    'value': 'hlsl'
  },
  {
    'name': 'hoon',
    'value': 'hoon'
  },
  {
    'name': 'hpkp',
    'value': 'hpkp'
  },
  {
    'name': 'hsts',
    'value': 'hsts'
  },
  {
    'name': 'http',
    'value': 'http'
  },
  {
    'name': 'ichigojam',
    'value': 'ichigojam'
  },
  {
    'name': 'icon',
    'value': 'icon'
  },
  {
    'name': 'icu-message-format',
    'value': 'icu-message-format'
  },
  {
    'name': 'idris',
    'value': 'idris'
  },
  {
    'name': 'iecst',
    'value': 'iecst'
  },
  {
    'name': 'ignore',
    'value': 'ignore'
  },
  {
    'name': 'inform7',
    'value': 'inform7'
  },
  {
    'name': 'ini',
    'value': 'ini'
  },
  {
    'name': 'io',
    'value': 'io'
  },
  {
    'name': 'j',
    'value': 'j'
  },
  {
    'name': 'java',
    'value': 'java'
  },
  {
    'name': 'javadoc',
    'value': 'javadoc'
  },
  {
    'name': 'javadoclike',
    'value': 'javadoclike'
  },
  {
    'name': 'javascript',
    'value': 'javascript'
  },
  {
    'name': 'javastacktrace',
    'value': 'javastacktrace'
  },
  {
    'name': 'jexl',
    'value': 'jexl'
  },
  {
    'name': 'jolie',
    'value': 'jolie'
  },
  {
    'name': 'jq',
    'value': 'jq'
  },
  {
    'name': 'js-extras',
    'value': 'js-extras'
  },
  {
    'name': 'js-templates',
    'value': 'js-templates'
  },
  {
    'name': 'jsdoc',
    'value': 'jsdoc'
  },
  {
    'name': 'json',
    'value': 'json'
  },
  {
    'name': 'json5',
    'value': 'json5'
  },
  {
    'name': 'jsonp',
    'value': 'jsonp'
  },
  {
    'name': 'jsstacktrace',
    'value': 'jsstacktrace'
  },
  {
    'name': 'jsx',
    'value': 'jsx'
  },
  {
    'name': 'julia',
    'value': 'julia'
  },
  {
    'name': 'keepalived',
    'value': 'keepalived'
  },
  {
    'name': 'keyman',
    'value': 'keyman'
  },
  {
    'name': 'kotlin',
    'value': 'kotlin'
  },
  {
    'name': 'kumir',
    'value': 'kumir'
  },
  {
    'name': 'kusto',
    'value': 'kusto'
  },
  {
    'name': 'latex',
    'value': 'latex'
  },
  {
    'name': 'latte',
    'value': 'latte'
  },
  {
    'name': 'less',
    'value': 'less'
  },
  {
    'name': 'lilypond',
    'value': 'lilypond'
  },
  {
    'name': 'liquid',
    'value': 'liquid'
  },
  {
    'name': 'lisp',
    'value': 'lisp'
  },
  {
    'name': 'livescript',
    'value': 'livescript'
  },
  {
    'name': 'llvm',
    'value': 'llvm'
  },
  {
    'name': 'log',
    'value': 'log'
  },
  {
    'name': 'lua',
    'value': 'lua'
  },
  {
    'name': 'magma',
    'value': 'magma'
  },
  {
    'name': 'makefile',
    'value': 'makefile'
  },
  {
    'name': 'markdown',
    'value': 'markdown'
  },
  {
    'name': 'markup-templating',
    'value': 'markup-templating'
  },
  {
    'name': 'markup',
    'value': 'markup'
  },
  {
    'name': 'matlab',
    'value': 'matlab'
  },
  {
    'name': 'maxscript',
    'value': 'maxscript'
  },
  {
    'name': 'mel',
    'value': 'mel'
  },
  {
    'name': 'mermaid',
    'value': 'mermaid'
  },
  {
    'name': 'mizar',
    'value': 'mizar'
  },
  {
    'name': 'mongodb',
    'value': 'mongodb'
  },
  {
    'name': 'monkey',
    'value': 'monkey'
  },
  {
    'name': 'moonscript',
    'value': 'moonscript'
  },
  {
    'name': 'n1ql',
    'value': 'n1ql'
  },
  {
    'name': 'n4js',
    'value': 'n4js'
  },
  {
    'name': 'nand2tetris-hdl',
    'value': 'nand2tetris-hdl'
  },
  {
    'name': 'naniscript',
    'value': 'naniscript'
  },
  {
    'name': 'nasm',
    'value': 'nasm'
  },
  {
    'name': 'neon',
    'value': 'neon'
  },
  {
    'name': 'nevod',
    'value': 'nevod'
  },
  {
    'name': 'nginx',
    'value': 'nginx'
  },
  {
    'name': 'nim',
    'value': 'nim'
  },
  {
    'name': 'nix',
    'value': 'nix'
  },
  {
    'name': 'nsis',
    'value': 'nsis'
  },
  {
    'name': 'objectivec',
    'value': 'objectivec'
  },
  {
    'name': 'ocaml',
    'value': 'ocaml'
  },
  {
    'name': 'opencl',
    'value': 'opencl'
  },
  {
    'name': 'openqasm',
    'value': 'openqasm'
  },
  {
    'name': 'oz',
    'value': 'oz'
  },
  {
    'name': 'parigp',
    'value': 'parigp'
  },
  {
    'name': 'parser',
    'value': 'parser'
  },
  {
    'name': 'pascal',
    'value': 'pascal'
  },
  {
    'name': 'pascaligo',
    'value': 'pascaligo'
  },
  {
    'name': 'pcaxis',
    'value': 'pcaxis'
  },
  {
    'name': 'perl',
    'value': 'perl'
  },
  {
    'name': 'php-extras',
    'value': 'php-extras'
  },
  {
    'name': 'php',
    'value': 'php'
  },
  {
    'name': 'phpdoc',
    'value': 'phpdoc'
  },
  {
    'name': 'plsql',
    'value': 'plsql'
  },
  {
    'name': 'powerquery',
    'value': 'powerquery'
  },
  {
    'name': 'powershell',
    'value': 'powershell'
  },
  {
    'name': 'processing',
    'value': 'processing'
  },
  {
    'name': 'prolog',
    'value': 'prolog'
  },
  {
    'name': 'promql',
    'value': 'promql'
  },
  {
    'name': 'properties',
    'value': 'properties'
  },
  {
    'name': 'protobuf',
    'value': 'protobuf'
  },
  {
    'name': 'psl',
    'value': 'psl'
  },
  {
    'name': 'pug',
    'value': 'pug'
  },
  {
    'name': 'puppet',
    'value': 'puppet'
  },
  {
    'name': 'pure',
    'value': 'pure'
  },
  {
    'name': 'purebasic',
    'value': 'purebasic'
  },
  {
    'name': 'purescript',
    'value': 'purescript'
  },
  {
    'name': 'python',
    'value': 'python'
  },
  {
    'name': 'q',
    'value': 'q'
  },
  {
    'name': 'qml',
    'value': 'qml'
  },
  {
    'name': 'qore',
    'value': 'qore'
  },
  {
    'name': 'qsharp',
    'value': 'qsharp'
  },
  {
    'name': 'r',
    'value': 'r'
  },
  {
    'name': 'racket',
    'value': 'racket'
  },
  {
    'name': 'reason',
    'value': 'reason'
  },
  {
    'name': 'regex',
    'value': 'regex'
  },
  {
    'name': 'rego',
    'value': 'rego'
  },
  {
    'name': 'renpy',
    'value': 'renpy'
  },
  {
    'name': 'rest',
    'value': 'rest'
  },
  {
    'name': 'rip',
    'value': 'rip'
  },
  {
    'name': 'roboconf',
    'value': 'roboconf'
  },
  {
    'name': 'robotframework',
    'value': 'robotframework'
  },
  {
    'name': 'ruby',
    'value': 'ruby'
  },
  {
    'name': 'rust',
    'value': 'rust'
  },
  {
    'name': 'sas',
    'value': 'sas'
  },
  {
    'name': 'sass',
    'value': 'sass'
  },
  {
    'name': 'scala',
    'value': 'scala'
  },
  {
    'name': 'scheme',
    'value': 'scheme'
  },
  {
    'name': 'scss',
    'value': 'scss'
  },
  {
    'name': 'shell-session',
    'value': 'shell-session'
  },
  {
    'name': 'smali',
    'value': 'smali'
  },
  {
    'name': 'smalltalk',
    'value': 'smalltalk'
  },
  {
    'name': 'smarty',
    'value': 'smarty'
  },
  {
    'name': 'sml',
    'value': 'sml'
  },
  {
    'name': 'solidity',
    'value': 'solidity'
  },
  {
    'name': 'solution-file',
    'value': 'solution-file'
  },
  {
    'name': 'soy',
    'value': 'soy'
  },
  {
    'name': 'sparql',
    'value': 'sparql'
  },
  {
    'name': 'splunk-spl',
    'value': 'splunk-spl'
  },
  {
    'name': 'sqf',
    'value': 'sqf'
  },
  {
    'name': 'sql',
    'value': 'sql'
  },
  {
    'name': 'squirrel',
    'value': 'squirrel'
  },
  {
    'name': 'stan',
    'value': 'stan'
  },
  {
    'name': 'stylus',
    'value': 'stylus'
  },
  {
    'name': 'swift',
    'value': 'swift'
  },
  {
    'name': 'systemd',
    'value': 'systemd'
  },
  {
    'name': 't4-cs',
    'value': 't4-cs'
  },
  {
    'name': 't4-templating',
    'value': 't4-templating'
  },
  {
    'name': 't4-vb',
    'value': 't4-vb'
  },
  {
    'name': 'tap',
    'value': 'tap'
  },
  {
    'name': 'tcl',
    'value': 'tcl'
  },
  {
    'name': 'textile',
    'value': 'textile'
  },
  {
    'name': 'toml',
    'value': 'toml'
  },
  {
    'name': 'tremor',
    'value': 'tremor'
  },
  {
    'name': 'tsx',
    'value': 'tsx'
  },
  {
    'name': 'tt2',
    'value': 'tt2'
  },
  {
    'name': 'turtle',
    'value': 'turtle'
  },
  {
    'name': 'twig',
    'value': 'twig'
  },
  {
    'name': 'typescript',
    'value': 'typescript'
  },
  {
    'name': 'typoscript',
    'value': 'typoscript'
  },
  {
    'name': 'unrealscript',
    'value': 'unrealscript'
  },
  {
    'name': 'uorazor',
    'value': 'uorazor'
  },
  {
    'name': 'uri',
    'value': 'uri'
  },
  {
    'name': 'v',
    'value': 'v'
  },
  {
    'name': 'vala',
    'value': 'vala'
  },
  {
    'name': 'vbnet',
    'value': 'vbnet'
  },
  {
    'name': 'velocity',
    'value': 'velocity'
  },
  {
    'name': 'verilog',
    'value': 'verilog'
  },
  {
    'name': 'vhdl',
    'value': 'vhdl'
  },
  {
    'name': 'vim',
    'value': 'vim'
  },
  {
    'name': 'visual-basic',
    'value': 'visual-basic'
  },
  {
    'name': 'warpscript',
    'value': 'warpscript'
  },
  {
    'name': 'wasm',
    'value': 'wasm'
  },
  {
    'name': 'web-idl',
    'value': 'web-idl'
  },
  {
    'name': 'wiki',
    'value': 'wiki'
  },
  {
    'name': 'wolfram',
    'value': 'wolfram'
  },
  {
    'name': 'wren',
    'value': 'wren'
  },
  {
    'name': 'xeora',
    'value': 'xeora'
  },
  {
    'name': 'xml-doc',
    'value': 'xml-doc'
  },
  {
    'name': 'xojo',
    'value': 'xojo'
  },
  {
    'name': 'xquery',
    'value': 'xquery'
  },
  {
    'name': 'yaml',
    'value': 'yaml'
  },
  {
    'name': 'yang',
    'value': 'yang'
  },
  {
    'name': 'zig',
    'value': 'zig'
  }
];

export type Languages =
  'abap' |
  'abnf' |
  'actionscript' |
  'ada' |
  'agda' |
  'al' |
  'antlr4' |
  'apacheconf' |
  'apex' |
  'apl' |
  'applescript' |
  'aql' |
  'arduino' |
  'arff' |
  'asciidoc' |
  'asm6502' |
  'asmatmel' |
  'aspnet' |
  'autohotkey' |
  'autoit' |
  'avisynth' |
  'avro-idl' |
  'bash' |
  'basic' |
  'batch' |
  'bicep' |
  'birb' |
  'bison' |
  'bnf' |
  'brainfuck' |
  'brightscript' |
  'bro' |
  'bsl' |
  'c' |
  'cfscript' |
  'chaiscript' |
  'cil' |
  'clike' |
  'clojure' |
  'cmake' |
  'cobol' |
  'coffeescript' |
  'concurnas' |
  'coq' |
  'core' |
  'cpp' |
  'crystal' |
  'csharp' |
  'cshtml' |
  'csp' |
  'css-extras' |
  'css' |
  'csv' |
  'cypher' |
  'd' |
  'dart' |
  'dataweave' |
  'dax' |
  'dhall' |
  'diff' |
  'django' |
  'dns-zone-file' |
  'docker' |
  'dot' |
  'ebnf' |
  'editorconfig' |
  'eiffel' |
  'ejs' |
  'elixir' |
  'elm' |
  'erb' |
  'erlang' |
  'etlua' |
  'excel-formula' |
  'factor' |
  'false' |
  'firestore-security-rules' |
  'flow' |
  'fortran' |
  'fsharp' |
  'ftl' |
  'gap' |
  'gdscript' |
  'gedcom' |
  'gherkin' |
  'git' |
  'glsl' |
  'gml' |
  'gn' |
  'go-module' |
  'go' |
  'graphql' |
  'groovy' |
  'haml' |
  'handlebars' |
  'haskell' |
  'haxe' |
  'hcl' |
  'hlsl' |
  'hoon' |
  'hpkp' |
  'hsts' |
  'http' |
  'ichigojam' |
  'icon' |
  'icu-message-format' |
  'idris' |
  'iecst' |
  'ignore' |
  'inform7' |
  'ini' |
  'io' |
  'j' |
  'java' |
  'javadoc' |
  'javadoclike' |
  'javascript' |
  'javastacktrace' |
  'jexl' |
  'jolie' |
  'jq' |
  'js-extras' |
  'js-templates' |
  'jsdoc' |
  'json' |
  'json5' |
  'jsonp' |
  'jsstacktrace' |
  'jsx' |
  'julia' |
  'keepalived' |
  'keyman' |
  'kotlin' |
  'kumir' |
  'kusto' |
  'latex' |
  'latte' |
  'less' |
  'lilypond' |
  'liquid' |
  'lisp' |
  'livescript' |
  'llvm' |
  'log' |
  'lua' |
  'magma' |
  'makefile' |
  'markdown' |
  'markup-templating' |
  'markup' |
  'matlab' |
  'maxscript' |
  'mel' |
  'mermaid' |
  'mizar' |
  'mongodb' |
  'monkey' |
  'moonscript' |
  'n1ql' |
  'n4js' |
  'nand2tetris-hdl' |
  'naniscript' |
  'nasm' |
  'neon' |
  'nevod' |
  'nginx' |
  'nim' |
  'nix' |
  'nsis' |
  'objectivec' |
  'ocaml' |
  'opencl' |
  'openqasm' |
  'oz' |
  'parigp' |
  'parser' |
  'pascal' |
  'pascaligo' |
  'pcaxis' |
  'perl' |
  'php-extras' |
  'php' |
  'phpdoc' |
  'plsql' |
  'powerquery' |
  'powershell' |
  'processing' |
  'prolog' |
  'promql' |
  'properties' |
  'protobuf' |
  'psl' |
  'pug' |
  'puppet' |
  'pure' |
  'purebasic' |
  'purescript' |
  'python' |
  'q' |
  'qml' |
  'qore' |
  'qsharp' |
  'r' |
  'racket' |
  'reason' |
  'regex' |
  'rego' |
  'renpy' |
  'rest' |
  'rip' |
  'roboconf' |
  'robotframework' |
  'ruby' |
  'rust' |
  'sas' |
  'sass' |
  'scala' |
  'scheme' |
  'scss' |
  'shell-session' |
  'smali' |
  'smalltalk' |
  'smarty' |
  'sml' |
  'solidity' |
  'solution-file' |
  'soy' |
  'sparql' |
  'splunk-spl' |
  'sqf' |
  'sql' |
  'squirrel' |
  'stan' |
  'stylus' |
  'swift' |
  'systemd' |
  't4-cs' |
  't4-templating' |
  't4-vb' |
  'tap' |
  'tcl' |
  'textile' |
  'toml' |
  'tremor' |
  'tsx' |
  'tt2' |
  'turtle' |
  'twig' |
  'typescript' |
  'typoscript' |
  'unrealscript' |
  'uorazor' |
  'uri' |
  'v' |
  'vala' |
  'vbnet' |
  'velocity' |
  'verilog' |
  'vhdl' |
  'vim' |
  'visual-basic' |
  'warpscript' |
  'wasm' |
  'web-idl' |
  'wiki' |
  'wolfram' |
  'wren' |
  'xeora' |
  'xml-doc' |
  'xojo' |
  'xquery' |
  'yaml' |
  'yang' |
  'zig' |
  'plain';
