import { ThemeContext } from "../../../../../@types/index";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const editorRules = {
    "editor.background": colors.bg.solid.canvas,
    "editor.foreground": colors.fill.text.sec,
    "editorLineNumber.foreground": colors.fill.text.disabled,
    "editorLineNumber.activeForeground": colors.fill.text.pri,
    "editorLineNumber.dimmedForeground": colors.fill.text.ghost,
    "editorCursor.background": colors.fill.textOnColor.pri,
    "editorCursor.foreground": colors.fill.accent.pri,
    "editorMultiCursor.primary.background": colors.fill.textOnColor.pri,
    "editorMultiCursor.primary.foreground": colors.fill.accent.pri,
    "editorMultiCursor.secondary.background": colors.fill.textOnColor.pri,
    "editorMultiCursor.secondary.foreground": colors.fill.accent.ter,
    "editor.selectionBackground": colors.basic.neutral.sen,
    "editor.selectionForeground": colors.fill.text.pri,
    "editor.inactiveSelectionBackground": colors.basic.neutral.sep,
    "editor.selectionHighlightBackground": colors.basic.neutral.sep,
    "editor.selectionHighlightBorder": colors.stroke.control.default,
    "editor.wordHighlightBackground": colors.basic.def.pink.qua,
    "editor.wordHighlightBorder": colors.stroke.control.default,
    "editor.wordHighlightStrongBackground": colors.basic.def.purple.qua,
    "editor.wordHighlightStrongBorder": colors.stroke.control.default,
    "editor.wordHighlightTextBackground": colors.basic.def.pink.qua,
    "editor.wordHighlightTextBorder": colors.stroke.control.default,
    "editor.findMatchBackground": colors.basic.def.mint.qua,
    "editor.findMatchHighlightBackground": colors.basic.def.mint.qui,
    "editor.findRangeHighlightBackground": colors.basic.neutral.sep,
    "editor.findMatchBorder": colors.stroke.control.default,
    "editor.findMatchHighlightBorder": colors.stroke.control.default,
    "editor.findRangeHighlightBorder": TRANSPARENT,
    "search.resultsInfoForeground": colors.fill.text.disabled,
    "searchEditor.findMatchBackground": colors.basic.def.mint.qua,
    "searchEditor.findMatchBorder": colors.stroke.control.default,
    "searchEditor.textInputBorder": colors.stroke.control.default,
    "editor.hoverHighlightBackground": colors.basic.neutral.sep,
    "editor.lineHighlightBackground": TRANSPARENT,
    "editor.lineHighlightBorder": colors.stroke.control.default,
    "editorWatermark.foreground": colors.fill.text.sec,
    "editorUnicodeHighlight.border": colors.basic.def.yellow.pri,
    "editorUnicodeHighlight.background": TRANSPARENT,
    "editorLink.activeForeground": colors.fill.accentText.pri,
    "editor.rangeHighlightBackground": colors.basic.neutral.sep,
    "editor.rangeHighlightBorder": TRANSPARENT,
    "editor.symbolHighlightBackground": TRANSPARENT,
    "editor.symbolHighlightBorder": colors.basic.def.purple.pri,
    "editorWhitespace.foreground": colors.fill.text.ghost,
    "editorIndentGuide.background1": colors.basic.alt.yellow.ter,
    "editorIndentGuide.background2": colors.basic.alt.orange.ter,
    "editorIndentGuide.background3": colors.basic.alt.red.ter,
    "editorIndentGuide.background4": colors.basic.alt.purple.ter,
    "editorIndentGuide.background5": colors.basic.alt.blue.ter,
    "editorIndentGuide.background6": colors.basic.alt.green.ter,
    "editorIndentGuide.activeBackground1": colors.basic.alt.yellow.pri,
    "editorIndentGuide.activeBackground2": colors.basic.alt.orange.pri,
    "editorIndentGuide.activeBackground3": colors.basic.alt.red.pri,
    "editorIndentGuide.activeBackground4": colors.basic.alt.purple.pri,
    "editorIndentGuide.activeBackground5": colors.basic.alt.blue.pri,
    "editorIndentGuide.activeBackground6": colors.basic.alt.green.pri,
    "editorInlayHint.background": colors.basic.neutral.sen,
    "editorInlayHint.foreground": colors.fill.text.sec,
    "editorInlayHint.typeForeground": colors.basic.def.mint.pri,
    "editorInlayHint.typeBackground": colors.fill.system.bg.mint,
    "editorInlayHint.parameterForeground": colors.basic.alt.orange.pri,
    "editorInlayHint.parameterBackground": colors.fill.system.bg.orange,
    "editorRuler.foreground": colors.stroke.divider.default,
    "editor.linkedEditingBackground": colors.basic.def.blue.qua,
    "editorCodeLens.foreground": colors.fill.text.disabled,
    "editorLightBulb.foreground": colors.basic.def.yellow.pri,
    "editorLightBulbAutoFix.foreground": colors.basic.def.green.pri,
    "editorLightBulbAi.foreground": colors.basic.def.purple.pri,
    "editorBracketMatch.background": colors.basic.def.brown.qua,
    "editorBracketMatch.border": colors.stroke.control.default,
    "editorBracketHighlight.foreground1": colors.basic.alt.yellow.pri,
    "editorBracketHighlight.foreground2": colors.basic.alt.orange.pri,
    "editorBracketHighlight.foreground3": colors.basic.alt.red.pri,
    "editorBracketHighlight.foreground4": colors.basic.alt.purple.pri,
    "editorBracketHighlight.foreground5": colors.basic.alt.blue.pri,
    "editorBracketHighlight.foreground6": colors.basic.alt.green.pri,
    "editorBracketHighlight.unexpectedBracket.foreground":
      colors.basic.def.red.pri,
    "editorBracketPairGuide.activeBackground1": colors.basic.alt.yellow.pri,
    "editorBracketPairGuide.activeBackground2": colors.basic.alt.orange.pri,
    "editorBracketPairGuide.activeBackground3": colors.basic.alt.red.pri,
    "editorBracketPairGuide.activeBackground4": colors.basic.alt.purple.pri,
    "editorBracketPairGuide.activeBackground5": colors.basic.alt.blue.pri,
    "editorBracketPairGuide.activeBackground6": colors.basic.alt.green.pri,
    "editorBracketPairGuide.background1": colors.basic.alt.yellow.ter,
    "editorBracketPairGuide.background2": colors.basic.alt.orange.ter,
    "editorBracketPairGuide.background3": colors.basic.alt.red.ter,
    "editorBracketPairGuide.background4": colors.basic.alt.purple.ter,
    "editorBracketPairGuide.background5": colors.basic.alt.blue.ter,
    "editorBracketPairGuide.background6": colors.basic.alt.green.ter,
    "editor.foldBackground": colors.basic.neutral.oct,
    "editorOverviewRuler.background": colors.bg.solid.base,
    "editorOverviewRuler.border": TRANSPARENT,
    "editorOverviewRuler.findMatchForeground": colors.basic.def.mint.sec,
    "editorOverviewRuler.rangeHighlightForeground": colors.basic.neutral.sep,
    "editorOverviewRuler.selectionHighlightForeground":
      colors.basic.neutral.sen,
    "editorOverviewRuler.wordHighlightForeground": colors.basic.def.pink.sec,
    "editorOverviewRuler.wordHighlightStrongForeground":
      colors.basic.def.purple.sec,
    "editorOverviewRuler.wordHighlightTextForeground":
      colors.basic.def.pink.sec,
    "editorOverviewRuler.modifiedForeground": colors.basic.def.blue.sec,
    "editorOverviewRuler.addedForeground": colors.basic.def.green.sec,
    "editorOverviewRuler.deletedForeground": colors.basic.def.red.sec,
    "editorOverviewRuler.errorForeground": colors.basic.def.red.pri,
    "editorOverviewRuler.warningForeground": colors.basic.def.orange.pri,
    "editorOverviewRuler.infoForeground": colors.basic.def.blue.pri,
    "editorOverviewRuler.bracketMatchForeground": colors.basic.def.brown.sec,
    "editorOverviewRuler.inlineChatInserted": colors.basic.def.green.sec,
    "editorOverviewRuler.inlineChatRemoved": colors.basic.def.red.sec,
    "editorError.foreground": colors.basic.def.red.pri,
    "editorError.border": TRANSPARENT,
    "editorError.background": TRANSPARENT,
    "editorWarning.foreground": colors.basic.def.orange.pri,
    "editorWarning.border": TRANSPARENT,
    "editorWarning.background": TRANSPARENT,
    "editorInfo.foreground": colors.basic.def.blue.pri,
    "editorInfo.border": TRANSPARENT,
    "editorInfo.background": TRANSPARENT,
    "editorHint.foreground": colors.basic.def.mint.pri,
    "editorHint.border": TRANSPARENT,
    "problemsErrorIcon.foreground": colors.basic.def.red.pri,
    "problemsWarningIcon.foreground": colors.basic.def.orange.pri,
    "problemsInfoIcon.foreground": colors.basic.def.blue.pri,
    "editorUnnecessaryCode.border": TRANSPARENT,
    "editorUnnecessaryCode.opacity": colors.fill.text.sec,
    "editorGutter.background": colors.bg.solid.base,
    "editorGutter.modifiedBackground": colors.basic.def.blue.pri,
    "editorGutter.addedBackground": colors.basic.def.green.pri,
    "editorGutter.deletedBackground": colors.basic.def.red.pri,
    "editorGutter.commentRangeForeground": colors.fill.control.prominent,
    "editorGutter.commentGlyphForeground": colors.fill.text.sec,
    "editorGutter.commentUnresolvedGlyphForeground": colors.basic.def.blue.pri,
    "editorGutter.foldingControlForeground": colors.fill.text.sec,
    "editorCommentsWidget.resolvedBorder": colors.basic.neutral.qua,
    "editorCommentsWidget.unresolvedBorder": colors.basic.def.blue.pri,
    "editorCommentsWidget.rangeBackground": colors.basic.def.blue.qui,
    "editorCommentsWidget.rangeActiveBackground": colors.basic.def.blue.qua,
    "editorCommentsWidget.replyInputBackground": colors.fill.control.restSolid, // 🟢 Undesired solution!
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    editorRules["editorGutter.background"] = colors.bg.solid.canvas;
    editorRules["editorOverviewRuler.background"] = colors.bg.solid.canvas;
  }
  return editorRules;
};
