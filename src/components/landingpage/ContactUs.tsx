import {
  CParagraph,
  ContactContent,
  Heading,
  ContactImg,
  ImgOverlay,
  SectionWrapper,
  TextBreak,
  WButton,
} from "@/styles/landingPageStyles/ContactUs.Styles";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function ContactUs() {
  return (
    <SectionWrapper>
      <ContactImg>
        <Image
          src={"/mascot.png"}
          height={810}
          width={720}
          alt="Mascott"
        />
        <ImgOverlay />
      </ContactImg>

      <ContactContent>
        <Heading style={{ width: "fit-content" }}>
          You better call <TextBreak />
          Paul
        </Heading>
        <CParagraph>
          We put emphasis on comfort, luxury, <TextBreak />
          attention to detail, a memorable <TextBreak />
          and hassle free stay.
        </CParagraph>
        <Link
          href="https://api.whatsapp.com/send?phone=254794701568"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WButton>Contact Us</WButton>
        </Link>
      </ContactContent>
    </SectionWrapper>
  );
}

export default ContactUs;
