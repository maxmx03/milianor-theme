import { CodeColors } from "../../utils/types";
import {
  desertColors as colors,
  desertSpecial as special,
} from "./desertColors";

export const desertCodeColors: CodeColors = {
  languages: {
    comment: colors.grey,
    string: colors.green,
    constant: colors.orange,
    variables: colors.white,
    phpVariables: special.php,
    keyword: colors.darkerPink,
    general: colors.darkerPink,
    modifier: colors.darkerPink,
    storage: colors.darkerPink,
    function: colors.yellow,
    objectMethod: colors.limon,
    class: colors.blue,
    types: colors.cyan,
    this: colors.purple,
    decorator: colors.yellow,
    magicFunctions: colors.purple,
    attributes: colors.purple,
    generics: colors.gold,
    buildIn: colors.cyan,
    params: colors.gold,
    brackets: colors.white,
    regexString: colors.yellow,
    regexNonCapture: colors.pink,
    regexConstants: colors.orange,
    regexStartEnd: colors.red,
    charGroup: colors.cyan,
    captureGroup: colors.gold,
    assertionOperator: colors.red,
    positiveLookahead: colors.green,
    propertyQuotes: colors.cyan,
    docstring: colors.purple,
    destructuringLhs: colors.gold,
    destructuringRhs: colors.white,
    graphQlKeys: colors.yellow,
    graphQlFuncArgs: colors.gold,
    graphQlFragments: colors.cyan,
    foreground: colors.white,
    shellConstant: colors.orange,
    shellVariables: colors.white,
    makeFile: colors.yellow,
    Haskell: colors.purple,
    aliases: colors.green,
    keys: colors.cyan,
    dates: colors.gold,
    jsDocKeyWord: colors.pink,
    jsDockTypes: colors.cyan,
    jsDockComment: colors.grey,
    diff: colors.cyan,
    header: colors.gold,
    source: colors.white,
  },
  react: {
    classComponent: colors.blue,
    source: colors.white,
  },
  vue: {
    default: special.vue,
    attribute: colors.purple,
    types: colors.cyan,
  },
  json: {
    brackets: colors.white,
    comment: colors.grey,
    constant: colors.orange,
  },
  xml: {
    meta: colors.darkerPink,
    version: colors.darkerPink,
    attribute: colors.darkerPink,
    tag: colors.orange,
  },
  html: {
    meta: colors.darkerPink,
    attribute: colors.purple,
    string: colors.green,
    constant: colors.purple,
    tag: colors.orange,
    text: colors.white,
    comment: colors.grey,
  },
  scss: {
    meta: colors.darkerPink,
    generics: colors.darkerPink,
    keyword: colors.darkerPink,
    metaScss: colors.darkerPink,
    parentSelector: colors.darkerPink,
    comment: colors.grey,
    bracket: colors.white,
    cssVar: colors.turquoise,
    scssVar: colors.pink,
    class: colors.blue,
    function: colors.yellow,
    string: colors.green,
    property: colors.purple,
    propertyValue: colors.gold,
    custom: colors.turquoise,
    id: colors.red,
    pseudo: colors.cyan,
    tag: colors.orange,
    type: colors.darkerPink,
    unit: colors.limon,
  },
  gitGnoreAtr: {
    hash: colors.red,
    string: colors.orange,
  },
  markdown: {
    bloquotes: colors.blue,
    bold: colors.gold,
    braces: colors.white,
    bracesBlock: colors.white,
    bracesParagraph: colors.blue,
    changed: colors.orange,
    codeBlocks: colors.darkerPink,
    constants: colors.orange,
    deleted: colors.red,
    deprecated: colors.grey,
    error: colors.red,
    filename: colors.green,
    horizontal: colors.blue,
    inline: colors.blue,
    inserted: colors.blue,
    invalid: colors.grey,
    italic: colors.yellow,
    linkText: colors.blue,
    links: colors.blue,
    list: colors.turquoise,
  },
};
