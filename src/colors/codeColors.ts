import { colors, special } from "./colors";

export const codeColors = {
  languages: {
    comment: colors.grey,
    general: colors.darkerPink,
    brackets: colors.white,
    importVar: colors.white,
    string: colors.green,
    storage: colors.red,
    variables: colors.white,
    phpVariables: special.php,
    constant: colors.orange,
    function: colors.yellow,
    params: colors.gold,
    class: colors.blue,
    attributes: colors.purple,
    objectMethod: colors.limon,
    this: colors.purple,
    interface: colors.cyan,
    declareVar: colors.red,
    regex: colors.purple,
    regexString: colors.turquoise,
    regexPositive: colors.green,
    regexCharacter: colors.pink,
    regexAssertion: colors.red,
    jsDocKeyWord: colors.pink,
    jsDockTypes: colors.cyan,
    jsDockComment: colors.gold,
    test: colors.red,
    other: colors.pink,
  },
  react: {
    classComponent: colors.blue,
  },
  vue: {
    default: special.vue,
    types: colors.cyan,
    test: colors.red,
  },
  json: {
    comment: colors.grey,
    brackets: colors.white,
    constant: colors.orange,
    test: colors.red,
  },
  xml: {
    meta: colors.darkerPink,
    version: colors.darkerPink,
    tag: colors.orange,
    attribute: colors.purple,
    test: colors.red,
  },
  html: {
    meta: colors.darkerPink,
    tag: colors.orange,
    vueTag: colors.green,
    attribute: colors.purple,
    text: colors.white,
    constant: colors.yellow,
    string: colors.green,
    test: colors.red,
  },
  scss: {
    keyword: colors.pink,
    meta: colors.white,
    tag: colors.orange,
    custom: colors.turquoise,
    class: colors.blue,
    id: colors.red,
    pseudo: colors.cyan,
    property: colors.purple,
    propertyValue: colors.gold,
    unit: colors.limon,
    variable: colors.darkerPink,
    variable2: colors.blue,
    comment: colors.grey,
    string: colors.green,
    bracket: colors.white,
    function: colors.yellow,
    test: colors.red,
  },
  gitGnoreAtr: {
    string: colors.orange,
    hash: colors.red,
    test: colors.red,
  },
  markdown: {
    header: colors.purple,
    source: colors.white,
    diff: colors.pink,
    inserted: colors.green,
    deleted: colors.red,
    changed: colors.gold,
    invalid: colors.red,
    deprecated: colors.grey,
    filename: colors.yellow,
    error: colors.red,
    bold: colors.orange,
    italic: colors.yellow,
    list: colors.cyan,
    inline: colors.turquoise,
    links: colors.blue,
    linkText: colors.pink,
    bloquotes: colors.limon,
    horizontal: colors.pink,
    codeBlocks: colors.green,
    constants: colors.orange,
    braces: colors.purple,
    bracesParagraph: colors.gold,
    bracesBlock: colors.turquoise,
    test: colors.red,
    other: colors.pink,
  },
};
