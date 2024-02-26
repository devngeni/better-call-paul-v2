import Girrafe from "../../public/TimelineImages/giraffe.png";
import Museum from "../../public/TimelineImages/museum.png";
import Beads from "../../public/TimelineImages/beads.png";
import DropOff from "../../public/TimelineImages/icon.png";
import { FAQItem } from "@/components/productspage/FaqsSection";

export const IntroData = [
  {
    subtitle: "Daily",
    price: 20,
  },
  {
    subtitle: "Weekly",
    perMonth: "per month",
    price: 20,
  },
  {
    subtitle: "Monthly",
    perMonth: "per month",
    price: 20,
  },
];

export const SwipperDataTours = [
  { id: 1, imageUrl: "/DealsImages/Giraffe.webp" },
  { id: 2, imageUrl: "/DealsImages/Giraffe.webp" },
  { id: 3, imageUrl: "/DealsImages/Giraffe.webp" },
];

export const Timelines = [
  {
    icon: Girrafe,
    text: "Booking Process",
    content:
      "Customers must provide a valid driver's license and ID during the booking process.",
  },
  {
    icon: Museum,
    text: "Document Submission",
    content:
      "Customers are required to submit a clear copy of their driver's license and ID before confirming the booking.",
  },
  {
    icon: Beads,
    text: "Age Requirement",
    content:
      "Drivers must meet the minimum age requirement which is 18 years old. ",
  },
  {
    icon: DropOff,
    text: "Vehicle Inspection",
    content:
      "We will conduct a thorough inspection of the vehicle with a company representative ",
  },
  {
    icon: DropOff,
    text: "Insurance Coverage",
    content:
      "All vehicles are insured. Optional insurance upgrades may be available for added peace of mind. ",
  },
  {
    icon: Museum,
    text: "Driving Regulations",
    content:
      "Any traffic violations or fines incurred during the rental period are the responsibility of the renter.",
  },
];

export const faqs: FAQItem[] = [
  {
    text: "Visitor guidelines",
    content: [
      {
        question: "Arrival Time",
        answer: "Please be ready for pickup at the scheduled time.",
      },
      {
        question: "Comfortable Attire",
        answer:
          "Dress comfortably, considering the day's activities. We recommend sturdy footwear for walking and exploring various stops on the itinerary.",
      },
      {
        question: "Camera Ready",
        answer:
          "Don't forget your camera or smartphone! You'll want to capture the picturesque moments and unique experiences throughout the journey.",
      },
      {
        question: "Weather Preparedness",
        answer:
          "Check the weather forecast for the day and bring any necessary items, such as sunscreen, hats, or umbrellas, to ensure your comfort.",
      },
      {
        question: "Interaction Etiquette",
        answer:
          "When interacting with the giraffes and at other stops, please follow the guidelines provided by our guides for a safe and respectful experience.",
      },
      {
        question: "Artifact Appreciation",
        answer:
          "Respect the historical artifacts and cultural items you encounter, especially at the Karen Blixen Museum and Kazuri Beads Factory. Feel free to ask questions to enhance your understanding.",
      },
      {
        question: "Souvenir Shopping",
        answer:
          "At the Kazuri Beads Factory and Karen neighborhood, you'll have opportunities for unique souvenirs. Cash or cards may be needed, so be prepared.",
      },
      {
        question: "Snack and Hydration",
        answer:
          "While we strive to provide a comfortable journey, it's advisable to bring a water bottle and snacks to stay refreshed throughout the day.",
      },
      {
        question: "Guidance from Guides",
        answer:
          "Follow the instructions of our knowledgeable guides. They are there to ensure your safety, answer questions, and make the experience enjoyable for everyone.",
      },
      {
        question: "Final Drop-off",
        answer:
          "At the end of the day, our team will drop you off at your residence. Ensure you have all your belongings and let us know if there's anything else we can assist you with.",
      },
    ],
  },
  {
    text: "What to expect",
    content: [
      "Historical Immersion",
      "Wildlife Connection",
      "Cultural Fusion in Karen",
      "Comfort and Convenience",
      "Knowledgeable Guides",
      "Photo Opportunities",
      "Memorable Souvenirs",
      "Doorstep Drop-off & pickup",
      "Interaction and Participation",
    ],
  },
  {
    text: "Cancellation Policy",
    content: ["At least 24 hours before trip time"],
  },
  {
    text: "FAQs",
    content: [
      {
        question: "Q1: What is included in the Out of Africa Experience?",
        answer:
          "The package includes a visit to the Karen Blixen Museum, interactions with Rothschild giraffes, a stroll in the Karen neighbourhood, and more. Entrance fees are paid directly at the gate by guests.",
      },
      {
        question: "Q2: Are meals included in the Out of Africa Experience?",
        answer:
          "A: Meals are not included, but there are opportunities to enjoy local cuisine at cafes during the Karen neighborhood stroll.",
      },
      {
        question: "Q3: Is transportation provided?",
        answer:
          "A: Yes, comfortable transportation is provided, including pickup from your residence and drop-off at the end of the experience.",
      },
      {
        question: "Q4: How long is the Out of Africa Experience?",
        answer: "A: This is a full day experience. ",
      },
      {
        question: "Q5: Can I bring children on the Out of Africa Experience?",
        answer:
          "A: Yes, the experience is family-friendly. However, please consider the nature of the activities for younger participants.",
      },
    ],
  },
];
