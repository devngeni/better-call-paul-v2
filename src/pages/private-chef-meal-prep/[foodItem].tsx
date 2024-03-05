import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import { StyledContent } from "@/components/travelpage/BottomNavbar";
import Card from "@/components/travelpage/CardComponent";
import HeroSection from "@/components/travelpage/HeroSection";
import TopNavbar from "@/components/travelpage/TopNavbar";
import { useCartDispatch } from "@/context/CartContext";
import { Layout } from "@/layout";
import { CardContainer } from "@/styles/commons";
import AdsSection from "@/styles/landingPageStyles/Ads";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import BottomNavigation from "@/components/Navbar/BottomNav";

const fetchDataBasedOnSlug = async (foodItem: any) => {
  let data: any = [];

  switch (foodItem) {
    case "k'osewe-ranalo-foods":
      data = Ksawedata;
      break;

    case "maritas":
      data = MaritasData;
      break;

    case "jajemelo":
      data = JajemeloData;
      break;
    case "mammy-mbuta":
      data = MammyMbutaData;
      break;
    default:
      break;
  }
  return data;
};

export default function SlugPage({ data }: any) {
  const router = useRouter();
  const { foodItem } = router.query;
  const [currentPath] = useState(foodItem as string);
  const handleBack = () => router.back();

  const handleClick = () => {
    return;
  };

  const dispatch = useCartDispatch();
  interface ProductType {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
  }
  const handleAddToCart = ({
    id,
    name,
    price,
    image,
    category,
    quantity,
  }: ProductType) => {
    dispatch({
      type: "ADD",
      product: {
        id,
        name,
        price,
        image,
        category,
        quantity: quantity || 1,
      },
    });
  };

  const prepareAddToCart = (product: ProductType) => () => {
    handleAddToCart(product);
  };

  return (
    <Layout
      title="Private Chef & Meal Prep"
      description="Private Chef & Meal Prep"
      navigationbar={<NavigationBar />}
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
    >
      <TopNavbar currentSelection={currentPath} onBack={handleBack} />
      <HeroSection
        backgroundImage={
          "/privateChefImages/well-done-steak-homemade-potatoes.jpg"
        }
        title={`Food, Private Chef & Meal Prep Dineout`}
        text={`Nairobi’s culinary scene is a dynamic and evolving landscape that reflects the city’s rich
        cultural diversity and international influences. The city is a melting pot of flavors, offering
        an exciting array of dining experiences that range from traditional Kenyan dishes to global
        cuisine.`}
      />
      <AdsSection />

      <StyledContent>
        {data?.map((item: any, index: number) => (
          <CardContainer key={index}>
            <Card
              id={index}
              imageSrc={item.imagePath}
              price={item.price}
              productName={item.name}
              quantity={0}
              category={currentPath}
              onAddToCart={prepareAddToCart({
                id: index,
                name: item.name,
                price: Number(item.price),
                image: item.imagePath,
                category: currentPath,
                quantity: 1,
              })}
              handleClick={handleClick}
              isLoading={true}
              loading={true}
            />
          </CardContainer>
        ))}
      </StyledContent>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { foodItem } = context.query;

  const data = await fetchDataBasedOnSlug(foodItem);

  return {
    props: {
      data,
    },
  };
};

const Ksawedata = [
  {
    name: "Fried Fish",
    description: "Fried Fish",
    price: "8.00",
    imagePath:
      "https://i.pinimg.com/236x/e9/79/1e/e9791e2bf022e0b57e3028c241695381.jpg",
  },
  {
    name: "Matumbo Fried [ngombe]",
    description: "Matumbo Fried [ngombe]",
    price: "6.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/8ba2f16bbb3c6448/640x640sq70/photo.webp",
  },

  {
    name: "Fresh fish",
    description: "Fresh fish",
    price: "8.00",
    imagePath:
      "https://i.pinimg.com/236x/88/8d/c3/888dc311e0696165e56eb2b28a15c73a.jpg",
  },
  {
    name: "Liver",
    description: "Liver",
    price: "6.00",
    imagePath:
      "https://i.pinimg.com/236x/2b/aa/4b/2baa4b10002e69438bb6255c1a870e2e.jpg",
  },
  {
    name: "Coconut fish",
    description: "Coconut fish",
    price: "8.00",
    imagePath:
      "https://i.pinimg.com/564x/45/07/d5/4507d555cf94e5b9047f1a0fc3fee2fc.jpg",
  },
  {
    name: "Fried Liver",
    description: "Fried Liver",
    price: "6.00",
    imagePath:
      "https://i.pinimg.com/564x/1a/c5/73/1ac5730869791a59ad52ed81c896d4bc.jpg",
  },
  {
    name: "Fried Fish Stew",
    description: "Fried Fish Stew",
    price: "8.00",
    imagePath:
      "https://i.pinimg.com/236x/eb/d3/1b/ebd31b795f6dcba0f99ff37aed52b531.jpg",
  },
  {
    name: "Mix Grill",
    description: "Mix Grill",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/e5/4f/06/e54f06fc2e83b99142c90599fbe2c12a.jpg",
  },
  {
    name: "Wet Fish",
    description: "Wet Fish",
    price: "8.00",
    imagePath:
      "https://i.pinimg.com/236x/c4/b6/6d/c4b66dd64665ec6f3c3de407351bd7ae.jpg",
  },
  {
    name: "Chicken Stew",
    description: "Chicken Stew",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/7a/b1/4f/7ab14f2ee92bfffa91f6ab67b6ac06a7.jpg",
  },
  {
    name: "Obambo[dry tilapia]",
    description: "Obambo[dry tilapia]",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/57/6e/96/576e96a90d59f7fb51eac239be75a000.jpg",
  },

  {
    name: "Chicken Fried",
    description: "Chicken Fried",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/7b/74/43/7b7443e918a1e23f8d716fc834f4eabe.jpg",
  },
  {
    name: "Kamongo [fresh mud fish]",
    description: "Kamongo [fresh mud fish]",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/bf/62/96/bf62966b1885d8606e146ba2696f3a64.jpg",
  },
  {
    name: "Chicken Special",
    description: "Chicken Special",
    price: "10.00",
    imagePath:
      "https://i.pinimg.com/236x/48/85/ad/4885ad15faba48cbf020f66e3e0e5922.jpg",
  },
  {
    name: "Dry kamongo{dry mud fish]",
    description: "Dry kamongo{dry mud fish]",
    price: "7.00",
    imagePath:
      "https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.6435-9/128431916_821557261720586_5435714320486221403_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=EzKorTozgQEAX8FPxaS&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfCQ8B9p1n3-pxM7mlteiukidN9mJZOjNEUwI8YiCuUG7A&oe=659911EE",
  },
  {
    name: "Chicken wings",
    description: "Chicken wings",
    price: "8.00",
    imagePath:
      "https://i.pinimg.com/236x/b7/4f/02/b74f02731c5e4b39eb40d4bb0845e19e.jpg",
  },
  {
    name: "Bude[smoked tilapia]",
    description: "Bude[smoked tilapia]",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/cc/7c/f0/cc7cf073040fa11e996daa838abce9ff.jpg",
  },
  {
    name: "Gizzards",
    description: "Gizzards",
    price: "8.00",
    imagePath:
      "https://grillax.com/wp-content/uploads/2022/11/Smoked-Gizzards-740x740.png",
  },
  {
    name: "Odol [cat fish]",
    description: "Odol [cat fish]",
    price: "7.00",
    imagePath:
      "https://lifeloveandgoodfood.com/wp-content/uploads/2023/07/Blackened-Catfish-16-1200x1200-1.jpg",
  },
  {
    name: "Kuku choma",
    description: "Kuku choma",
    price: "8.00",
    imagePath:
      "https://i.pinimg.com/236x/3f/ff/41/3fff415f3fc81e5abe177f98d4b90328.jpg",
  },
  {
    name: "Fried Beef",
    description: "Fried Beef",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/48/5a/b6/485ab6bddd9e31d193cd65738ea1bebd.jpg",
  },
  {
    name: "Akeyo",
    description: "Akeyo",
    price: "2.00",
    imagePath:
      "https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.6435-9/56496340_660209041075861_8214403954675548160_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=YMP-w19vim8AX_yWlXM&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfDLPxVCeraNnxGZSS4q9ia90rztmkewVatF9ujnKbetTw&oe=65992A38",
  },
  {
    name: "Dry Fried Beef",
    description: "Dry Fried Beef",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/9a/08/5c/9a085cda660108ecd4c1138612a4dccb.jpg",
  },
  {
    name: "Osuga",
    description: "Osuga",
    price: "2.00",
    imagePath:
      "https://1.bp.blogspot.com/-TaaCjyoViiU/V59i-0oiQOI/AAAAAAAAFI0/t48xUjsF4R0bZBtJCnoQK2d14gjHgsAegCEw/w1200-h630-p-k-no-nu/KENYA%2B1.JPG",
  },
  {
    name: "Boiled Beef",
    description: "Boiled Beef",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/91/9c/7b/919c7b6b1c531f12013c246bca061de0.jpg",
  },
  {
    name: "Kunde",
    description: "Kunde",
    price: "2.00",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSorxJbAqLKQPq-qK50DP-lvFP1R6CillTfg&usqp=CAU",
  },
  {
    name: "Boiled Ribs",
    description: "Boiled Ribs",
    price: "7.00",
    imagePath:
      "https://www.maangchi.com/wp-content/uploads/2022/02/porkribs-cleaned.jpg",
  },
  {
    name: "Mito",
    description: "Mito",
    price: "2.00",
    imagePath:
      "https://a2.cdn.japantravel.com/photo/61447-210672/738x492.6005859375!/ibaraki-food-fermentation-explorations-of-mito-210672.jpg",
  },
  {
    name: "Athola [grilled stew beef]",
    description: "Athola [grilled stew beef]",
    price: "7.00",
    imagePath:
      "https://i0.wp.com/therovingfoodie.com/wp-content/uploads/2023/05/Athola1.jpg?fit=800%2C600&ssl=1",
  },
  {
    name: "Kachumbari",
    description: "Kachumbari",
    price: "2.00",
    imagePath:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2017/07/Kachumbari-African-Tomato-and-Onion-Salad-2546.21.jpg",
  },
  {
    name: "Aliya[sun dried stewed beef]",
    description: "Aliya[sun dried stewed beef]",
    price: "7.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/c5bfc7597f23ca66/680x482cq70/aliya-smoked-meat-recipe-main-photo.jpg",
  },
  {
    name: "Matoke",
    description: "Matoke",
    price: "2.00",
    imagePath:
      "https://healthiersteps.com/wp-content/uploads/2022/04/matoke-overlay.jpg",
  },
  {
    name: "Nyama Choma Special",
    description: "Nyama Choma Special",
    price: "7.00",
    imagePath:
      "https://lowcarbafrica.com/wp-content/uploads/2022/10/Nyama-Choma-IG-1.jpg",
  },
  {
    name: "Chips",
    description: "Chips",
    price: "3.00",
    imagePath:
      "https://www.coles.com.au/content/dam/coles/cusp/pvx/Mar23-PVX-Easter-03_Chips-976x549.jpg",
  },
  {
    name: "Nyama Choma [BONE]",
    description: "Nyama Choma [BONE]",
    price: "7.00",
    imagePath:
      "https://foreignfork.com/wp-content/uploads/2023/08/NyamaChoma-FEATURE.jpg",
  },
  {
    name: "Ugali / Chapati",
    description: "Ugali / Chapati",
    price: "2.00",
    imagePath: "https://pbs.twimg.com/media/CFRksEfWIAAFiTQ.jpg",
  },
  {
    name: "Oxtail",
    description: "Oxtail",
    price: "7.00",
    imagePath:
      "https://static01.nyt.com/images/2022/03/03/dining/mp-oxtail-butter-beans1/mp-oxtail-butter-beans1-threeByTwoMediumAt2X.jpg",
  },
  {
    name: "Containers",
    description: "Containers",
    price: "0.50",
    imagePath:
      "https://imgs.search.brave.com/TsR5DNgNcanxG_nhzaIoQzony9oP_3jDNDKLHYcV0fw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIxLzA0L2Zvb2Qt/c3RvcmFnZS1jb250/YWluZXItMjA0OHB4/LTEyODAuanBnP2F1/dG89d2VicCZxdWFs/aXR5PTc1JndpZHRo/PTEwMjQ",
  },
  {
    name: "Mbuzi Fried",
    description: "Mbuzi Fried",
    price: "7.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/f8ee27ec349b13d5/680x482cq70/dry-mbuzi-fry-recipe-main-photo.jpg",
  },
  {
    name: "Pumpkin leaves(seveve)",
    description: "Pumpkin leaves(seveve)",
    price: "2.00",
    imagePath:
      "https://i.pinimg.com/736x/4a/83/db/4a83db35a39e50fc2a1434155faa59fe.jpg",
  },
  {
    name: "Grilled nile perch",
    description: "Grilled nile perch",
    price: "8.00",
    imagePath:
      "https://lh3.ggpht.com/ZnxnDb1vm1AWqj8AKhJI2Oj0-B7aPDfZcVY5agBlrXl9KSKat29X49ROzK2JXEuX7_HCEHX42fSRdYDzZq5zlVw=w2804-h2804-c-rj-v1-e365",
  },
  {
    name: "Grilled tilapia",
    description: "Grilled tilapia",
    price: "8.00",
    imagePath:
      "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2021-08/8_13.jpg",
  },
  {
    name: "Matumbo Mbuzi",
    description: "Matumbo Mbuzi",
    price: "7.00",
    imagePath:
      "https://i.pinimg.com/236x/cc/0d/79/cc0d79222e26f7d819b725e976b8c939.jpg",
  },
  {
    name: "Grilled tilapia",
    description: "Grilled tilapia",
    price: "8.00",
    imagePath:
      "https://i.ytimg.com/vi/YMDhnARM0FE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzLDyr9SOX5TX2WYJOzIZa3KzrjA",
  },
  {
    name: "Matumbo",
    description: "Matumbo",
    price: "6.00",
    imagePath:
      "https://i0.wp.com/kaneskitchenaffair.com/wp-content/uploads/2019/01/img_0376.jpg?resize=893%2C640",
  },
  {
    name: "Nyamami",
    description: "Nyamami",
    price: "14.00",
    imagePath: "/here.png",
  },
];

const MaritasData = [
  {
    name: "4 Pieces of wings",
    description: "4 Pieces of wings",
    price: "4.00",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDKst_37aECR70WIsCeXALyuFOi33ewzP-w&usqp=CAU",
  },
  {
    name: "8 Pieces of wings",
    description: "8 Pieces of wings",
    price: "6.50",
    imagePath:
      "https://recipes.net/wp-content/uploads/2022/09/chicken-wing-platter.jpg",
  },
  {
    name: "Bhajia",
    description: "Bhajia",
    price: "2.50",
    imagePath:
      "https://keeshaskitchen.com/wp-content/uploads/2023/11/KENYAN-BHAJIAS-1.jpg",
  },
  {
    name: "3 Wings + Bhajia",
    description: "3 Wings + Bhajia",
    price: "4.50",
    imagePath:
      "https://img-global.cpcdn.com/recipes/908aebdf7700a576/1360x964cq70/wet-fry-chicken-wings-recipe-main-photo.webp",
  },
  {
    name: "8 Wings + 1/4 KG Bhajias",
    description: "8 Wings + 1/4 KG Bhajias",
    price: "10.50",
    imagePath:
      "https://img-global.cpcdn.com/recipes/908aebdf7700a576/1360x964cq70/wet-fry-chicken-wings-recipe-main-photo.webp",
  },
  {
    name: "16 Wings + 1KG Bhajias",
    description: "16 Wings + 1KG Bhajias",
    price: "18.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/908aebdf7700a576/1360x964cq70/wet-fry-chicken-wings-recipe-main-photo.webp",
  },
  {
    name: "1/4 Chicken + 1/4KG Bhajias",
    description: "1/4 Chicken + 1/4KG Bhajias",
    price: "5.50",
    imagePath:
      "https://img-global.cpcdn.com/recipes/908aebdf7700a576/1360x964cq70/wet-fry-chicken-wings-recipe-main-photo.webp",
  },
  {
    name: "1/2 chicken + 1/2kg bhajias",
    description: "1/2 chicken + 1/2kg bhajias",
    price: "10.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/908aebdf7700a576/1360x964cq70/wet-fry-chicken-wings-recipe-main-photo.webp",
  },
  {
    name: "Full Chicken + 1KG Bhajias",
    description: "Full Chicken + 1KG Bhajias",
    price: "20.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/908aebdf7700a576/1360x964cq70/wet-fry-chicken-wings-recipe-main-photo.webp",
  },
  {
    name: "Full Chicken + 8 wings+ 1KG Bhajias",
    description: "Full Chicken + 8 wings+ 1KG Bhajias",
    price: "22.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/908aebdf7700a576/1360x964cq70/wet-fry-chicken-wings-recipe-main-photo.webp",
  },
  {
    name: "2 quarter chicken + 2 bhajias & chutney sauce",
    description: "2 quarter chicken + 2 bhajias & chutney sauce",
    price: "10.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/908aebdf7700a576/1360x964cq70/wet-fry-chicken-wings-recipe-main-photo.webp",
  },
];

const JajemeloData = [
  {
    name: "Hawaiian Pizza",
    description: "Delicious Hawaiian pizza",
    price: "10.00",
    imagePath:
      "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-03/hawaiian-pizza.jpg?itok=a1-_QjRA",
  },
  {
    name: "Boerewors Pizza",
    description: "Savory Boerewors pizza",
    price: "10.00",
    imagePath:
      "https://www.paarman.co.za/wp-content/uploads/2017/10/Aubergine-and-Boerewors-Pizza.jpeg",
  },
  {
    name: "Regina Pizza",
    description: "Classic Regina pizza",
    price: "10.00",

    imagePath:
      "https://fglapasta.co.za/wp-content/uploads/2023/06/Regina-Pizza.jpg",
  },
  {
    name: "Chicken Mushroom Pizza",
    description: "Mouth-watering Chicken Mushroom pizza",
    price: "10.00",
    imagePath:
      "https://criderfoods.com/wp-content/uploads/2015/06/ter-e026-teriyaki-chicken-and-mushroom-pizza-026.jpg",
  },
  {
    name: "Chicken Tikka Pizza",
    description: "Flavorful Chicken Tikka pizza",
    price: "10.00",

    imagePath:
      "https://static.onecms.io/wp-content/uploads/sites/19/2013/02/22/chicken-tikka-pizzas-ck-x.jpg",
  },
  {
    name: "Magherita Pizza",
    description: "Classic Magherita pizza",
    price: "10.00",
    imagePath:
      "https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format",
  },
  {
    name: "Hot Paneer Veggie Pizza",
    description: "Spicy Paneer Veggie pizza",
    price: "10.00",
    imagePath:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/indian-paneer-pizza-recipe-280x280.jpg",
  },
  {
    name: "Veggie Supremo Pizza",
    description: "Supreme Veggie pizza",
    price: "10.00",
    imagePath:
      "https://i.pinimg.com/originals/48/b5/d2/48b5d236bac9c2d3415a7ba3159280e5.jpg",
  },
  {
    name: "Jajemel Hot Feast Pizza",
    description: "Spicy Feast pizza",
    price: "10.00",
    imagePath:
      "https://lodough.co/cdn/shop/articles/pizza---meat-feast-new.jpg?v=1573049926",
  },
  {
    name: "Mexican Fiesta",
    description: "Fiery Mexican pizza",
    price: "10.00",
    imagePath:
      "https://hips.hearstapps.com/hmg-prod/images/pizza-hut-mexican-fiesta-range-1615888890.jpg?crop=0.467xw:1.00xh;0,0&resize=1200:*",
  },
  {
    name: "Chicken BBQ",
    description: "Sizzling Chicken BBQ pizza",
    price: "10.00",
    imagePath:
      "https://www.thecandidcooks.com/wp-content/uploads/2023/04/bbq-chicken-pizza-feature.jpg",
  },
  {
    name: "BBQ Steak",
    description: "Hearty BBQ Steak pizza",
    price: "10.00",
    imagePath:
      "https://www.noble.org/wp-content/uploads/2023/04/finished-bbq-steak-and-onion-pizza.jpg",
  },
  {
    name: "Chicken/Meat/Cheese Topping",
    description: "Premium topping blend",
    price: "2.50",
    imagePath:
      "https://img.freepik.com/premium-photo/chicken-breasts-with-creamy-sauce-grated-cheese-pizza-tasty-fresh-pizza-thick-crust-with-meat_173815-15715.jpg",
  },
  {
    name: "Vegetables Topping",
    description: "Fresh vegetable toppings",
    price: "1.00",

    imagePath:
      "https://static.toiimg.com/thumb/53351352.cms?imgsize=151967&width=800&height=800",
  },
];

const MammyMbutaData = [
  {
    name: "Fish Plate Size",
    description: "",
    price: "5.00",
    imagePath:
      "https://thumbs.dreamstime.com/b/grilled-fish-roasted-potatoes-vegetables-plate-90460443.jpg",
  },
  {
    name: "Fish Medium",
    description: "",
    price: "6.00",
    imagePath:
      "https://www.acouplecooks.com/wp-content/uploads/2022/04/Tuna-Steak-008.jpg",
  },
  {
    name: "Fish Large",
    description: "",
    price: "9.00",
    imagePath:
      "https://www.recipetineats.com/wp-content/uploads/2021/04/Whole-Baked-Fish_7.jpg",
  },
  {
    name: "Chicken Legs 1KG",
    description: "",
    price: "10.00",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxT_cT164QDygm0zjEq88V9pa9GcMW86egw&usqp=CAU",
  },
  {
    name: "Full Chicken",
    description: "",
    price: "12.00",
    imagePath:
      "https://www.spendwithpennies.com/wp-content/uploads/2022/04/1200-Air-Fryer-Whole-Chicken-SpendWithPennies-.jpg",
  },
  {
    name: "Mbuzi 1KG",
    description: "",
    price: "10.00",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCuPxivok1UPtmVhSKnSn214J3FfJpxWdyQ&usqp=CAU",
  },
  {
    name: "Beef 1KG",
    description: "",
    price: "10.00",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6xQPGREs0ssaHr5A5by5GqwZiM-MR_kiAxc-V30pfYM_NsG_E3hSREGBU4xsfcAq7XU&usqp=CAU",
  },
  {
    name: "Pork Ribs",
    description: "",
    price: "12.00",
    imagePath:
      "https://media-cdn2.greatbritishchefs.com/media/vd0i3v43/26-april-selects-6.whqc_1426x713q80.jpg",
  },
  {
    name: "Oxtail",
    description: "",
    price: "5.00",
    imagePath:
      "https://cookingmaniac.com/wp-content/uploads/2016/06/plated-oxtail.jpg",
  },
  {
    name: "Ossobuco",
    description: "",
    price: "5.00",
    imagePath:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/31/0/italiancooking_ossobucco.jpg.rend.hgtvcom.1280.960.suffix/1431766579357.jpeg",
  },
  {
    name: "Catfish",
    description: "",
    price: "6.00",
    imagePath:
      "https://lifeloveandgoodfood.com/wp-content/uploads/2023/07/Blackened-Catfish-16-1200x1200-1.jpg",
  },
  {
    name: "Mudfish",
    description: "",
    price: "7.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/fa2e1b6f35ec184e/680x482cq70/fried-mudfish-with-kachumbari-recipe-main-photo.jpg",
  },
  {
    name: "Nile Perch",
    description: "",
    price: "9.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/2b2a4606faa19985/400x400cq70/photo.jpg",
  },
  {
    name: "Makayabu/Salt Fish",
    description: "",
    price: "5.00",
    imagePath: "https://i.ytimg.com/vi/E_vGBB3TliU/maxresdefault.jpg",
  },
  {
    name: "Chicken Kienyeji",
    description: "",
    price: "14.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/e50ebe2154d9ce83/680x482cq70/traditional-kienyeji-chicken-stew-recipe-main-photo.jpg",
  },
  {
    name: "Maboke-Ngolo",
    description: "",
    price: "6.00",
    imagePath:
      "https://miro.medium.com/v2/resize:fit:1400/1*tr0JCvToZFsilQD-iWyvqA.jpeg",
  },
  {
    name: "Maboke-Nzombo",
    description: "",
    price: "6.00",
    imagePath:
      "https://miro.medium.com/v2/resize:fit:1400/1*tr0JCvToZFsilQD-iWyvqA.jpeg",
  },
  {
    name: "Maboke-Ngulu",
    description: "",
    price: "8.00",
    imagePath:
      "https://miro.medium.com/v2/resize:fit:1400/1*tr0JCvToZFsilQD-iWyvqA.jpeg",
  },
  {
    name: "Cow Hoof Soup",
    description: "",
    price: "3.00",
    imagePath:
      "https://www.thespruceeats.com/thmb/KmcP0Oe4b1BUke4f8OUhGcf0FIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cow-heel-soup-56a58b663df78cf77288bd4d.jpg",
  },
  {
    name: "Pig Trotter Soup",
    description: "",
    price: "3.00",
    imagePath:
      "https://soupstud.com/wp-content/uploads/2022/11/pigs-feet-soup-600808-e1669557353936.jpg",
  },
  {
    name: "Kienyeju 1/4 Chicken",
    description: "",
    price: "4.00",
    imagePath:
      "https://img-global.cpcdn.com/recipes/e50ebe2154d9ce83/680x482cq70/traditional-kienyeji-chicken-stew-recipe-main-photo.jpg",
  },
  {
    name: "Thomson/Mackerel",
    description: "",
    price: "5.00",
    imagePath:
      "https://www.telegraph.co.uk/content/dam/recipes/2020/06/02/mackerel_trans_NvBQzQNjv4Bq6J1VCSibhITQGpI9rLH5-7b0D_9q8kkv7ScI0foQQSI.png",
  },
  {
    name: "Beef Portion",
    description: "",
    price: "5.00",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Mbuzi Portion",
    description: "",
    price: "5.00",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Pork Portion",
    description: "",
    price: "5.00",
    imagePath:
      "https://png.pngtree.com/thumb_back/fw800/background/20220810/pngtree-a-plate-of-spiced-corned-pork-portion-meat-salt-photo-image_9003986.jpg",
  },
  {
    name: "Kiganda/Roast Beef",
    description: "",
    price: "5.00",
    imagePath:
      "https://www.monitor.co.ug/resource/image/1777208/landscape_ratio3x2/1620/1080/c802e215f8c3e7bf56e03120f3465f6f/lE/life05pix.jpg",
  },
  {
    name: "Kunde",
    description: "",
    price: "1.50",
    imagePath:
      "https://img-global.cpcdn.com/recipes/d353882ec008a2ea/680x482cq70/grilled-liver-kunde-veggies-served-with-ugali-charityrecipe-recipe-main-photo.jpg",
  },
  {
    name: "Mrenda",
    description: "",
    price: "1.50",
    imagePath:
      "https://img-global.cpcdn.com/recipes/7d3d4ca6a59e5677/1200x630cq70/photo.jpg",
  },
  {
    name: "Sombe",
    description: "",
    price: "2.00",
    imagePath: "https://i.ytimg.com/vi/9srQN_fU1uI/maxresdefault.jpg",
  },
  {
    name: "Spinach",
    description: "",
    price: "1.50",
    imagePath:
      "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/sauteed-spinach-500x500.jpg",
  },
  {
    name: "Terere",
    description: "",
    price: "1.50",
    imagePath:
      "https://img-global.cpcdn.com/recipes/179acc14daf33b07/680x482cq70/terere-greens-amaranth-in-cream-authormarathon-recipe-main-photo.jpg",
  },
  {
    name: "Dongodongo",
    description: "",
    price: "2.00",
    imagePath: "https://i.ytimg.com/vi/I8SEO7rT9hA/maxresdefault.jpg",
  },
  {
    name: "Ngai Ngai",
    description: "",
    price: "2.00",
    imagePath: "https://i.ytimg.com/vi/3dI_nv49GLY/maxresdefault.jpg",
  },
  {
    name: "Fumbwa",
    description: "",
    price: "2.00",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Kachumbari",
    description: "",
    price: "1.50",
    imagePath:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2017/07/Kachumbari-African-Tomato-and-Onion-Salad-2546.21.jpg",
  },
  {
    name: "Beans/Madesu",
    description: "",
    price: "2.00",
    imagePath: "https://i.ytimg.com/vi/OlDIqbE3q_8/sddefault.jpg",
  },
  {
    name: "Chapati",
    description: "",
    price: "1.00",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Rice",
    description: "",
    price: "1.50",
    imagePath:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/basmati-rice-recipe.jpg",
  },
  {
    name: "Ugali",
    description: "",
    price: "1.50",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Fufu/Cassava Ugali",
    description: "",
    price: "1.50",
    imagePath:
      "https://static01.nyt.com/images/2021/03/10/dining/05Fufu1/05Fufu1-mediumSquareAt3X.jpg",
  },
  {
    name: "Ugly Brown",
    description: "",
    price: "1.50",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Kwanga",
    description: "",
    price: "2.00",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Chips",
    description: "",
    price: "2.50",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Roast Potatoes",
    description: "",
    price: "2.50",
    imagePath:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Matoke",
    description: "",
    price: "2.50",
    imagePath:
      "https://img-global.cpcdn.com/recipes/a791020872c3db3b/1200x630cq70/photo.jpg",
  },
  {
    name: "Plantains",
    description: "",
    price: "2.50",
    imagePath:
      "https://img-global.cpcdn.com/recipes/a791020872c3db3b/1200x630cq70/photo.jpg",
  },
];
