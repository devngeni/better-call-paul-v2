import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import TripsDetailsPage from "@/components/tourpage/tour-main-page";
import { Layout } from "@/layout";

import {
  NairobiSafariExperienceData,
  NairobiHeritageExperienceData,
  OutOfAfricaExperienceData,
  NairobiCulturalWildLifeData,
  MuseumExperienceData,
  OutOfTownExperience,
  ToyotaLandcruiserV8Data,
  PradoData,
  BenzData,
  AxiosData,
  ToyotaNoahData,
  ToyotaAlphardData,
  ChaufferedV8Data,
  ChaufferedNoahData,
  AirTransportData,
  SwedishMassageData,
  CoupleMassageData,
  FacialScalpData,
  FootMassageData,
  BackMassageData,
  HairCutData,
  ManicureData,
  PedicureData,
  BraidsData,
  RetouchData,
  CleanseData,
  MenCleanseData,
  TeenCleanseData,
  FullLegsData,
  UpperLegsData,
  HairLegsData,
  ArmsData,
  HalfArmData,
  UnderArmData,
  BikiniLineData,
  ChinData,
  BackData,
  ChestData,
  Fanta2LitresData,
  Fanta1LitreData,
  Sprite1LitreData,
  Sprite2LitresData,
  KrestLitreData,
  CokeCanData,
  Fanta2LitreData,
  FantaLitreData,
  CokeLightData,
  Coke2LightData,
  SpriteCanData,
  CokeZeroLitreData,
  CokeZero2LitreData,
  FantaOrange1Data,
  Coke1Data,
  Coke2Data,
  FitchTonicData,
  SchweppesData,
  TangawiziData,
  Passion2LitreData,
  Passion1LitreData,
  VapeData,
  CirocData,
  SmirnoffData,
  KettelData,
  AbsoluteVodkaData,
  BabyCotsData,
  TuskerCanData,
  TuskerMaltData,
  TuskerCiderData,
  GuinnessCanData,
  WhiteCapData,
  HeinekenData,
  HuntersData,
  SnappData,
  KOData,
  BaloziData,
  JohnnieWalkerData,
  JWBlackData,
  JackDanielsData,
  MonkeyShoulderData,
} from "@/utils/our-services-data";
import { GetServerSideProps } from "next";

