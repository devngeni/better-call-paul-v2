// File: QuickActions.tsx

import React from "react";
import styled from "styled-components";
import FullDay from "../../../public/Icons/FullDay";
import { ChaufferIcon, Profile } from "../../../public/Icons";

// Styled-components
const QuickActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h2`
  color: #1a3f34;

  text-align: center;
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.78rem;
  letter-spacing: 0.0175rem;
  margin-bottom: 20px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ActionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.2s;
  color: #1a3f34;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ActionTitle = styled.span`
  margin-top: 10px;
  color: #1a3f34;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
`;

// Interface for action items
interface ActionItem {
  title: string;
  description: string;
  icons: React.ReactNode;
}

// QuickActions Component
const QuickActions: React.FC = () => {
  const actions: ActionItem[] = [
    {
      icons: <FullDay />,
      title: "New in Nairobi?",
      description: "See Nairobi's popular attractions",
    },
    {
      icons: <ChaufferIcon />,
      title: "Access Transport Services",
      description: "Hire a car in Nairobi",
    },
    {
      icons: <Profile />,
      title: "Unlimited meal prep plans",
      description: "Get a private chef during your stay",
    },
  ];

  return (
    <QuickActionsContainer>
      <Title>Quick Actions</Title>
      <ActionsContainer>
        {actions.map((action, index) => (
          <ActionCard key={index}>
            {action.icons}
            <ActionTitle>{action.title}</ActionTitle>
            <p>{action.description}</p>
          </ActionCard>
        ))}
      </ActionsContainer>
    </QuickActionsContainer>
  );
};

export default QuickActions;
