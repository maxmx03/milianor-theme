import path from "path";
import fs from "fs";
import tinycolor from "tinycolor2";

import { ITheme } from "../interfaces";
import { TColors, Colors } from "../types";

export default class VsCodeTheme implements ITheme {
  public name: string;
  public type: string;
  public semanticHighlighting: boolean;
  public colors: Colors;
  public tokenColors: Array<TColors>;

  constructor(
    semanticHighlighting?: boolean,
    name?: string,
    type?: string,
    color?: Colors,
    tokenColors?: Array<TColors>
  ) {
    this.name = name ?? "";
    this.type = type ?? "";
    this.semanticHighlighting = semanticHighlighting ?? false;
    this.colors = color ?? {};
    this.tokenColors = tokenColors ?? [];
  }

  hasForeground(object: TColors): boolean | undefined {
    return object.settings.foreground?.includes("#");
  }

  makeThemeVibrant(theme: VsCodeTheme) {
    return JSON.stringify({
      ...theme,
      colors: {
        ...theme.colors,
        "editor.background": tinycolor(theme.colors["editor.background"])
          .saturate(5)
          .toHexString(),
      },
      tokenColors: theme.tokenColors.map((object) => {
        return {
          ...object,
          settings: {
            ...object.settings,
            [this.hasForeground(object)
              ? "foreground"
              : ""]: this.hasForeground(object)
              ? tinycolor(object.settings.foreground).saturate().toHexString()
              : "",
          },
        };
      }),
    });
  }

  makeThemeSoft(theme: VsCodeTheme): string {
    return JSON.stringify({
      ...theme,
      tokenColors: theme.tokenColors.map((object) => {
        return {
          ...object,
          settings: {
            ...object.settings,
            [this.hasForeground(object)
              ? "foreground"
              : ""]: this.hasForeground(object)
              ? tinycolor(object.settings.foreground)
                  .desaturate(20)
                  .toHexString()
              : "",
          },
        };
      }),
    });
  }

  writeJsonFile(theme: string, location: string) {
    new Promise((resolve, reject) => {
      fs.unlink(location, (err) => {
        if (err) reject(err);

        resolve("success");
      });
    }).finally(() => {
      fs.writeFile(location, theme, "utf8", (err: any) => {
        if (err) throw err;
      });
    });
  }

  saveFile(folderName: string, fileName: string): string {
    return path.resolve(folderName, fileName);
  }

  generateTheme(opts: { default: string; soft: string; vibrant: string }) {
    const myTheme = JSON.stringify(this);
    const myThemeSoft = this.makeThemeSoft(this);
    const mtThemeVibrant = this.makeThemeVibrant(this);

    this.writeJsonFile(myTheme, this.saveFile("themes", opts.default));
    this.writeJsonFile(myThemeSoft, this.saveFile("themes", opts.soft));
    this.writeJsonFile(mtThemeVibrant, this.saveFile("themes", opts.vibrant));
  }
}
