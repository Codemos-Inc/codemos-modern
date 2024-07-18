import { ThemeContext } from "../../../../../@types/index";
import { getMixedColorHex9 } from "../../../../../color/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "chat.requestBorder": colors.stroke.divider.default,
    "chat.requestBackground": colors.fill.control.subtle,
    "chat.slashCommandBackground": colors.fill.control.rest,
    "chat.slashCommandForeground": colors.fill.accentText.pri,
    "chat.avatarBackground": getMixedColorHex9(
      colors.fill.control.rest,
      colors.bg.solid.surface,
    ),
    "chat.avatarForeground": colors.fill.accentText.pri,
  };
};
