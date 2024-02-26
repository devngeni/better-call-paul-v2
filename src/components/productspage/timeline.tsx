import {
  DetailContainer,
  DetailContent,
  DetailImage,
  DetailWrapper,
} from "@/styles/commons";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Text, Title } from "../commons";

interface timelineProps {
  timelines?: { icon: StaticImageData; text: string; content: string }[];
}


const timeline: React.FC<timelineProps> = ({ timelines = [] }) => {
  return (
    <DetailContainer>
      {timelines.map((timeline, index) => (
        <DetailWrapper key={index}>
          <DetailImage>
            <Image
              src={timeline.icon}
              alt="Icon"
              height={24}
              width={24}
              priority
              style={{
                objectFit: "cover",
                zIndex: 1,
              }}
            />
            <Image
              src="/TimelineImages/Vector.png"
              alt="dots"
              height={40}
              width={3}
            />
          </DetailImage>
          <DetailContent>
            <Title size="0.75rem" $weight="600" color="#000">
              {timeline.text}
            </Title>
            <Text size="0.625rem" $weight="400" color="#444">
              {timeline.content}
            </Text>
          </DetailContent>
        </DetailWrapper>
      ))}
    </DetailContainer>
  );
};

export default timeline;
