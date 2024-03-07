import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import CartComponent from "../commons/cart-button";
import CurrencySelector from "../commons/DropDown";
import { useState } from "react";

const NavbarContainer = styled.nav`
  background-color: #00453a;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;


const SearchBar = styled.input`
  display: inline-flex;
  padding: 0.75rem 1.5rem;
  align-items: center;
  gap: 5.3125rem;
  border-radius: 2.875rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: #1a3f34;
  margin-right: 2rem;
  font-size: 1rem;
  color: #aaa;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const ContactButton = styled.button`
  background-color: #ffa500;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 700;
  color: black;
  transition: background-color 0.3s;
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  &:hover {
    background-color: #cc8400;
  }
`;

const SearchDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #00453a;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchResultItem = styled(Link)<{ $isActive?: boolean }>`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};

  &:hover,
  &:focus {
    background-color: #1a3f34;
  }
`;
const services = [
  "private-chef",
  "gift-shop",
  "house-keeping",
  "shopping",
  "nanny-service",
  "property-management",
  "luggage",
  "rentable",
  "tours-and-travel",
  "wellness",
  "drinks",
  "food-delivery",
  "laundry",
  "private-chef-meal-prep",
];
const NavbarDesktop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (servicePath: string) => {
    setSearchQuery("");
    const serviceUrl = `/services/${servicePath}`;
    router.push(serviceUrl);
  };

  return (
    <NavbarContainer>
      <NavWrapper>
        <Logo>
          <Link href="/home" rel="noopener noreferrer">
            <Image src="/logo2.svg" alt="BCP Logo" width={50} height={50} />
          </Link>
        </Logo>
        <SearchBar
          type="search"
          placeholder="Search for services"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </NavWrapper>
      {searchQuery && filteredServices.length > 0 && (
        <SearchDropdown>
          {filteredServices.map((service, index) => (
            <SearchResultItem
              key={index}
              href={`/services/${service}`}
              onClick={() => handleServiceClick(service)}
            >
              {service.replace(/-/g, " ")}
            </SearchResultItem>
          ))}
        </SearchDropdown>
      )}
      <NavWrapper>
        <CartComponent />
        <Link
          href="https://api.whatsapp.com/send?phone=254794701568"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactButton>Contact Us</ContactButton>
        </Link>
        <CurrencySelector />
      </NavWrapper>
    </NavbarContainer>
  );
};

export default NavbarDesktop;
