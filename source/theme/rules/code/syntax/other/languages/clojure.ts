import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Global variables
    {
      scope: ["meta.embedded.block.clojure entity.global", "source.clojure entity.global"],
      settings: {
        foreground: colors.scope13,
        fontStyle: "",
      },
    },
    // Keywords
    {
      scope: [
        "meta.embedded.block.clojure constant.keyword",
        "meta.embedded.block.clojure keyword.control",
        "source.clojure constant.keyword",
        "source.clojure keyword.control",
      ],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
    // Keywords
    {
      scope: ["meta.embedded.block.clojure storage.control", "source.clojure storage.control"],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
    // Symbols
    {
      scope: ["meta.embedded.block.clojure meta.symbol", "source.clojure meta.symbol"],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
  ];
};
