import React from "react";
import {
  PricelistContainer,
  TasteOfKenyaAdWrapper,
  TheDrinksWrapper,
} from "./tasteOfkenya.style";
import Image from "next/image";

import Sauvignon from "../../../public/DrinkImages/Drink1.jpg";
import Merlot from "../../../public/DrinkImages/Drink2.jpg";

const pricelistItemsData = [
  { title: "Sauvignon Blanc", price: 2500 },
  { title: "Merlot Shiraz", price: 2500 },
  { title: "Leleshwa Rose", price: 2500 },
  { title: "Merlot Shiraz Sweet", price: 2500 },
];

const ProductItem = ({ title, price, isLast }: any) => (
  <div className={`item-box ${isLast ? "last-item" : ""}`}>
    <div className="itemTitle">{title}</div>
    <div className="itemPrice">{price}</div>
  </div>
);

const TasteOfKenyaAd = () => {
  return (
    <TasteOfKenyaAdWrapper>
      <div className="title">A Taste Of Kenya</div>
      <div className="description">
        Leleshwa Wine embodies the rich heritage and culture of Kenya in its
        commitment to crafting exceptional wines from locally grown grapes at
        Morendat Farm, Naivasha, in the heart of Africa’s Great Rift Valley. The
        winery draws inspiration from the stunning landscapes and fertile soils
        of the Rift Valley region, where Kenyan viticulture has a long history.
        The brand reflects a fusion of tradition and innovation, bringing a
        taste of Kenya to wine enthusiasts while preserving the heritage and
        cultural essence of the land. Leleshwa Wine is a testament to the
        enduring spirit of Kenyan winemaking and the beauty of its terroir.
      </div>
      <PricelistContainer>
        <div className="title">PRICELIST</div>
        <div className="wrapper">
          {pricelistItemsData.map((item, index) => (
            <ProductItem
              key={index}
              title={item.title}
              price={item.price}
              isLast={index === pricelistItemsData.length - 1}
            />
          ))}
        </div>
      </PricelistContainer>

      <TheDrinksWrapper>
        <div className="gridItem">
          <Image src={Sauvignon} alt="Sauvignon" />
        </div>
        <div className="gridItem">
          <Image src={Merlot} alt="Merlot" />
        </div>
      </TheDrinksWrapper>
    </TasteOfKenyaAdWrapper>
  );
};

export default TasteOfKenyaAd;
