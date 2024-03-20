import { useEffect } from "react";
import { useRouter } from "next/router";
import { SplashScreen } from "@/components/splashscreen";
import { Layout } from "@/layout";
import BgImage from "../../public/DealsImages/bg.jpeg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Welcome to BCP - Better Call Paul',
  description: 'One Touch All Service from meals to wheels and beyond',
  openGraph: {
    images: [
      { url: 'https://www.bettercallpaul.world/DealsImages/bgLogo.jpg', alt: 'BCP Logo' }
    ],
  },
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width > 1024) {
        router.push("/home");
      }
    }
  }, [router]);
  return (
    <Layout
      title="BCP |  (Better Call Paul)"
      description="One Touch All Service from meals to wheels and beyond"
      imageURl={BgImage}
    >
      <SplashScreen />
    </Layout>
  );
}
