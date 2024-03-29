import { SectionType } from "@/types";


export const FooterLinksList: SectionType[] = [
    {
      title: "Company",
      links: [
        { name: "Contact", url: "https://api.whatsapp.com/send?phone=254794701568" },
        {name:"Host",url:"host"}
      ],
    },
    {
      title: "Discover",
      links: [
        { name: "Term of Use", url: "/terms-and-conditions" },
        { name: "Privacy", url: "/privacy-policy" },
        { name: "Cookie Policy", url: "/cookie-policy" },
        { name: "Partners", url: "#" },
        { name: "Affiliates", url: "#" },
      ],
    },
    {
      title: "Products",
      links:[
        {name: "Tours & Experiences", url:"/tour-and-experience"},
        {name: "Travel Concierge & Services", url:"/travel-and-coincierge"},
        {name: "Private chef & Meal Prep", url:"/private-chef-meal-prep"},
        {name: "Drinks", url:"/drinks"},
        {name: "Wellness & Grooming", url:"/fitness-and-wellness"},
        {name: "Shopping & grocery runs", url:"/services/shopping"},
        {name: "Nanny service", url:"/services/nanny-service"},
        {name: "Rentables", url:"/services/rentable"},
        {name: "Gift shop", url:"/services/gift-shop"},
        {name: "Luggage Shop", url:"/services/luggage"},
        {name: "Property Management", url:"/services/property-management"},
        {name: "Housekeeping", url:"/services/house-keeping"},
      ]
    }
  ];
  