import { LayoutProps } from "@/types";
import { Montserrat, Open_Sans, Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from "styled-components";
import localFont from 'next/font/local'

const BcpFont = localFont({
  src: [
    {
      path: "./../../public/fonts/UberMoveMedium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/UberMoveBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
export const Opensans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif", "serif", "monospace"],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif", "serif", "monospace"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif", "serif", "monospace"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif", "serif", "monospace"],
});

const theme = {
  colors: {
    colorName1: "#aabbcc",
    colorName2: "hsla(50, 60%, 70%, 0.5)",
  },
  fontFace: {
    fonts: {
      primaryfont: Opensans.style.fontFamily,
      secondaryfont: roboto.style.fontFamily,
      tertiaryfont: montserrat.style.fontFamily,
      poppins: poppins.style.fontFamily,
      bcpFont: BcpFont.style.fontFamily,
    },
    fontWeight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
    fontSize: {
      small: "12px",
      medium: "14px",
      large: "16px",
      extraLarge: "18px",
    },
  },
};
const Theme = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
