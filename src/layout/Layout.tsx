import { LayoutProps } from "@/types";
import Head from "next/head";

export default function Layout({
  children,
  navbar,
  footer,
  description,
  title,
  bottomNav,
  imageURl,
  navigationbar
}: LayoutProps) {
  const imageUrl =
    "https://www.bettercallpaul.world/favicon/android-chrome-192x192.png";
  const websiteUrl = "https://www.bettercallpaul.world";
  const defaultTitle =
    "Better Call Paul - Kenya's Best Homestay Concierge Services";
  const defaultDescription =
    "We provide fast, quality and essential services like Tours & travel, Property Management, Food, Private Chef & Meal Prep, Wellness and Grooming, Shopping & grocery runs from the comfort of your Home";
  return (
    <>
      <Head>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#1A3F34" />
        <meta name="theme-color" content="#00453a" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%231a3f34%22></rect><path fill=%22%23fff%22 d=%22M14.10 63.93L14.10 36.09L23.82 36.09Q29.49 36.09 32.24 37.77Q34.99 39.46 34.99 43.02L34.99 43.02Q34.99 45.36 33.79 47.02Q32.59 48.68 30.63 49.15L30.63 49.15L30.63 49.34Q33.22 50.03 34.38 51.63Q35.55 53.23 35.55 55.78L35.55 55.78Q35.55 59.57 32.70 61.75Q29.85 63.93 24.94 63.93L24.94 63.93L14.10 63.93ZM21.63 41.78L21.63 46.77L23.89 46.77Q25.51 46.77 26.40 46.11Q27.28 45.44 27.28 44.13L27.28 44.13Q27.28 41.78 23.74 41.78L23.74 41.78L21.63 41.78ZM24.12 52.28L21.63 52.28L21.63 58.12L24.27 58.12Q27.80 58.12 27.80 55.15L27.80 55.15Q27.80 53.76 26.85 53.02Q25.91 52.28 24.12 52.28L24.12 52.28ZM52.78 41.86L52.78 41.86Q50.10 41.86 48.59 44.06Q47.09 46.26 47.09 50.12L47.09 50.12Q47.09 58.16 53.20 58.16L53.20 58.16Q55.05 58.16 56.78 57.65Q58.51 57.13 60.26 56.41L60.26 56.41L60.26 62.77Q56.78 64.31 52.38 64.31L52.38 64.31Q46.08 64.31 42.72 60.65Q39.35 57.00 39.35 50.09L39.35 50.09Q39.35 45.76 40.98 42.49Q42.61 39.21 45.67 37.45Q48.72 35.69 52.86 35.69L52.86 35.69Q57.37 35.69 61.48 37.65L61.48 37.65L59.18 43.57Q57.64 42.85 56.09 42.35Q54.55 41.86 52.78 41.86ZM85.90 44.94L85.90 44.94Q85.90 49.61 83.14 52.15Q80.39 54.69 75.33 54.69L75.33 54.69L73.21 54.69L73.21 63.93L65.69 63.93L65.69 36.09L75.33 36.09Q80.60 36.09 83.25 38.39Q85.90 40.70 85.90 44.94ZM73.21 42.16L73.21 48.56L74.58 48.56Q76.28 48.56 77.28 47.61Q78.28 46.66 78.28 44.98L78.28 44.98Q78.28 42.16 75.16 42.16L75.16 42.16L73.21 42.16Z%22></path></svg>"
        />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={websiteUrl} />


        <meta property="og:title" content={defaultTitle} />

        <meta property="og:description" content={defaultDescription} />
        <meta
          property="og:image"
          content={imageUrl}
          key="ogImage"
        />
        <meta
          name="twitter:image"
          content="https://www.bettercallpaul.world/DealsImages/bgLogo.jpg"
        />
        <meta property="og:image:alt" content="My custom alt" />

        <meta property="og:site_name" content="Better Call Paul" />

        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />

        <meta name="twitter:image" content={imageURl} />
        
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <meta name="twitter:image:alt" content="Better Call Paul" />
      </Head>
      <nav>{navbar}</nav>
      <nav>{navigationbar}</nav>
      <nav>{bottomNav}</nav>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
}
