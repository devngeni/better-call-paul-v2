import Image5 from "../../../public/GroomImages/Image5.png";
import Image6 from "../../../public/GroomImages/Image6.png";
import Image7 from "../../../public/GroomImages/Image7.png";
import Image8 from "../../../public/GroomImages/Image8.png";
import Image9 from "../../../public/GroomImages/Image9.png";
import Image10 from "../../../public/GroomImages/Image10.png";
import Image11 from "../../../public/GroomImages/Image11.png";
import Image12 from "../../../public/GroomImages/Image12.png";
import Image13 from "../../../public/GroomImages/Image13.png";
import Image14 from "../../../public/GroomImages/Image14.png";
import Image15 from "../../../public/GroomImages/Image15.png";
import Image16 from "../../../public/GroomImages/Image16.png";
import Image17 from "../../../public/GroomImages/Image17.png";
import Image18 from "../../../public/GroomImages/Image18.png";
import Image20 from "../../../public/GroomImages/Image20.png";
import sweedish from "../../../public/DealsImages/sweedish.png";
import couple from "../../../public/DealsImages/couple.png";

import { StaticImageData } from "next/image";
export interface TourDataType {
  subTitle: string;
  content: {
    name: string;
    description?: string;
    imagePath: StaticImageData;
    price: number | string;
  }[];
}

export const GroomData: TourDataType[] = [
  {
    subTitle: "Massage",
    content: [
      {
        name: "Sweedish Massage 90 minutes",
        description:
          "Immerse in serenity with our Swedish Massage—gentle strokes for relaxation and well-being.",
        imagePath: sweedish,
        price: 39.14
      },
      {
        name: "Couple Massage 90 minutes",
        description:
          "Deepen your connection with our Couple Massage—a shared, soothing experience.",
        imagePath: couple,
        price: 75.01
      },
      {
        name: "Face & Scalp Massage 30 minutes",
        description:
          "Rejuvenate with our tension-releasing Face & Scalp Massage—feel refreshed instantly.        ",
        imagePath: Image12,
        price: 22.83
      },
      {
        name: "Foot Pressure Massage 30 minutes",
        description:
          " Treat your feet to ultimate relaxation—therapeutic Foot Pressure for overall well-being.",
        imagePath: Image16,
        price: 22.83
      },
      {
        name: "Back of legs, neck & shoulder massage 45 minutes",
        description:
          " Targeted relief for tension—focus on legs, neck, and shoulders for personalized comfort.        ",
        imagePath: Image20,
        price: 30.66
      }
    ]
  },
  {
    subTitle: "Grooming",
    content: [
      {
        name: "Haircut inclusive wash",
        description:
          "Enjoy additional grooming services such as hair wash, trim, and other personalised treatments to enhance your overall grooming experience.",
        imagePath: Image6,
        price: 30
      },
      {
        name: "Manicure",
        description:
          "Treat your hands to a pampering session with our manicure service, including nail shaping, cuticle care, and a polish of your choice.",
        imagePath: Image7,
        price: 20
      },
      {
        name: "Pedicure",
        description:
          "Give your feet the care they deserve with our pedicure service. Relax as we tend to your nails, cuticles, and finish with a rejuvenating foot massage.",
        imagePath: Image8,
        price: 20
      },
      {
        name: "Braids Plaits",
        description:
          "Elevate your look with our braids/plaits service. Choose from a variety of styles and let our skilled stylists create a customized and trendy design.",
        imagePath: Image10,
        price: 40
      },
      {
        name: "Extra services - Wash, Trim, Retouch on request",
        description:
          "Having a multi-cultural barber and salonist available can be convenient for guests who want to maintain their grooming routine while traveling. It’s a thoughtful service that caters to personal care needs",
        imagePath: Image11,
        price: 20
      }
    ]
  },
  {
    subTitle: "Facial",
    content: [
      {
        name: "Deep Cleanse Facial 70 Mins",
        description:
          "This facial gently exfoliates and rejuvenates the skin-helps to clear problematic skin leaving it looking youthful.",
        imagePath: Image12,
        price: 35.88
      },
      {
        name: "Gentleman Facial 60 Mins",
        description:
          " For the skin that may be irritated from shaving everyday stress, or needing hydration. This deep cleansing facial will leave skin radiation and feeling completely refreshed.",
        imagePath: Image13,
        price: 29.35
      },
      {
        name: "Teen Facial 45 Mins",
        description:
          "Designed to combat adolescent breakout or simply keep the skin young and healthy. Recommended for 10-16 year olds.",
        imagePath: Image14,
        price: 29.35
      }
    ]
  },
  {
    subTitle: "Waxing",
    content: [
      {
        name: "Full legs 45 Mins",
        description: "Complete hair removal for a smooth finish.",
        imagePath: Image15,
        price: 22.83
      },
      {
        name: "Upper Legs 30 Mins",
        description: "Waxing for the upper legs area.",
        imagePath: Image16,
        price: 16.31
      },
      {
        name: "Hair Legs 30 Mins",
        description: "Hair removal for the legs.",
        imagePath: Image15,
        price: 16.31
      },
      {
        name: "Arms 20 Mins",
        description: "Waxing for the arms.",
        imagePath: Image9,
        price: 16.31
      },
      {
        name: "Half-arm 15 Mins",
        description: "Partial arm waxing for a refined look.",
        imagePath: Image9,
        price: 9.78
      },
      {
        name: "Under Arm 15 Mins",
        description: "Underarm waxing for a clean appearance.",
        imagePath: Image17,
        price: 6.52
      },
      {
        name: "Bikini Line 15 Mins",
        description: "Tidy up the bikini line for a polished look.",
        imagePath: Image16,
        price: 14.35
      },
      {
        name: "Chin 15 Mins",
        description: "Waxing for the chin area.",
        imagePath: Image18,
        price: 6.52
      },
      {
        name: "Back 20 Mins",
        description: "Effective back hair removal.",
        imagePath: Image5,
        price: 16.31
      },
      {
        name: "Chest 20 Mins",
        description: "Waxing for a smooth chest appearance.",
        imagePath: Image20,
        price: 9.78
      }
    ]
  }
];
