import {
  EnjoyContainer,
  GuestsContainer,
  SpaContainer,
  SpaWrapper,
} from "@/styles/landingPageStyles/SpaSection.Styles";
import { TextBreak, Wrapper } from "@/styles/landingPageStyles/ContactUs.Styles";


export default function SpaSection() {
  return (
    <Wrapper>
      <SpaContainer>
        <SpaWrapper>
          <EnjoyContainer>
            Enjoy spa, Massage & Barber <TextBreak />
            services brought to your doorstep
          </EnjoyContainer>
          <GuestsContainer>
            Guests looking for relaxation and pampering can benefit from on&#45;site
            and off&#45;site spa and massage services. This adds a spa like element
            to their stay, providing an extra layer of comfort and indulgence.
          </GuestsContainer>
        </SpaWrapper>
      </SpaContainer>
    </Wrapper>
  );
}
