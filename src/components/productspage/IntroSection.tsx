import {
  DayContainer,
  DayContent,
  IntroContainer,
  IntroContent,
} from "@/styles/commons";
import React, { useState, ReactNode } from "react";
import { Text } from "../commons";
import Title from "../commons/Title";
import Rating from "../commons/Rating";
import { useRouter } from "next/router";
import TopNavbar from "../travelpage/TopNavbar";
import { PriceDisplay } from "../commons/Price";
interface IntroData {
  subtitle: string;
  perMonth?: string | undefined;
  price: number;
}

interface IntroProps {
  title: string;
  content?: string;
  introData?: IntroData[];
}
interface ImageProps extends IntroProps {
  alt?: string;
  IntroImage?: ReactNode;
  additionalStyle?: React.CSSProperties;
}

const IntroSection: React.FC<ImageProps> = ({
  title,
  content,
  introData,
}) => {
  const [currentSelection, setCurrentSelection] = useState("Services");
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <TopNavbar currentSelection={currentSelection} onBack={handleBack} />
      <IntroContainer>
        <IntroContent>
          <Title color="#1A3F34" size="calc(1.5rem + ((1vw - 3.6px) * 1.2821))" $weight="700">
            {title}
          </Title>
          <Text color="#444" size="calc(0.875rem + ((1vw - 3.6px) * 0.641))" $weight="400">
            {content}
          </Text>
          <Rating name="ratings" value={4} />
        </IntroContent>

        <DayContent>
          {introData?.map((data: any, index: any) => (
            <div
              key={index}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Title color="#444" size="calc(0.875rem + ((1vw - 3.6px) * 0.2564))" $weight="600">
                {data.subtitle}
              </Title>
              {data.perMonth && (
                <Title color="#444" size="calc(0.875rem + ((1vw - 3.6px) * 0.2564))" $weight="600">
                  {"(" + `${data.perMonth}` + ")"}
                </Title>
              )}
              <PriceDisplay price={data.price} />
            </div>
          ))}
        </DayContent>
      </IntroContainer>
    </>
  );
};

export default IntroSection;
