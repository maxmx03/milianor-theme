import { TColors, CodeColors } from "../utils/types";

export const gitGnoreAtr = ({ gitGnoreAtr: git }: CodeColors): Array<TColors> => {
  return [
    {
      name: "Gitgnore",
      scope: ["source.ignore", "source.ini"],
      settings: {
        foreground: git.string,
      },
    },
    {
      name: "Gitgnore",
      scope: [
        "comment.line.number-sign.ignore",
        "comment.line.number-sign.ini",
      ],
      settings: {
        foreground: git.hash,
      },
    },
  ];
};
