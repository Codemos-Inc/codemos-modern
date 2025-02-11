import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return {
    // Magic functions
    magicFunction: colors.scope07,
    // Self parameters
    selfParameter: colors.scope03,
    // Class parameters
    clsParameter: colors.scope03,
    // Decorator functions
    "function.decorator": colors.scope01,
    // Builtin constants
    builtinConstant: colors.scope06,
  };
};
