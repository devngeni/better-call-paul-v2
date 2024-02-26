import Tour from "../../../public/DealsImages/Giraffe.webp";
import Tours from "../../../public/DealsImages/try.webp";
import Zebra from "../../../public/DealsImages/Zebra.webp";
import Vasha from "../../../public/DealsImages/Vasha.webp";
import Museum from "../../../public/DealsImages/Museum.webp";
import Culture from "../../../public/DealsImages/culture.webp";

import { StaticImageData } from "next/image";

export interface TourDataType {
  subTitle: string;
  content: {
    name: string;
    description?: string;
    imagePath: StaticImageData;
    price?: number | string;
  }[];
}

export const TourData: TourDataType[] = [
  {
    subTitle: "Full Day Trip",
    content: [
      {
        name: "Out of Africa Experience",
        description:
          "Spend a day in the lush Karen neighbourhood learning about her heritage and getting up close with nature.",
        imagePath: Culture,
        price: 130,
      },
      {
        name: "Nairobi Safari Experience",
        description: "Enjoy the only national park within a city.",
        imagePath: Tours,
        price: 170,
      },
      {
        name: "Nairobi Heritage Experience",
        description: "Immerse yourself in the city’s rich heritage & culture",
        imagePath: Zebra,
        price: 170,
      },
    ],
  },
  {
    subTitle: "Half Day Trip",
    content: [
      {
        name: "Nairobi Cultural & wildlife Experience",
        description:
          "Learn about our precious culture and  how it compliments our wildlife",
        imagePath: Tour,
        price: 95,
      },
      {
        name: "Nairobi Museum Experience",
        description: "See  what our museum has to offer",
        imagePath: Museum,
        price: 95,
      },
    ],
  },
  {
    subTitle: "Out of Town",
    content: [
      {
        name: "Out of Town Experience",
        description: "Unwind at the shores of Kenya’s lake Como",
        imagePath: Vasha,
        price: 0,
      },
    ],
  },
];
