import Beads from "../../../public/TimelineImages/beads.png";
import DropOff from "../../../public/TimelineImages/icon.png";


export const AirTransportData = {
  introSectionTitle: "Airport Transfer Services",
  introSectionContent: "Airport Transfer Services ",
  introData: [
    {
      subtitle: "Operating Hours",
      price: 24 / 7,
    },
    {
      subtitle: "Transport Cost",
      price: 45,
    },
  ],
  swipperData: [
    { id: 1, imageUrl: "/DealsImages/airportservice.webp" },
    { id: 2, imageUrl: "/DealsImages/bc.jpg" },
    { id: 3, imageUrl: "/DealsImages/Lt.jpg" },
  ],
  productDetailsTitle: "Airport Transfer Services",
  productDetailsText:
    "Your trusted choice for seamless and reliable transportation to and from the airport. To ensure a stress-free experience, please review the following guidelines and familiarize yourself with our pick-up/drop-off process.",
  price: 45,
  text: "Daily Rate",
  book: "Get",
  info: "“Hello Paul, I want to travel stress-free. Can your concierge services assist me?”",
  timelines: [
    {
      icon: Beads,
      text: "Arrival at Airport",
      content:
        "After you  are done with customs and immigration, please walk out the terminal and your driver will be waiting for you holding a placard with your name on it.",
    },
    {
      icon: Beads,
      text: "Luggage Handling",
      content:
        "The chauffeur will assist with loading your luggage into the vehicle.",
    },
    {
      icon: Beads,
      text: "Airport Assistance",
      content: `Our chauffeur will navigate through the airport efficiently, ensuring a smooth exit. Follow their lead to the vehicle for a comfortable and prompt departure." `,
    },
    {
      icon: DropOff,
      text: "Drop-Off at Destination",
      content: `Upon reaching your destination, the chauffeur will assist with unloading your luggage.Ensure you have all your belongings before exiting the vehicle.`,
    },
  ],
  faqSectionData: [
    {
      text: "Guest guidelines",
      content: [
        {
          question: "Booking Confirmation",
          answer:
            "Verify the accuracy of your flight details, pick-up time, and any special requests e.g. child car seats. Our team monitors flight schedules for any changes, ensuring timely pick-ups or adjustments if needed.",
        },
        {
          question: "Punctuality",
          answer:
            "Be ready for pick-up at the specified location at least 15 minutes before the scheduled time.",
        },
        {
          question: "Luggage Assistance",
          answer: "Our chauffeurs will assist with your luggage, ensuring a smooth and hassle-free experience.Communicate any special handling instructions or requirements in advance.",
        },
        {
          question: "Contact Information",
          answer:
            "Provide a reachable phone number,",
        },
        {
          question: "Safety First",
          answer:
            "Please follow any safety guidelines provided by the chauffeur & remember to belt up.",
        },
      ],
    },
    {
      text: "FAQs",
      content: [
        {
          question: "Q1: How does BCP Airport Transfer monitor flight schedules?",
          answer:
            "A :BCP Airport Transfer closely monitors flight information provided during the reservation process and adjusts pick-up times accordingly.",
        },
        {
          question: "Q2: Can I book BCP Airport Transfer for multiple passengers?",
          answer:
            "A: Yes, BCP Airport Transfer can accommodate multiple passengers. Please specify the number of passengers during the reservation process.",
        },
        {
          question: "Q3: Are airport transfers available for all airports in the service area?",
          answer:
            "A: BCP Airport Transfer services major airports in the area, including [JKIA & Wilson Airport]. Contact us for specific inquiries.",
        },
      ],
    },
  ],
};
