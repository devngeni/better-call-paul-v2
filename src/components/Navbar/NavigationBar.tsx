import styled from "styled-components";
import Image from "next/image";
import { serviceItems } from "../landingpage";
import { useRouter } from "next/router";

const StickyNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 10px;
  z-index: 1;
  border-bottom: 1px solid #ddd;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0px 4px;
  margin: auto;
  flex-wrap: nowrap;
`;

const NavItem = styled.li`
  flex: 0 0 auto;
  text-align: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
  width: 100px;
  height: 100px;
  background: #f1bc7e;
  @media (max-width: 1200px) {
    width: 80px;
    height: 80px;
    font-size: 90%;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 80%;
  }

  @media (max-width: 480px) {
    max-width: 95px;
    height: 50px;
    font-size: 70%;
    padding: 4px 10px;
    background: #fff;
  }
`;

const Icon = styled(Image)`
  height: auto;
`;

const Label = styled.span`
  font-size: 12px;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  @media (max-width: 1200px) {
    font-size: 11px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const NavigationBar = () => {
  const router = useRouter();
  const handleClick = (url: string) => {
    const formattedUrl = url.replace(/&/g, "and").toLowerCase();
    router.push(formattedUrl);
  };

  return (
    <StickyNav>
      <NavList>
        {serviceItems.map((item, index) => (
          <NavItem key={index} onClick={() => handleClick(item.url)}>
            <Icon src={item.imageUrl} alt={item.text} width={30} height={30} />
            <Label>{item.text}</Label>
          </NavItem>
        ))}
      </NavList>
    </StickyNav>
  );
};

export default NavigationBar;
