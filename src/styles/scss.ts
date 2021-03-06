import { TColors, CodeColors } from "../utils/types";

export const scss = ({ scss: sc }: CodeColors): Array<TColors> => {
  return [
    {
      name: "SCSS Keywords, Interpolation",
      scope: [
        "keyword.other",
        "variable.interpolation.scss",
        "support.constant.media",
      ],
      settings: {
        foreground: sc.keyword,
        fontStyle: "normal"
      },
    },
    {
      name: "Suport Type",
      scope: ["support.type.vendored.property-name.css"],
      settings: {
        foreground: sc.type,
      },
    },
    {
      name: "CSS Meta",
      scope: [
        "meta.selector",
        "meta.property-list.css",
        "meta.at-rule.media.header",
        "meta.definition.variable.css",
        "punctuation.separator.list.comma.css",
        "punctuation.separator.key-value.css",
        "entity.other.keyframe-offset.css",
      ],
      settings: {
        foreground: sc.meta,
      },
    },
    {
      name: "SCSS Meta",
      scope: [
        "meta.selector",
        "meta.property-list.scss",
        "meta.at-rule.media.header",
        "meta.definition.variable.scss",
        "punctuation.separator.list.comma.scss",
        "punctuation.separator.key-value.scss",
        "entity.other.keyframe-offset.scss",
      ],
      settings: {
        foreground: sc.metaScss,
      },
    },
    {
      name: "SCSS Tag",
      scope: ["entity.name.tag"],
      settings: {
        foreground: sc.tag,
      },
    },
    {
      name: "SCSS Custom",
      scope: ["entity.other.attribute-name.attribute"],
      settings: {
        foreground: sc.custom,
      },
    },
    {
      name: "SCSS Id",
      scope: ["entity.other.attribute-name.id"],
      settings: {
        foreground: sc.id,
      },
    },
    {
      name: "SCSS Class",
      scope: ["	entity.other.attribute-name.class"],
      settings: {
        foreground: sc.class,
      },
    },
    {
      name: "SCSS Pseudo Class",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: sc.pseudo,
      },
    },
    {
      name: "SCSS Property",
      scope: ["support.type.property-name"],
      settings: {
        foreground: sc.property,
      },
    },
    {
      name: "SCSS Property Value",
      scope: ["support.constant.property-value.css"],
      settings: {
        foreground: sc.propertyValue,
        fontStyle: "normal"
      },
    },
    {
      name: "SCSS Property Unit",
      scope: ["keyword.other.unit"],
      settings: {
        foreground: sc.unit,
      },
    },
    {
      name: "CSS Variable",
      scope: ["variable.css", "variable.argument.css"],
      settings: {
        foreground: sc.cssVar,
      },
    },
    {
      name: "SCSS Variable",
      scope: ["variable.scss"],
      settings: {
        foreground: sc.scssVar,
      },
    },
    {
      name: "SCSS Comments",
      scope: ["comment.line.scss"],
      settings: {
        foreground: sc.comment,
      },
    },
    {
      name: "SCSS Strings",
      scope: ["meta.attribute-selector"],
      settings: {
        foreground: sc.string,
      },
    },
    {
      name: "SCSS Square Brackets",
      scope: [
        "punctuation.definition.attribute-selector.end.bracket.square.scss",
        "punctuation.definition.attribute-selector.begin.bracket.square.scss",
      ],
      settings: {
        foreground: sc.bracket,
      },
    },
    {
      name: "SCSS Functions",
      scope: ["support.function"],
      settings: {
        foreground: sc.function,
      },
    },
  ];
};
