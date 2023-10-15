import {
  Colors,
  Padding,
  Margin,
  Borders,
  Fonts,
  Sizing,
  Spacing,
  Opacity,
  Display,
} from "@shared/index";

export interface ThemePrimaryButtonProps {
  bShadow?: React.CSSProperties["boxShadow"];
  w?: React.CSSProperties["width"];
  fSize?: React.CSSProperties["fontSize"];
  tTransform?: React.CSSProperties["textTransform"];
  transition?: React.CSSProperties["transition"];
  active?: {
    bShadow?: React.CSSProperties["boxShadow"];
    transform?: React.CSSProperties["transform"];
  };
}

export interface ThemeDashedButtonProps {
  border?: React.CSSProperties["border"];
  bgColor?: React.CSSProperties["backgroundColor"];
  h?: React.CSSProperties["height"];
  w?: React.CSSProperties["width"];
  gap?: React.CSSProperties["gap"];
  opacity?: React.CSSProperties["opacity"];
  br?: React.CSSProperties["borderRadius"];
  hover?: {
    opacity?: React.CSSProperties["opacity"];
  };
}

export interface ThemeIconButtonProps {
  pd?: React.CSSProperties["padding"];
}

export interface ThemeTextOnlyButtonProps {
  bgColor?: React.CSSProperties["backgroundColor"];
  color?: React.CSSProperties["color"];
  h?: React.CSSProperties["height"];
  w?: React.CSSProperties["width"];
  pd?: React.CSSProperties["padding"];
}

export interface ThemeSolidButtonProps {
  h?: React.CSSProperties["height"];
  w?: React.CSSProperties["width"];
  pd?: React.CSSProperties["padding"];
  bgColor?: React.CSSProperties["backgroundColor"];
}

export interface ThemeButtonProps {
  primary?: ThemePrimaryButtonProps;
  dashed?: ThemeDashedButtonProps;
  icon?: ThemeIconButtonProps;
  textOnly?: ThemeTextOnlyButtonProps;
  solid?: ThemeSolidButtonProps;
  color?: React.CSSProperties["color"];
  mg?: React.CSSProperties["margin"];
  pd?: React.CSSProperties["padding"];
  br?: React.CSSProperties["borderRadius"];
  bgColor?: React.CSSProperties["backgroundColor"];
  placeContent?: React.CSSProperties["placeContent"];
  active?: {
    bgColor?: React.CSSProperties["backgroundColor"];
    fontW?: React.CSSProperties["fontWeight"];
  };
}

export const button = {
  color: Colors.Grey[50],
  bgColor: Colors.TransparentWhite[100],
  br: Borders.Radius["sm"],
  mg: Margin.All["4xs"],
  bd: Borders.Style.none,
  pd: Padding.All["2xs"],
  fontW: Fonts.Weight.bold,
  cursor: "pointer",
  dp: Display.flex,
  placeContent: "center",
  active: {
    bgColor: Colors.TransparentWhite[200],
    fontW: Fonts.Weight.bold,
  },
  primary: {
    bShadow: `${Colors.TransparentWhite[900]} 0px ${Spacing["3xs"]} 0px`,
    w: Sizing.Width["20xl"],
    fSize: Fonts.Size.lg,
    tTransform: "uppercase",
    transition: "transform 0.1s ease-in-out",
    transform: "inherit",
    active: {
      bShadow: "none",
      transform: `translateY(${Spacing["3xs"]})`,
    },
  },
  dashed: {
    border: `${Spacing["2xs"]} dashed ${Colors.TransparentWhite[600]}`,
    bgColor: Colors.TransparentDark[900],
    h: Sizing.Height["4xl"],
    w: Sizing.Width[100],
    gap: Spacing["2xs"],
    opacity: Opacity[70],
    br: Spacing["2xs"],
    hover: {
      opacity: Opacity[100],
    },
  },
  icon: {
    pd: Padding.All.zero,
  },
  textOnly: {
    bgColor: Colors.TransparentDark.transparent,
    color: Colors.TransparentWhite[500],
    h: Sizing.Height.lg,
    w: Sizing.Width.fitContent,
    padding: Padding.Horizontal.sm,
  },
  solid: {
    h: Sizing.Height.lg,
    w: Sizing.Width.fitContent,
    pd: Padding.Horizontal.lg,
    bgColor: Colors.TransparentWhite[900],
  },
};
