import styled from "@emotion/styled";
import {
  device,
  Colors,
  Padding,
  Margin,
  Borders,
  Fonts,
  Spacing,
} from "@shared/index";
import { ThemeButtonProps } from "./Button.theme";

export interface StyledButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  color?: React.CSSProperties["color"];
  mg?: React.CSSProperties["margin"];
  pd?: React.CSSProperties["padding"];
  br?: React.CSSProperties["borderRadius"];
  bgColor?: React.CSSProperties["backgroundColor"];
  placeContent?: React.CSSProperties["placeContent"];
  active?: boolean;
  theme?: {
    button?: ThemeButtonProps;
  };
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme: { button = {} } }) => `
    display: flex;
    place-content: ${button.placeContent || "center"};
    cursor: pointer;

    border: none;
    border-radius: ${button.br || Borders.Radius.sm};
    padding: ${button.pd || Padding.All["2xs"]};
    margin: ${button.mg || Margin.All.none};

    color: ${button.color || Colors.Grey["50"]};
    background-color: ${button.bgColor || Colors.TransparentWhite["100"]};
    font-weight: ${button.active?.fontW || Fonts.Weight["normal"]};

    &--active {
      background-color: ${
        button.active?.bgColor || Colors.TransparentWhite["100"]
      };
    }
  
    @media ${device.mobile} {
      font-size: ${Fonts.Size["md"]};
      padding: ${Padding.All["xs"]};
    }
  `}
`;

export const PrimaryButton = styled(StyledButton)<StyledButtonProps>`
  ${({ theme: { button: { primary = {} } = {} } }) => `
    box-shadow: ${primary.bShadow || "none"};
    width: ${primary.w || "200px"};
    font-size: ${primary.fSize};
    text-transform: uppercase;
    transition: transform 0.1s ease-in-out;

    &--active {
      box-shadow: ${primary.active?.bShadow || "none"};
      transform: translateY(${primary.active?.transform || Spacing["3xs"]});
    }
  `};
`;

export const DashedButton = styled(StyledButton)<StyledButtonProps>`
  ${({ theme: { button: { dashed = {} } = {} } }) => `
    border: ${dashed.border || "none"};
    background-color: ${dashed.bgColor || Colors.TransparentWhite["100"]};
    height: ${dashed.h || "40px"};
    width: ${dashed.w || "100%"};
    gap: ${dashed.gap || "0.5em"};
    opacity: ${dashed.opacity || "0.7"};
    border-radius: ${dashed.br || Borders.Radius.sm};
  
    &:hover {
      opacity: ${dashed.hover?.opacity || "1"};
    }
  `};
`;

export const IconButton = styled(StyledButton)<StyledButtonProps>`
  ${({ theme: { button: { icon = {} } = {} } }) => `
    padding: ${icon.pd || Padding.All.zero};
  `};
`;

export const TextOnlyButton = styled(StyledButton)<StyledButtonProps>`
  ${({ theme: { button: { textOnly = {} } = {} } }) => `
    background-color: ${textOnly.bgColor || Colors.TransparentWhite[900]};
    color: ${textOnly.color || Colors.Grey[50]};
    height: ${textOnly.h || "40px"};
    width: ${textOnly.w || "100%"};
    padding: ${textOnly.pd || Padding.All.zero};
  `};
`;

export const SolidButton = styled(StyledButton)<StyledButtonProps>`
  ${({ theme: { button: { solid = {} } = {} } }) => `
    height: ${solid.h || "40px"};
    width: ${solid.w || "100%"};
    padding: ${solid.pd || Padding.All.zero};
    background-color: ${solid.bgColor || Colors.TransparentWhite[900]};
  `};
`;

export interface IVariants {
  primary: typeof PrimaryButton;
  dashed: typeof DashedButton;
  icon: typeof IconButton;
  textOnly: typeof TextOnlyButton;
  "text-only": typeof TextOnlyButton;
  solid: typeof SolidButton;
  basic: typeof StyledButton;
}

export const variants: IVariants = {
  primary: PrimaryButton,
  dashed: DashedButton,
  icon: IconButton,
  textOnly: TextOnlyButton,
  "text-only": TextOnlyButton,
  solid: SolidButton,
  basic: StyledButton,
};

export interface CompoundButtonProps extends StyledButtonProps {
  variant?: keyof typeof variants;
}

export const CompoundButton = ({
  variant = "primary",
  ...rest
}: CompoundButtonProps) => {
  const ButtonComponent = variants[variant];
  return <ButtonComponent {...rest} />;
};
