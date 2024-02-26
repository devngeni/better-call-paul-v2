import Fish from "../../../public/DealsImages/FishPlate.png";
import Chef from "../../../public/DealsImages/1.png";
import MealPrep from "../../../public/DealsImages/2.png";
import WholeFish from "../../../public/DealsImages/WholeFish.webp";
import MediumFish from "../../../public/DealsImages/MediumFish.webp";
import FishLarge from "../../../public/DealsImages/FishLarge.webp";
import ChickenLegs from "../../../public/DealsImages/ChickenLegs.webp";
import FullChicken from "../../../public/DealsImages/FullChicken.webp";
import Mbuzi from "../../../public/DealsImages/Mbuzi.webp";
import Beef from "../../../public/DealsImages/Beef.webp";
import PorkRibs from "../../../public/DealsImages/PorkRibs.webp";
import Stew from "../../../public/DealsImages/Stew.webp";
import Oxtail from "../../../public/DealsImages/Oxtail.webp";
import Ossobuco from "../../../public/DealsImages/Ossobuco.webp";
import Catfish from "../../../public/DealsImages/Catfish.webp";
import Mudfish from "../../../public/DealsImages/Mudfish.webp";
import Nileperch from "../../../public/DealsImages/Nileperch.webp";
import Makayabu from "../../../public/DealsImages/Makayabu.webp";
import Kienyeji from "../../../public/DealsImages/Kienyeji.webp";
import Maboke from "../../../public/DealsImages/Maboke.webp";
import MabokeNzombo from "../../../public/DealsImages/MabokeNzombo.webp";
import MabokeNgulu from "../../../public/DealsImages/MabokeNgulu.webp";

import { TourDataType } from "../tourpage/TourData";

export const ChefData: TourDataType[] = [
  {
    subTitle: "Restaurants",
    content: [
      {
        name: "Fish Plate Size",
        imagePath: WholeFish,
        price: 5,
      },
      {
        name: "Fish medium plate",
        imagePath: MediumFish,
        price: 6,
      },
      {
        name: "Fish Large plate",
        imagePath: FishLarge,
        price: 9,
      },
      {
        name: "Chicken legs 1kg",
        imagePath: ChickenLegs,
        price: 10,
      },
      {
        name: "Full Chicken",
        imagePath: FullChicken,
        price: 12,
      },
      {
        name: "Mbuzi 1KG",
        imagePath: Mbuzi,
        price: 10.0,
      },
      {
        name: "Beef 1KG",
        imagePath: Beef,
        price: 10.0,
      },
      {
        name: "Pork Ribs",
        imagePath: PorkRibs,
        price: 12.0,
      },
      {
        name: "Stew Portion",
        imagePath: Stew,
        price: 5, // No price provided
      },
      {
        name: "Oxtail",
        imagePath: Oxtail,
        price: 5.0,
      },
      {
        name: "Ossobuco",
        imagePath: Ossobuco,
        price: 5.0,
      },
      {
        name: "Catfish",
        imagePath: Catfish,
        price: 6.0,
      },
      {
        name: "Mudfish",
        imagePath: Mudfish,
        price: 7.0,
      },
      {
        name: "Nile Perch",
        imagePath: Nileperch,
        price: 9.0,
      },
      {
        name: "Makayabu Salt Fish",
        imagePath: Makayabu,
        price: 5.0,
      },
      {
        name: "Chicken Kienyeji",
        imagePath: Kienyeji,
        price: 14.0,
      },
      {
        name: "Maboke-Ngolo",
        imagePath: Maboke,
        price: 6.0,
      },
      {
        name: "Maboke-Nzombo",
        imagePath: MabokeNzombo,
        price: 6.0,
      },
      {
        name: "Maboke-Ngulu",
        imagePath: MabokeNgulu,
        price: 8.0,
      },
    ],
  },
  {
    subTitle: "Meal Prep",
    content: [
      {
        name: "Meal Prep-1",
        imagePath: Fish,
        price: 10,
      },
      {
        name: "Meal Prep-2",
        imagePath: MealPrep,
        price: 5,
      },
    ],
  },
  {
    subTitle: "Private chef",
    content: [
      {
        name: "Private chef-1",
        imagePath: Chef,
        price: 20,
      },
    ],
  },
];
