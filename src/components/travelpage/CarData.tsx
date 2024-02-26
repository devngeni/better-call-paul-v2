import V8 from "../../../public/DealsImages/V8.png";
import Prado from "../../../public/DealsImages/Prado.png";
import Benz from "../../../public/DealsImages/Benz.webp";
import Axios from "../../../public/DealsImages/Axios.webp";
import Noah from "../../../public/DealsImages/Noah.webp";
import Alphard from "../../../public/DealsImages/Alphard.png";
import Airport from "../../../public/DealsImages/Airport.png";

import { TourDataType } from "../tourpage/TourData";

export const vehiclesData: TourDataType[] = [
  {
    subTitle: "Airport Transfer",
    content: [
      {
        name: "Airport Transfer Services",
        description:
          "Start your trip without any hassles. Our team ensures timely pickups from the airport, delivering you safely to your accommodation.",
        imagePath: Airport,
        price: 45,
      },
    ],
  },
  {
    subTitle: "Car Hire",
    content: [
      {
        name: "Toyota Landcruiser V8",
        description: "A robust and off-road capable luxury SUV",
        imagePath: V8,
        price: 210,
      },
      {
        name: "Toyota Prado",
        description:
          "Toyota Prado combines ruggedness with luxury features for the discerning traveller. ",
        imagePath: Prado,
        price: 100,
      },
      {
        name: "Mercedes C200 Saloon",
        description: "A blend of luxury and performance",
        imagePath: Benz,
        price: 150,
      },
      {
        name: "Toyota Axio Saloon",
        description: "Known for its fuel efficiency and practicality",
        imagePath: Axios,
        price: 25,
      },
      {
        name: "Toyota Noah",
        description:
          "Spacious and family-friendly minivan with versatile seating configurations",
        imagePath: Noah,
        price: 55,
      },
      {
        name: "Toyota Alphard",
        description:
          "Luxurious and stylish minivan known for its premium features and comfort",
        imagePath: Alphard,
        price: 100,
      },
    ],
  },
  {
    subTitle: "Chauffeur",
    content: [
      {
        name: "Chauffeured Toyota Landcruiser V8",
        description: "A robust and off-road capable luxury SUV",
        imagePath: V8,
        price: 210,
      },
      {
        name: "Chauffeured Minivan",
        description:
          "Spacious and family-friendly minivan with versatile seating configurations",
        imagePath: Noah,
        price: 55,
      },
    ],
  },
];
