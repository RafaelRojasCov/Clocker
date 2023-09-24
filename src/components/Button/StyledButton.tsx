import styled from "@emotion/styled";
import { device } from "../../shared";

export interface StyledButtonProps {
  color?: React.CSSProperties["color"];
  mg?: React.CSSProperties["margin"];
  pd?: React.CSSProperties["padding"];
  br?: React.CSSProperties["borderRadius"];
  bgColor?: React.CSSProperties["backgroundColor"];
  placeContent?: React.CSSProperties["placeContent"];
  active?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  place-content: ${({ placeContent }) => placeContent || "center"};
  cursor: pointer;

  border: none;
  border-radius: ${({ br }) => br || "5px"};
  padding: ${({ pd }) => pd || "10px"};
  margin: ${({ mg }) => mg || "0px"};

  color: ${({ color }) => color || "white"};
  background-color: ${({ bgColor }) => bgColor || "rgba(255, 255, 255, 0.2)"};
  font-weight: bold;

  @media ${device.mobile} {
    font-size: 4vw;
    padding: 0.5em;
  }
`;

export const BaseButton = styled(StyledButton)`
  ${({ active }) =>
    active
      ? `
    background-color: rgba(0, 0, 0, 0.2);
    font-weight: bold;
  `
      : `
    background-color: transparent;
    font-weight: normal;
  `}
`;

export const PrimaryButton = styled(StyledButton)`
  ${({ active }) =>
    active
      ? `
  box-shadow: rgba(255, 255, 255, 0.1) 0px 6px 0px;
  width: 200px;
  font-size: 22px;
  text-transform: uppercase;
  transition: transform 0.1s ease-in-out;

  &--active {
    box-shadow: none;
    transform: translateY(6px);
  }
  
  `
      : ``};
`;
