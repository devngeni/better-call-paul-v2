import { Theme } from "@/context";
import "styled-components";

type Theme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      colorName1: string;
      colorName2: string;
    };
    fontFace: {
      fonts: {
        primaryfont: string;
        secondaryfont: string;
        tertiaryfont: string;
        poppins: string;
        bcpFont: string;
      };
      fontWeight: {
        light: number;
        regular: number;
        semiBold: number;
        bold: number;
      };
      fontSize: {
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
      };
    };
  }
}
