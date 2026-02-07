export const breakpoints = {
  mobileMax: "459px",
  tabletMin: "460px",
  tabletMax: "767px",
  tabletWideMin: "768px",
  tabletWideMax: "1023px",
  desktopMin: "1024px",
  desktopMax: "1439px",
  desktopWideMin: "1440px",
};

export const device = {
  mobile: `(max-width: ${breakpoints.mobileMax})`,
  tablet: `(min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax})`,
  tabletWide: `(min-width: ${breakpoints.tabletWideMin}) and (max-width: ${breakpoints.tabletWideMax})`,
  desktop: `(min-width: ${breakpoints.desktopMin}) and (max-width: ${breakpoints.desktopMax})`,
  desktopWide: `(min-width: ${breakpoints.desktopWideMin})`,
};
