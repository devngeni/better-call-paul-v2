import { CommonHotel } from "@/components/commons";
import { GetServerSideProps } from "next";
import Chef from "../../../public/DealsImages/chef.png";
import Prep from "../../../public/DealsImages/detergent.webp";
import Bhajia from "../../../public/DealsImages/bhajia.webp";
import Jajemelo from "../../../public/DealsImages/jajemelo.webp";
import Meal from "../../../public/DealsImages/food.png";
import { AirTrIcon } from "../../../public/Icons";
import BottomNavigation from "@/components/Navbar/BottomNav";
import {
  groupRentablesSubtitle
} from "@/utils/groupSubTitles";
import Skeleton from "react-loading-skeleton";
import SkeletonLoader from "@/components/commons/Skeleton";

export const getIconComponent = (iconName: any) => {
  switch (iconName) {
    case "FaSuitcase":
      return <AirTrIcon />;
    default:
      return null;
  }
};

const fetchDataBasedOnSlug = async (
  slug: string,
  getServiceDataByCategory: any
) => {
  let data: any = {};
  switch (slug) {
    case "gift-shop":
      const giftShopdata = formattedData(getServiceDataByCategory("GIFTSHOP"));
      data = {
        tabs: [{ name: "Available Gifts" }],
        title: "Giftshop",
        activeTab: "Tab1",
        text: "Explore our Nairobi gift shop for unique Kenyan souvenirs - crafts, jewelry, fabrics, and more, capturing Kenya's essence.",
        backgroundImage: "/GiftshopImages/Filson.png",
        hotelsData: [
          {
            subTitle: giftShopdata[0].subTitle,
            content: giftShopdata[0].content,
          },
        ],
        faqsTitle: "Gift Shop Service",
        faqsData: [
          {
            text: "User Guidelines",
            content: [
              {
                question: "Personalized Assistance",
                answer:
                  "Our team is ready to assist you in finding the perfect gift. If you need personalized recommendations or have specific preferences, feel free to ask for assistance.",
              },
              {
                question: "Bespoke Gift Wrapping",
                answer:
                  "Enhance the presentation of your gift with our bespoke gift-wrapping service. Choose from an array of wrapping options to add a touch of sophistication to your thoughtful gesture.",
              },
              {
                question: "Express Your Sentiments",
                answer:
                  "The BCP Gift Shop is designed to help you express your sentiments. Whether it's gratitude, love, or celebration, find the perfect gift to convey your feelings.",
              },
            ],
          },
          {
            text: "What to Expect",
            content: [
              {
                question: "Unique and Thoughtful Gifts",
                answer:
                  "Expect a selection of unique and thoughtful gifts curated to cater to various tastes and occasions. Our gift shop is a haven for finding that special something.",
              },
              {
                question: "Floral Beauty",
                answer:
                  "Immerse yourself in the beauty of our floral collection. Each bouquet is carefully crafted to add a touch of nature's elegance to your chosen gift.",
              },
              {
                question: "Quality and Durability",
                answer:
                  "Choose from items that reflect quality and durability. Our gift shop features products that are not only aesthetically pleasing but also designed to stand the test of time.",
              },
            ],
          },
          {
            text: "FAQs",
            content: [
              {
                question:
                  "What types of gifts are available in the BCP Gift Shop?",
                answer:
                  "Our gift shop offers a diverse range of items, including souvenirs, special collections, and more. Explore our selection to find the perfect gift for your occasion.",
              },
              {
                question:
                  "Is the gift-wrapping service available for all purchases?",
                answer:
                  "Yes, our bespoke gift-wrapping service is available for all purchases, adding an extra layer of charm to your chosen gift.",
              },
              {
                question:
                  "Can I customize a bouquet from the floral collection?",
                answer:
                  "Depending on availability, we may offer customization options for bouquets. Please inquire with our staff for details.",
              },
              {
                question: "Are the flowers in the floral collection fresh?",
                answer:
                  "Yes, our floral collection features fresh and carefully selected flowers to ensure the highest quality.",
              },
            ],
          },
        ],
        showFAQ: true,
      };
      break;
    case "house-keeping":
      const houseKeepingData = getServiceDataByCategory("HOUSEKEEPING");
      data = {
        tabs: [{ name: "House Keeping" }],
        title: "House Keeping",
        backgroundImage: "/houseKeeping2.png",
        hotelsData: [
          {
            subTitle: houseKeepingData[0].subTitle,
            content: [
              {
                content: "House Keeping",
                hotelDescription:
                  "We ensure the cleanliness and maintenance of the property is crucial for a positive guest experience. Our commitment to pristine cleaning ensures that our guests feel comfortable and safe during their stay.",
                image: houseKeepingData[0].content[0].imagePath,
                price: "10",
                info: "Hello Paul, my space needs a clean up, can I book your housekeeping services?",
              },
            ],
          },
        ],
        faqsTitle: "House Keeping Service",
        faqsData: [
          {
            text: "User Guidelines",
            content: [
              {
                question: "Respecting Your Privacy",
                answer:
                  "Our housekeeping team respects your privacy. We will coordinate with you to schedule cleaning and maintenance activities at times that are convenient for you.",
              },
              {
                question: "Communication is Key",
                answer:
                  "If you have specific preferences, need additional services, or have any concerns about cleanliness, feel free to communicate with our housekeeping team. Your feedback is valuable.",
              },
              {
                question: "Secure and Trustworthy",
                answer:
                  "Rest assured that our housekeeping staff is vetted, trained, and committed to providing a secure and trustworthy service. Your belongings and the integrity of your space are of the utmost importance to us.",
              },
            ],
          },
          {
            text: "What to Expect",
            content: [
              {
                question: "Immaculate Cleanliness",
                answer:
                  "Experience a property that exudes cleanliness and freshness. Our housekeeping team goes above and beyond to create a pristine environment for your comfort.",
              },
              {
                question: "Efficiency and Timeliness",
                answer:
                  "Count on our housekeeping team to work efficiently and maintain a timely schedule. We understand the importance of your time and strive to complete services promptly.",
              },
              {
                question: "Proactive Maintenance",
                answer:
                  "Anticipate a proactive approach to maintenance. Our team identifies and addresses potential issues before they become major concerns, ensuring a seamless and enjoyable stay.",
              },
            ],
          },
          {
            text: "FAQs",
            content: [
              {
                question: "How often is housekeeping provided?",
                answer:
                  "Housekeeping frequency can be customized based on your preferences. Common options include daily, every other day, or as needed.",
              },
              {
                question: "Can I request additional cleaning services?",
                answer:
                  "Absolutely! Feel free to communicate with our housekeeping team to request additional services or address specific cleaning needs.",
              },
              {
                question: "Are housekeeping staff vetted and trained?",
                answer:
                  "Yes, our housekeeping staff undergoes thorough vetting and training to ensure professionalism, trustworthiness, and a high standard of service.",
              },
              {
                question:
                  "What measures are in place to ensure the security of my belongings?",
                answer:
                  "Our housekeeping team is trained to respect guest privacy and uphold the highest standards of security. If you have any specific concerns, please communicate with us, and we will address them accordingly.",
              },
            ],
          },
        ],
        showFAQ: true,
      };
      break;
    case "nanny-service":
      const nannyData = getServiceDataByCategory("NANNY SERVICE");
      data = {
        tabs: [{ name: "Nanny Services" }],
        title: "Nanny Services",
        text: "Families traveling with children can hire a certified nanny from BCP Concierge Services. Parents can enjoy leisure or explore local attractions, confident that their children are in safe hands. Nannies are trained professionals with experience across age groups, ensuring proper care and attention.",
        backgroundImage: "/DealsImages/nanny1.jpg",
        hotelsData: [
          {
            subTitle: nannyData[0].subTitle,
            content: [
              {
                content: nannyData[0].content[0].name,
                hotelDescription: nannyData[0].content[0].description,
                image: nannyData[0].content[0].imagePath,
                price: nannyData[0].content[0].price,
                info: "HelloPaul, looking for quality childcare. Can I explore your nanny services?",
              },
            ],
          },
        ],
        faqsTitle: "Nanny Services Inquiries",
        faqsData: [
          {
            text: "What to Expect",
            content: [
              {
                question: "Initial Consultation",
                answer:
                  "We conduct an initial consultation to understand your family's needs, preferences, and to match you with a nanny who aligns with your expectations.",
              },
              {
                question: "Meet-and-Greet",
                answer:
                  "Prior to formal engagement, you'll have the opportunity to meet your assigned nanny to ensure compatibility and comfort.",
              },
              {
                question: "Transparent Communication",
                answer:
                  "BCP Nanny Service values transparent communication. Regular updates on your child's activities, meals, and overall well-being are provided.",
              },
              {
                question: "Peace of Mind",
                answer:
                  "Enjoy peace of mind knowing that your children are in the hands of trained professionals who prioritise their safety, happiness, and development.",
              },
            ],
          },
          {
            text: "FAQs",
            content: [
              {
                question: "How are BCP Nannies selected and trained?",
                answer:
                  "BCP Nannies undergo a rigorous selection process and receive comprehensive training, including safety, first aid, and child development.",
              },
              {
                question:
                  "Can I meet the assigned nanny before the formal engagement?",
                answer:
                  "Yes, a meet-and-greet is arranged to ensure compatibility and comfort between your family and the assigned nanny.",
              },
              {
                question: " What age groups do BCP Nannies cater to?",
                answer:
                  "BCP Nannies are experienced in caring for children of all age groups, from infants to teenagers.",
              },
            ],
          },
        ],
        showFAQ: true,
      };
      break;
    case "property-management":
      const propertyMgt = getServiceDataByCategory("PROPERTY MANAGEMENT");

      data = {
        tabs: [{ name: "Property Management" }],
        title: "Property Management",
        text: "Streamline your property rental experience by utilizing management services that handle reservations, maintenance, and tenant communication, providing peace of mind for property owners.",
        backgroundImage: "/DealsImages/guests.jpg",
        hotelsData: [
          {
            subTitle: propertyMgt[0].subTitle,
            content: [
              {
                content: propertyMgt[0].content[0].name,
                hotelDescription: propertyMgt[0].content[0].description,
                image: propertyMgt[0].content[0].imagePath,
                info: "Hello Paul, I need efficient property management. Can you assist me?",
              },
            ],
          },
        ],
        showAd: true,
        faqsTitle: "Property Management Inquiries",
        faqsData: [
          {
            text: "User Guidelines",
            content: [
              {
                question: "Initial Contact",
                answer:
                  "Contact BCP Property Management through [Contact Information] to express your interest in enlisting our services.",
                answer2:
                  "Provide essential property details, including location, type, and any specific requirements.",
              },
              {
                question: "Onboarding Process",
                answer:
                  "Expect a smooth onboarding process facilitated by our dedicated team. We will guide you through the necessary documentation and agreements.",
                answer2:
                  "Provide any additional information needed for a comprehensive understanding of your property.",
              },
              {
                question: "Transparent Communication",
                answer:
                  "Experience transparent and regular communication throughout our partnership.",
                answer2:
                  "Regular updates on property performance, occupancy rates, and any relevant matters will be provided.",
              },
              {
                question: "Property Access and Inventory",
                answer:
                  "Ensure the availability of detailed property access instructions for tenants.",
                answer2:
                  "Collaborate with our team to establish and maintain an accurate inventory of your property.",
              },
              {
                question: "Maintenance and Repairs",
                answer:
                  "Report any maintenance issues promptly for efficient resolution.",
                answer2:
                  "Benefit from our proactive approach to property maintenance to uphold its condition and value.",
              },
              {
                question: "Financial Transactions",
                answer:
                  "Expect transparent financial transactions with detailed reports on rental income, expenses, and any other financial aspects.",
                answer2:
                  "Our commitment is to optimise your investment returns while ensuring financial clarity.",
              },
              {
                question: "Tenant Screening and Acquisition",
                answer:
                  "Trust our team to conduct thorough tenant screening processes to secure reliable occupants.",
                answer2:
                  "Participate in the tenant acquisition process, providing input on tenant preferences and any specific criteria.",
              },
              {
                question: "Legal Compliance",
                answer:
                  "Rely on BCP Property Management to ensure legal compliance with all property management regulations and requirements.",
                answer2:
                  "Stay informed about any changes in regulations affecting your property.",
              },
              {
                question: "Tailored Solutions",
                answer:
                  "Every property is unique. Expect personalized solutions tailored to meet the specific needs and goals of your property.",
                answer2:
                  "Discuss any specific preferences, guidelines, or expectations you may have for your property.",
              },
              {
                question: "Dedicated Support:",
                answer:
                  "Enjoy dedicated support from our team. Reach out for any inquiries, updates, or assistance.",
                answer2:
                  "We are committed to providing a professional and reliable property management experience.",
              },
            ],
          },
          {
            text: "What to expect",
            content: [
              {
                question: "Dedicated Management",
                answer:
                  "Expect a dedicated team overseeing all facets of property management, ensuring a seamless and professional experience.",
                answer2:
                  "BCP Property Management is committed to providing exceptional service tailored to your needs.",
              },
              {
                question: "Meticulous Maintenance",
                answer:
                  "Enjoy the assurance of meticulous property maintenance, ensuring a comfortable and charming living experience.",
                answer2:
                  "Our team is proactive in addressing any maintenance issues promptly and efficiently.",
              },

              {
                question: "Kenyan Hospitality",
                answer:
                  "Experience a touch of Kenyan hospitality in every interaction with BCP Property Management.",
                answe2:
                  "Our commitment goes beyond managing properties; it's about creating sanctuaries infused with warmth, authenticity, and resilience.",
              },
              {
                question: "Investment Guarantee",
                answer:
                  "By entrusting us with your investments, you are guaranteeing a professional management experience.",
                answer2:
                  "Become part of a larger narrative that speaks of Nairobi’s warmth, authenticity, and resilience.",
              },
            ],
          },

          {
            text: "FAQS",
            content: [
              {
                question:
                  "How do I make a reservation with BCP Property Management?",
                answer:
                  "Reservations can be initiated by contacting our team through +254794701568",
              },
              {
                question: "What sets BCP Property Management apart?",
                answer:
                  "BCP Property Management distinguishes itself with dedicated management, meticulous maintenance, and a touch of Kenyan hospitality.",
              },

              {
                question: "How does the revenue-sharing model work at BCP?",
                answer:
                  "Our revenue-sharing model is designed to maximise your revenue potential, based on the number of units in your property, ensuring a fair and tailored approach.",
              },
              {
                question: "How many properties does BCPmanage?",
                answer:
                  "Trusted Homes currently manages a portfolio of 20 properties.",
              },
            ],
          },
        ],
        showFAQ: true,
      };
      break;
    case "luggage":
      const luggageData = getServiceDataByCategory("LAUGGAGE SHOP");

      data = {
        tabs: [{ name: "Luggage Services", icon: "AirTrIcon" }],
        title: "Luggage Storage",
        text: "Offering luggage storage is a valuable amenity, especially for guests arriving early or departing late. It allows them to securely store their belongings before check-in or after check-out, enabling them to make the most of their time in the city.",
        backgroundImage: "/Luggages.png",
        hotelsData: [
          {
            subTitle: "Luggage Services",
            content: [
              {
                content: luggageData[0].content[0].name,
                hotelDescription: luggageData[0].content[0].description,
                image: luggageData[0].content[0].imagePath,
                price: luggageData[0].content[0].price,
                info: "Hello Paul, I’m traveling soon. Can I store my luggage hassle free?",
                imageHeight: 250,
                imageWidth: 500,
              },
            ],
          },
        ],
        faqsTitle: "Luggage Storage Service",
        faqsData: [
          {
            text: "User Guidelines",
            content: [
              {
                question: "Drop-off and Retrieval",
                answer:
                  "Guests can drop off their luggage at the designated storage area during specified hours.",
                answer2:
                  "While walk-ins are welcome, to guarantee storage availability, consider booking in advance, especially during peak times.",
              },
              {
                question: "Booking in Advance",
                answer:
                  "Guests can drop off their luggage at the designated storage area during specified hours.",
              },
              {
                question: "Valuables and Restrictions",
                answer:
                  "Avoid storing highly valuable items or restricted goods as per the storage facility's guidelines.",
                answer2:
                  "Inform the staff of any special considerations or fragile items for proper handling.",
              },
              {
                question: "Duration of Storage",
                answer:
                  "Luggage can typically be stored for a specified duration. Be mindful of the time to avoid additional charges for extended storage.",
              },
              {
                question: "Security Measures",
                answer:
                  "Rest assured that the storage area is equipped with security measures to ensure the safety of belongings.",
                answer2:
                  "Follow any additional security protocols provided by the storage facility.",
              },
              {
                question: "Payment and Fees",
                answer:
                  "Familiarise yourself with the payment options and any associated fees for the luggage storage service.",
                answer2:
                  "Keep the receipt for reference during the payment process.",
              },
            ],
          },
          {
            text: "FAQs",
            content: [
              {
                question: "What is the purpose of a luggage storage service?",
                answer:
                  "The luggage storage service allows guests to securely store their belongings before check-in or after check-out, providing flexibility in their travel plans.",
              },
              {
                question: "How do I use the luggage storage service?",
                answer:
                  "Simply drop off your luggage at the designated storage area during operational hours. Retrieve it by presenting the provided receipt or identification.",
              },
              {
                question: "Can I book luggage storage in advance?",
                answer:
                  "Yes, booking in advance is recommended to ensure availability, especially during peak times.",
              },
              {
                question: "Is walk-in storage available?",
                answer:
                  "The storage area is equipped with security measures to ensure the safety of stored belongings.",
              },
              {
                question:
                  "Are there any restrictHow do I use the luggage storage service?ions on what can be stored?",
                answer:
                  "While most items are accepted, avoid storing highly valuable or restricted items. Check with the staff for any specific restrictions.",
              },
              {
                question: "How much does luggage storage cost?",
                answer:
                  "Familiarize yourself with the pricing structure, and keep in mind that fees may vary based on factors such as duration and size of the luggage.",
              },
              {
                question: "Is there a time limit for luggage storage?",
                answer:
                  "Luggage storage is typically available for a specified duration. Be mindful of the time to avoid additional charges for extended storage.",
              },
            ],
          },
        ],
        showFAQ: true,
      };
      break;
    case "shopping":
      const shoppingData = getServiceDataByCategory("SHOPPING & GROCERY RUNS");

      data = {
        tabs: [{ name: "Shopping" }],
        title: "Shopping & Grocery runs",
        text: `Need something in Nairobi? We’ll find it for you and deliver in minutes. Order from the
        comfort of your home and we will bring it to your doorstep. Easy and safe delivery. Card
        payment is available.`,
        backgroundImage: "/groceryBg.jpg",
        hotelsData: [
          {
            subTitle: "Shopping",
            content: [
              {
                content: shoppingData[0].content[0].name,
                hotelDescription: shoppingData[0].content[0].description,
                image: shoppingData[0].content[0].imagePath,
                info: `Hello Paul, I’m running low on groceries. Can you handle that for me?`,
                price: shoppingData[0].content[0].price,
              },
            ],
          },
        ],
        showFAQ: true,
        faqsTitle: "More Details",
        faqsData: [
          {
            text: "How It Works:",
            content: [
              {
                question: "Place Your Order:",
                answer:
                  "Contact our dedicated shopping service team to place your order. Provide a detailed list of items you need, specifying brands, quantities, and any specific preferences.",
              },
              {
                question: "Customized Shopping:",
                answer:
                  "Our experienced team will carefully curate your shopping list, ensuring that every item meets your expectations. We'll consider your preferences, budget, and any special requirements.",
              },
              {
                question: "Confirm and Schedule:",
                answer:
                  "Once your order is ready, we'll confirm the list with you and schedule a convenient delivery time. We aim for flexibility to fit into your busy schedule.",
              },
              {
                question: "Contactless Delivery:",
                answer:
                  "Enjoy the convenience of contactless delivery. Our team will ensure that your groceries and items are delivered to your doorstep with care and in perfect condition.",
              },
            ],
          },
          {
            text: "User Guidelines:",
            content: [
              {
                question: "Ordering Process:",
                answer:
                  "Contact our shopping service team through [Contact Information]. Clearly communicate your shopping list, including any specific preferences or brands.",
              },
              {
                question: "Delivery Location:",
                answer:
                  "Provide accurate details for the delivery location. Ensure someone is available to receive the delivery during the scheduled time.",
              },
              {
                question: "Payment Options:",
                answer:
                  "Familiarize yourself with the available payment options. Payment can often be made upon delivery or through other convenient methods.",
              },
              {
                question: "Special Requests:",
                answer:
                  "If you have any special requests or additional instructions, communicate them during the ordering process to ensure a personalized shopping experience.",
              },
            ],
          },
          {
            text: "What to Expect:",
            content: [
              {
                question: "Personal Shopper:",
                answer:
                  "Benefit from the expertise of our personal shoppers who are dedicated to fulfilling your shopping needs with precision.",
              },
              {
                question: "Quality Assurance:",
                answer:
                  "Expect top-notch quality as we meticulously select items to meet your specifications. We prioritize freshness, quality, and adherence to your preferences.",
              },
              {
                question: "Timely Delivery:",
                answer:
                  "Count on us for timely deliveries, allowing you to focus on what matters most while we take care of your shopping needs.",
              },
              {
                question: "Flexible Scheduling:",
                answer:
                  "Enjoy the flexibility of scheduling deliveries that align with your routine. We understand the importance of time management.",
              },
            ],
          },
          {
            text: "Ordering FAQs:",
            content: [
              {
                question: "How do I place an order?",
                answer:
                  "Contact our shopping service team through [Contact Information] to place your order.",
              },
              {
                question:
                  "Can I request items not on the standard shopping list?",
                answer:
                  "Absolutely! We welcome custom requests to ensure your order is tailored to your needs.",
              },
            ],
          },
          {
            text: "Delivery FAQs:",
            content: [
              {
                question: "What is the delivery timeframe?",
                answer:
                  "We aim for flexibility. Discuss and schedule a convenient delivery time with our team.",
              },
              {
                question: "Is contactless delivery available?",
                answer:
                  "Yes, we offer contactless delivery for your safety and convenience.",
              },
            ],
          },
          {
            text: "Payment FAQs:",
            content: [
              {
                question: "What payment options are available?",
                answer:
                  "Payment options may include cash on delivery or other convenient methods. Confirm with our team during the ordering process.",
              },
              {
                question: "Are there any additional fees for the service?",
                answer:
                  "Our pricing is transparent. Any additional fees, if applicable, will be communicated during the ordering process.",
              },
            ],
          },
        ],
      };
      break;
    case "rentable":
      const rentableData = groupRentablesSubtitle(
        getServiceDataByCategory("RENTABLES")
      );

      console.log("rentableData", rentableData);

      data = {
        tabs: [{ name: rentableData[0].subTitle }, { name: rentableData[1].subTitle }],
        title: "Rentable Services",
        activeTab: "Rentables",
        text: "The well-being and happiness of your children are our top priorities. We understand the importance of finding a trustworthy and caring partner to assist with the unique needs of your family especially when you are on holiday. ",
        backgroundImage: "/DealsImages/rentable.webp",
        hotelsData: rentableData,
        faqsTitle: "Inquiries",
        faqsData: [
          {
            text: "How to Rent",
            content: [
              {
                question: "Inquire",
                answer:
                  "Contact our concierge team through [Contact Information] to inquire about the availability of rentable items",
              },
              {
                question: "Specify Your Needs",
                answer:
                  "Clearly communicate your requirements, including the type and quantity of items you need, and any specific preferences.",
              },
              {
                question: "Confirmation and Delivery",
                answer:
                  "Once your request is confirmed, we'll arrange for the delivery of the rentable items to your location, ensuring a hassle-free experience.",
              },
            ],
          },
          {
            text: "User Guidelines",
            content: [
              {
                question: "Booking in Advance",
                answer:
                  "While we accommodate walk-ins, to ensure the availability of your desired items, consider booking in advance, especially during peak seasons.",
              },
              {
                question: "Care and Usage",
                answer:
                  "Treat the rentable items with care, and follow any guidelines provided for their safe and proper usage.",
              },

              {
                question: "Return Process",
                answer:
                  "During the return process, ensure that all items are accounted for and returned in the condition they were received.",
              },
            ],
          },
          {
            text: "General FAQs",
            content: [
              {
                question: "What rentable items are available?",
                answer:
                  "Our offerings include high chairs, beach gear, bicycles, fitness equipment, and more. Contact our concierge for a comprehensive list.",
              },
              {
                question: "How do I inquire about rentable items?",
                answer:
                  "Contact our concierge team through [Contact Information] to inquire about the availability and booking process.",
              },

              {
                question: "Can I book rentable items on short notice?",
                answer:
                  "While walk-ins are welcome, booking in advance is recommended, especially during peak seasons, to ensure availability.",
              },
              {
                question: "Is there a delivery fee?",
                answer:
                  "Delivery fees, if applicable, will be communicated during the booking process.",
              },
              {
                question: "Are there guidelines for using the rentable items?",
                answer:
                  "Yes, please follow any guidelines provided for the care and proper usage of the rentable items.",
              },
              {
                question:
                  "What happens if an item is damaged during my rental period?",
                answer:
                  "Contact our concierge team immediately to report any damages. Additional charges may apply based on the extent of damage.",
              },
            ],
          },
        ],
        showFAQ: true,
      };
      break;
    default:
      break;
  }
  return data;
};

export function formattedData(dataItems: any[]) {
  let mergedContent: any[] = [];
  dataItems.forEach((item: any) => {
    mergedContent = mergedContent.concat(
      item.content.map((content: any) => ({
        content: content.name,
        name: content.name,
        hotelDescription: content.description,
        image: content.imagePath,
        price: content.price,
      }))
    );
  });

  return [
    {
      subTitle: dataItems[0].subTitle,
      content: mergedContent,
    },
  ];
}

export default function SlugPage({ data, fetchedData }: any) {
  if (!data) {
    return <div><SkeletonLoader /></div>;
  }

  return (
    <div>
      <BottomNavigation />
      <CommonHotel {...data} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  const res = await fetch(`${process.env.BASE_URL}/api/service`);

  const fetchedData = await res.json();

  const getServiceDataByCategory = (category: string) => {
    if (fetchedData) {
      return fetchedData.services.filter(
        (item: any) => item.category === category
      );
    }
  };

  const data = await fetchDataBasedOnSlug(
    slug as string,
    getServiceDataByCategory
  );

  return {
    props: {
      data,
      fetchedData,
    },
  };
};
