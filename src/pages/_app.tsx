import { PriceProvider, Theme } from "@/context";
import { StyledComponentsRegistry } from "@/lib";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/context/CartContext";
import { useEffect, useState } from "react";
import Script from "next/script";
import { ServicesDataProvider } from "@/context/GetServicesDataContext";
import { RestaurantDataProvider } from "@/context/RestaurantContext";

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <ServicesDataProvider>
      <StyledComponentsRegistry>
        <RestaurantDataProvider>
        <Theme>
          <PriceProvider>
            <CartProvider>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_KEY}`}
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_KEY}');
    `}
              </Script>
              <Component {...pageProps} />
            </CartProvider>
          </PriceProvider>
        </Theme>
        </RestaurantDataProvider>
      </StyledComponentsRegistry>
    </ServicesDataProvider>
  );
}
