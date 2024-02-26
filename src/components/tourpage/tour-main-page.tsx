import { Layout } from "@/layout";
import BottomNavigation from "../Navbar/BottomNav";
import {
  FaqsSection,
  IntroSection,
  ProductDetails,
  Swiper,
  TimeSection
} from "../productspage";
import {
  IntroDataType,
  SwipperDataType,
  TimelineType
} from "@/types/datatypes";
import { useRouter } from "next/router";
import { BookSection } from "../commons";
export interface TripsDetailsPageProps {
  introSectionTitle: string;
  introSectionContent?: string;
  introData?: IntroDataType[];
  swipperData: SwipperDataType[];
  productDetailsTitle: string;
  productDetailsText: string;
  timelines: TimelineType[];
  moreDetails: string;
  faqSectionData: [];
  price: number;
  text: string;
  book: string;
  info?: string;
}

export default function TripsDetailsPage({
  introSectionTitle,
  introSectionContent,
  introData,
  swipperData,
  productDetailsTitle,
  productDetailsText,
  timelines,
  moreDetails,
  faqSectionData,
  price,
  text,
  book,
  info
}: TripsDetailsPageProps) {
  const route = useRouter();
  const currentPath = route.asPath;
  const pathParts = currentPath.split("/");
  const lastPathSegment = pathParts[pathParts.length - 1];

  console.log(lastPathSegment);
  return (
    <Layout
      title="Trips details"
      description="Out of Africa Experience"
      bottomNav={<BottomNavigation />}
    >
      <IntroSection
        title={introSectionTitle}
        content={introSectionContent}
        introData={introData}
      />
      <Swiper items={swipperData} />
      <ProductDetails title={productDetailsTitle} text={productDetailsText} />
      <BookSection price={price} text={text} book={book} info={info} />
      <TimeSection timelines={timelines} />
      <FaqsSection title={moreDetails} faqs={faqSectionData} />
    </Layout>
  );
}
