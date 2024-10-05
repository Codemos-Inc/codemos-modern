import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Commands
    {
      scope: [
        "entity.name.command",
        "meta.embedded.block.shellscript support.function",
        "source.shell support.function",
      ],
      settings: {
        foreground: colors.s03,
      },
    },
    // Options
    {
      scope: [
        "meta.embedded.block.shellscript constant.other.option",
        "source.shell constant.other.option",
      ],
      settings: {
        foreground: colors.s11,
      },
    },
    // Operators
    {
      scope: [
        "meta.embedded.block.shellscript keyword.operator.comparison",
        "meta.embedded.block.shellscript keyword.operator.logical",
        "meta.embedded.block.shellscript keyword.operator.redirect",
        "source.shell keyword.operator.comparison",
        "source.shell keyword.operator.logical",
        "source.shell keyword.operator.redirect",
      ],
      settings: {
        foreground: colors.s06,
      },
    },
    // Pipe operator
    {
      scope: [
        "meta.embedded.block.shellscript keyword.operator.pipe",
        "source.shell keyword.operator.pipe",
      ],
      settings: {
        foreground: colors.s16,
      },
    },
    // Herestring operator
    {
      scope: [
        "meta.embedded.block.shellscript keyword.operator.herestring",
        "source.shell keyword.operator.herestring",
      ],
      settings: {
        foreground: colors.s09,
      },
    },
    // Case entries
    {
      scope: [
        "meta.embedded.block.shellscript keyword.operator.pattern.case",
        "meta.embedded.block.shellscript meta.case.entry constant.character.escape",
        "meta.embedded.block.shellscript meta.case.entry constant.character",
        "meta.embedded.block.shellscript meta.case.entry string.regexp",
        "source.shell keyword.operator.pattern.case",
        "source.shell meta.case.entry constant.character.escape",
        "source.shell meta.case.entry constant.character",
        "source.shell meta.case.entry string.regexp",
      ],
      settings: {
        foreground: colors.s16,
      },
    },
    // Interpolated strings
    {
      scope: [
        "meta.embedded.block.shellscript punctuation.definition.subshell",
        "meta.embedded.block.shellscript punctuation.definition.variable",
        "source.shell punctuation.definition.subshell",
        "source.shell punctuation.definition.variable",
      ],
      settings: {
        foreground: colors.s14,
      },
    },
    // Language variables
    {
      scope: [
        "meta.embedded.block.shellscript variable.language",
        "source.shell variable.language",
      ],
      settings: {
        foreground: colors.s13,
      },
    },
    // And punctuation
    {
      scope: [
        "meta.embedded.block.shellscript punctuation.separator.statement.and",
        "source.shell punctuation.separator.statement.and",
      ],
      settings: {
        foreground: colors.s12,
      },
    },
    // Array punctuation
    {
      scope: [
        "meta.embedded.block.shellscript punctuation.section.array",
        "source.shell punctuation.section.array",
      ],
      settings: {
        foreground: colors.sxx,
      },
    },
    // Semicolon separator
    {
      scope: [
        "meta.embedded.block.shellscript punctuation.terminator",
        "source.shell punctuation.terminator",
      ],
      settings: {
        foreground: colors.s09,
      },
    },
  ];
};