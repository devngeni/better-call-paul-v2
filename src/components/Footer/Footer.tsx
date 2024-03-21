import React, { FormEvent } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../../public/contacts";
import Youtube from "../../../public/contacts/youtube";
import {
  Checkbox,
  CheckboxLabel,
  CopyrightContainer,
  FJoinContainer,
  FWrapper,
  FooterBottomContainer,
  FooterContainer,
  FooterLinks,
  FooterLinksContainer,
  FooterLinksHeading,
  FooterLinksWrapper,
  FooterTopContainer,
  Input,
  JoinParagraph,
  SubmitButton,
  SubscribeContainer,
  FlexWrapper,
  FooterIcon,
  FooterLink,
} from "@/styles/footerStyles";
import { FooterLinksList } from "./footerData";
import { useForm, ValidationError } from '@formspree/react';


const socialLinks = [
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/profile.php?id=61554116859024",
  },
  { icon: <Twitter />, url: "https://twitter.com/BCP254" },
  { icon: <Instagram />, url: "https://www.instagram.com/bcp_254/" },
  {
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/better-call-paul-2476392a3?",
  },
  { icon: <Youtube />, url: "https://www.tiktok.com/@bettercallpaul254" },
];

function Footer() {
  const [email, setEmail] = React.useState("");
  //const formSpreeUrl = "https://formspree.io/f/xoqogweg";
  const [state, handleSubmit] = useForm("moqgnpyl");

  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  if (state.succeeded) {
      return alert("Submitted successfully") 
  }

 
  return (
    <FWrapper>
      <FooterContainer>
        <FooterTopContainer>
          <FooterLinksContainer>
            {FooterLinksList.map((section, index) => (
              <div key={index}>
                <FooterLinksHeading>{section.title}</FooterLinksHeading>
                {section.links.map((link, index) => (
                  <FooterLinks key={index}>
                    <FooterLink>
                      <Link href={link.url}>{link.name}</Link>
                    </FooterLink>
                  </FooterLinks>
                ))}
              </div>
            ))}
          </FooterLinksContainer>

          <FJoinContainer onSubmit={handleSubmit} >
            <FooterLinksHeading>Join us on</FooterLinksHeading>
            <JoinParagraph>
              We don&#39;t send spam so don&#39;t worry
            </JoinParagraph>
            <SubscribeContainer >
              <Input
                type="email"
                placeholder="Email..."
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input type="hidden" name="message" value="Hi! Could you please provide me with information regarding your service offerings, including any packages or specializations available? Additionally, I'd like to know if there are any ongoing promotions or discounts for new clients." />
              <SubmitButton type="submit">Submit</SubmitButton>
            </SubscribeContainer>
            <FlexWrapper
              style={{
                marginTop: "1rem",
                justifyContent: "flex-start",
                gap: "0.65rem",
              }}
            >
              <Checkbox name="agree" id="agree" required />
              <CheckboxLabel htmlFor="agree">
                I agree to the <span>Terms and Conditions</span>
              </CheckboxLabel>
            </FlexWrapper>
          </FJoinContainer>
        </FooterTopContainer>
        <FooterBottomContainer>
          <CopyrightContainer>
            Copyright © {new Date().getFullYear()} Concierge BnB
          </CopyrightContainer>
          <FooterLinksWrapper>
            {socialLinks.map((data, index) => (
              <FooterIcon key={index} onClick={() => openInNewTab(data.url)}>
                {data.icon}
              </FooterIcon>
            ))}
          </FooterLinksWrapper>
        </FooterBottomContainer>
      </FooterContainer>
    </FWrapper>
  );
}

export default Footer;
