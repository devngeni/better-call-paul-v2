import {
    AboutContainer,
    ExploreBtn,
    ImageCard,
    ImagesContainer,
    TextContainer,
  } from "@/styles/landingPageStyles/About.Styles";
  import Image from "next/image";
  import airBnbCleaning from "../../../public/about/airBnbCleaning.jpg";
  import luggage from "../../../public/about/luggage.jpg";
  import propertyMngt from "../../../public/about/propertyMngt.jpg";
  import nannyService from "../../../public/about/nannyService.jpg";
  import shoppingruns from "../../../public/about/shoppingruns.jpg";
import { Opensans } from "@/context/ThemeContext";
  
  const imageCardsData = [
    {
      src: airBnbCleaning,
      text: "AirBnB Cleaning",
      className: "airBnb",
      showtext: false,
    },
    {
      src: luggage,
      text: "Luggage Storage",
      className: "luggageStorage",
      showtext: true,
    },
    {
      src: propertyMngt,
      text: "Property Management",
      className: "propertyMngt",
      showtext: false,
    },
    {
      src: nannyService,
      text: "Nanny Service",
      className: "nannyService",
      showtext: true,
    },
    {
      src: shoppingruns,
      text: "Shopping Runs",
      className: "shoppingruns",
      showtext: true,
    },
  ];
  
  const AboutSection = () => {
    return (
      <AboutContainer>
        <TextContainer className={Opensans.className}>
          <h1>Here is why you should call Paul</h1>
          <p>
            BCP Concierge Services proudly presents its a meticulous blend of
            comfort, luxury, and impeccable services. Central to our offerings is
            our commitment to pristine Airbnb Cleaning, ensuring every space feels
            like a home away from home. Our holistic approach seamlessly marries
            Property Management and Guest Communication, promising attention to
            detail and a stay curated to perfection
          </p>
          <ExploreBtn>Explore</ExploreBtn>
        </TextContainer>
        <ImagesContainer>
          {imageCardsData.map((card, index) => (
            <ImageCard key={index} className={card.className}>
              <Image src={card.src} alt={card.text} />
              {card.showtext && <div className={`cardText ${Opensans.className}`}>{card.text}</div>}
            </ImageCard>
          ))}
        </ImagesContainer>
      </AboutContainer>
    );
  };
  
  export default AboutSection;
  