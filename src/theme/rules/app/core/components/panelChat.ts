import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "interactive.activeCodeBorder": colors.fill.accent.pri,
    "interactive.inactiveCodeBorder": colors.fill.accent.ter,
  };
};
