import styled from "@emotion/styled";

export interface StyledContainerCssProps {
  display?: React.CSSProperties["display"];
  flexFlow?: React.CSSProperties["flexDirection"];
  placeContent?: React.CSSProperties["placeContent"];
  w?: React.CSSProperties["width"];
  h?: React.CSSProperties["height"];
  maxW?: React.CSSProperties["maxWidth"];
  maxH?: React.CSSProperties["maxHeight"];
  bgColor?: React.CSSProperties["backgroundColor"];
  pd?: React.CSSProperties["padding"];
  mg?: React.CSSProperties["margin"];
  br?: React.CSSProperties["borderRadius"];
  gap?: React.CSSProperties["gap"];
}

export const StyledContainer = styled.div<StyledContainerCssProps>`
  ${({ display }) => display && `display: ${display};`}
  ${({ flexFlow }) => flexFlow && `flex-flow: ${flexFlow};`}
  ${({ placeContent }) => placeContent && `place-content: ${placeContent};`}
  ${({ w }) => w && `width: ${w};`}
  ${({ h }) => h && `height: ${h}`}
  ${({ maxW }) => maxW && `max-width: ${maxW};`}
  ${({ maxH }) => maxH && `max-height: ${maxH};`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ pd }) => pd && `padding: ${pd};`}
  ${({ mg }) => mg && `margin: ${mg};`}
  ${({ br }) => br && `border-radius: ${br};`}
  ${({ gap }) => gap && `gap: ${gap};`}
`;
