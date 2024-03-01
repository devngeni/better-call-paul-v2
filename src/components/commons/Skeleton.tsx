import { CardContainer, CardImage } from "@/styles/commons";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  CardImageOverlay,
  CardInfo,
  CardTitle,
  CardPrice,
  RatingIcon,
  CardDescription,
} from "../travelpage/CardComponent";

export default function SkeletonLoader() {
  return (
    <CardContainer>
      <CardImageOverlay />
      <CardImage>
        <Skeleton width="100%" height="200px" />
      </CardImage>
      <CardInfo>
        <CardTitle>
          <Skeleton width="120px" height="20px" />
        </CardTitle>

        <CardDescription>
          <Skeleton width="120px" height="50px" />
        </CardDescription>

        <CardPrice>
          <Skeleton width="120px" height="20px" />
        </CardPrice>

        <RatingIcon>
          <Skeleton width="120px" height="20px" />
        </RatingIcon>
      </CardInfo>
    </CardContainer>
  );
}
