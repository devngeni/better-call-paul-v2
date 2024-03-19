import React from "react";
import Commons from "./Common";
import { useServicesDataContext } from "@/context/GetServicesDataContext";

export const filterDataByTag = (tag: string, data: any) => {
  if (data) {
    return data?.services.filter((item: any) => {
      return item.tag?.includes(tag);
    });
  }
};

const Images = [
  {
    image: "/DealsImages/Zoo.jpg",
    title: "Giraffe Mannor Center",
    cost: "35",
  },
  {
    image: "/DealsImages/Nature.jpg",
    title: "Funzi Island Coast",
    cost: "250",
  },
  {
    image: "/DealsImages/Museum.webp",
    title: "Nairobi National Museum",
    cost: "35",
  },
];

const DealSection = () => {
  const { data } = useServicesDataContext();

  const DealsData = filterDataByTag("Deal of the Month", data)?.map(
    (item: any) => {
      return {
        image: item.content[0].imagePath,
        title: item.content[0].name,
        cost: item.content[0].price,
      };
    }
  );

  return (
    <>
      {Images.length !== 0 ? (
        <Commons title="Deals of the Month" images={DealsData} />
      ) : (
        <div style={{ margin: "60px" }}></div>
      )}
    </>
  );
};

export default DealSection;
