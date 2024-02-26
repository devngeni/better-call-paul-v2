import Prep from "../../../public/DealsImages/prep.png";
import Bhajia from "../../../public/DealsImages/bhajia.webp";
import Jajemelo from "../../../public/DealsImages/jajemelo.webp";
import Meal from "../../../public/DealsImages/food.png";
import Chef from "../../../public/DealsImages/chef.png";

export const PrivateChefData = {
//   tabs: [
//     { name: "Restaurants" },
//     { name: "Meal prep" },
//     { name: "Private chef" },
//   ],
  //   title: "Private Chef Meal Prep & Dinner",
  //   activeTab: "Tab1",
  //   content: "Mamy Mbuta",
  //   text: "Kenya makes a perfect holiday destination. Whether you’re looking to relax in an unspoiled, picture book location by the sea or discover jaw-dropping scenery and incredible wildlife, in the savannah, you can do it in this magnificent country.",
  //   backgroundImage: "/DealsImages/food.png",
  hotelsData: [
    {
      subTitle: "Restaurants",
      content: [
        {
          content: "Mamy Mbuta",
          name: "Your home of West-African Cuisines",
          hotelDescription: "Your home of West-African Cuisines",
          image: Prep,
        },
        {
          content: "Ranalo Foods",
          hotelDescription: "Enjoy Kenyan kienjeji meals",
          name: "Title 1",
          image: Chef,
        },
        {
          content: "Jajamelo",
          name: "Your home of West-African Cuisines",
          hotelDescription: "Buy 1, get 2 pizzas every Tuesday",
          image: Jajemelo,
        },
        {
          content: "Maritas Bhajia",
          hotelDescription: "Fast food outlet",
          name: "Title 1",
          image: Bhajia,
        },
      ],
    },
    {
      subTitle: "Meal prep",
      content: [
        {
          name: "Title 2",
          hotelDescription: "Title 2",
          image: Meal,
          content: "Content 2",
        },
      ],
    },
    {
      subTitle: "Private chef",
      content: [
        {
          name: "Title 3",
          hotelDescription: "Title 2",
          image: Chef,
          content: "Content 3",
        },
      ],
    },
  ],
};