const fetchDataBasedOnSlug = async (slug: string) => {
  let data: any = {};

  switch (slug) {
    case "out-of-africa-experience":
      data = { ...OutOfAfricaExperienceData };
      break;
    case "nairobi-safari-experience":
      data = { ...NairobiSafariExperienceData };
      break;
    case "nairobi-heritage-experience":
      data = { ...NairobiHeritageExperienceData };
      break;
    case "nairobi-cultural-&-wildlife-experience":
      data = { ...NairobiCulturalWildLifeData };
      break;
    case "nairobi-museum-experience":
      data = { ...MuseumExperienceData };
      break;
    case "out-of-town-experience":
      data = { ...OutOfTownExperience };
      break;
    case "toyota-landcruiser-v8":
      data = { ...ToyotaLandcruiserV8Data };
      break;
    case "toyota-prado":
      data = { ...PradoData };
      break;
    case "mercedes-c200-saloon":
      data = { ...BenzData };
      break;
    case "toyota-axio-saloon":
      data = { ...AxiosData };
      break;
    case "toyota-noah":
      data = { ...ToyotaNoahData };
      break;
    case "toyota-alphard":
      data = { ...ToyotaAlphardData };
      break;
    case "chauffeured-toyota-landcruiser-v8":
      data = { ...ChaufferedV8Data };
      break;
    case "chauffeured-minivan":
      data = { ...ChaufferedNoahData };
      break;
    case "airport-transfer-services":
      data = { ...AirTransportData };
      break;
    case "sweedish-massage-90-minutes":
      data = { ...SwedishMassageData };
      break;
    case "couple-massage-90-minutes":
      data = { ...CoupleMassageData };
      break;
    case "face-&-scalp-massage-30-minutes":
      data = { ...FacialScalpData };
      break;
    case "foot-pressure-massage-30-minutes":
      data = { ...FootMassageData };
      break;
    case "back-of-legs,-neck-&-shoulder-massage-45-minutes":
      data = { ...BackMassageData };
      break;
    case "haircut-inclusive-wash":
      data = { ...HairCutData };
      break;
    case "manicure":
      data = { ...ManicureData };
      break;
    case "pedicure":
      data = { ...PedicureData };
      break;
    case "braids-plaits":
      data = { ...BraidsData };
      break;
    case "extra-services---wash,-trim,-retouch-on-request":
      data = { ...RetouchData };
      break;
    case "deep-cleanse-facial-70-mins":
      data = { ...CleanseData };
      break;
    case "gentleman-facial-60-mins":
      data = { ...MenCleanseData };
      break;
    case "teen-facial-45-mins":
      data = { ...TeenCleanseData };
      break;
    case "full-legs-45-mins":
      data = { ...FullLegsData };
      break;
    case "upper-legs-30-mins":
      data = { ...UpperLegsData };
      break;
    case "hair-legs-30-mins":
      data = { ...HairLegsData };
      break;
    case "arms-20-mins":
      data = { ...ArmsData };
      break;
    case "half-arm-15-mins":
      data = { ...HalfArmData };
      break;
    case "under-arm-15-mins":
      data = { ...UnderArmData };
      break;
    case "bikini-line-15-mins":
      data = { ...BikiniLineData };
      break;
    case "chin-15-mins":
      data = { ...ChinData };
      break;
    case "back-20-mins":
      data = { ...BackData };
      break;
    case "chest-20-mins":
      data = { ...ChestData };
      break;

    case "chest-20-mins":
      data = { ...ChestData };
      break;
    case "fanta-pineapple-2-litres":
      data = { ...Fanta2LitresData };
      break;
    case "fanta-pineapple-1-litre":
      data = { ...Fanta1LitreData };
      break;
    case "sprite-1-litre":
      data = { ...Sprite1LitreData };
      break;
    case "sprite-2-litres":
      data = { ...Sprite2LitresData };
      break;
    case "krest-1-litre":
      data = { ...KrestLitreData };
      break;
    case "coke-can-330-ml":
      data = { ...CokeCanData };
      break;
    case "fanta-orange-2-litres":
      data = { ...Fanta2LitreData };
      break;
    case "fanta-orange-1-litre":
      data = { ...FantaLitreData };
      break;
    case "coke-light-1-litre":
      data = { ...CokeLightData };
      break;
    case "coke-light-2-litres":
      data = { ...Coke2LightData };
      break;
    case "sprite-can-330-ml":
      data = { ...SpriteCanData };
      break;
    case "coke-zero-1-litre":
      data = { ...CokeZeroLitreData };
      break;
    case "coke-zero-2-litres":
      data = { ...CokeZero2LitreData };
      break;
    case "fanta-orange-can-330-ml":
      data = { ...FantaOrange1Data };
      break;
    case "coke-1-litre":
      data = { ...Coke1Data };
      break;
    case "coke-2-litres":
      data = { ...Coke2Data };
      break;
    case "fitch-&-leedes-pink-tonic-200-ml":
      data = { ...FitchTonicData };
      break;
    case "schweppes-ginger-ale-330-ml":
      data = { ...SchweppesData };
      break;
    case "stoney-tangawizi-1-litre":
      data = { ...TangawiziData };
      break;
    case "fanta-passion-2-litres":
      data = { ...Passion2LitreData };
      break;
    case "fanta-passion-1-litre":
      data = { ...Passion1LitreData };
      break;
    case "5000-puffs-rechargeable-vape":
      data = { ...VapeData };
      break;
    case "ciroc-1ltr":
      data = { ...CirocData };
      break;
    case "smirnoff-vodka-1ltr":
      data = { ...SmirnoffData };
      break;
    case "kettel-one-1ltr":
      data = { ...KettelData };
      break;
    case "absolute-vodka-1ltr":
      data = { ...AbsoluteVodkaData };
      break;
    case "rentable":
      data = { ...BabyCotsData };
      break;
    case "tusker-can-500ml":
      data = { ...TuskerCanData };
      break;
    case "tusker-malt-can-500ml":
      data = { ...TuskerMaltData };
      break;
    case "tusker-cider-can":
      data = { ...TuskerCiderData };
      break;
    case "guinness-can":
      data = { ...GuinnessCanData };
      break;
    case "white-cap-can":
      data = { ...WhiteCapData };
      break;
    case "heineken":
      data = { ...HeinekenData };
      break;
    case "hunters-dry-cider":
      data = { ...HuntersData };
      break;
    case "snapp-can":
      data = { ...SnappData };
      break;
    case "k.o-all-flavours":
      data = { ...KOData };
      break;
    case "balozi-can-500ml":
      data = { ...BaloziData };
      break;
    case "johnnie-walker-double-black-1ltr":
      data = { ...JohnnieWalkerData };
      break;
    case "johnnie-walker-black-label-1ltr":
      data = { ...JWBlackData };
      break;
    case "jack-daniels-1ltr":
      data = { ...JackDanielsData };
      break;
    case "monkey-shoulder-1ltr":
      data = { ...MonkeyShoulderData };
      break;
    default:
      break;
  }

  return data;
};

export default function SlugPage({ data }: any) {
  return (
    <Layout
      title="Tour Concierge & Services"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
    >
      <TripsDetailsPage {...data} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  const data = await fetchDataBasedOnSlug(slug as string);

  return {
    props: {
      data,
    },
  };
};
