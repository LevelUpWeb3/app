const markdownCodeViewer = {
  'code[class*="language-"]': {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    color: "#eee",
    background: "#2f2f2f",
    fontFamily: "'Fira Code', monospace",
    fontSize: "1em",
    lineHeight: "1.5em",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    color: "#eee",
    background: "#2f2f2f",
    fontFamily: "'Fira Code', monospace",
    fontSize: "1em",
    lineHeight: "1.5em",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    overflow: "auto",
    position: "relative",
    margin: "0.5em 0",
    padding: "1.25em 1em",
  },
  'code[class*="language-"]::-moz-selection': {
    background: "#363636",
  },
  'pre[class*="language-"]::-moz-selection': {
    background: "#363636",
  },
  'code[class*="language-"] ::-moz-selection': {
    background: "#363636",
  },
  'pre[class*="language-"] ::-moz-selection': {
    background: "#363636",
  },
  'code[class*="language-"]::selection': {
    background: "#363636",
  },
  'pre[class*="language-"]::selection': {
    background: "#363636",
  },
  'code[class*="language-"] ::selection': {
    background: "#363636",
  },
  'pre[class*="language-"] ::selection': {
    background: "#363636",
  },
  ':not(pre) > code[class*="language-"]': {
    whiteSpace: "normal",
    borderRadius: "0.2em",
    padding: "0.1em",
  },
  ".language-css > code": {
    color: "#fd9170",
  },
  ".language-sass > code": {
    color: "#fd9170",
  },
  ".language-scss > code": {
    color: "#fd9170",
  },
  '[class*="language-"] .namespace': {
    Opacity: "0.7",
  },
  atrule: {
    color: "#B6A9FF",
  },
  "attr-name": {
    color: "#E57D49",
  },
  "attr-value": {
    color: "#5EC77C",
  },
  attribute: {
    color: "#5EC77C",
  },
  boolean: {
    color: "#B6A9FF",
  },
  builtin: {
    color: "#E57D49",
  },
  cdata: {
    color: "#80cbc4",
  },
  char: {
    color: "#80cbc4",
  },
  class: {
    color: "#E57D49",
  },
  "class-name": {
    color: "#D9E262",
  },
  comment: {
    color: "#616161",
  },
  constant: {
    color: "#B6A9FF",
  },
  deleted: {
    color: "#ff6666",
  },
  doctype: {
    color: "#616161",
  },
  entity: {
    color: "#ff6666",
  },
  function: {
    color: "#B6A9FF",
  },
  hexcode: {
    color: "#D9E262",
  },
  id: {
    color: "#B6A9FF",
    fontWeight: "bold",
  },
  important: {
    color: "#B6A9FF",
    fontWeight: "bold",
  },
  inserted: {
    color: "#80cbc4",
  },
  keyword: {
    color: "#2BA6B7",
  },
  number: {
    color: "#ABABAB",
  },
  operator: {
    color: "#D9E262",
  },
  prolog: {
    color: "#616161",
  },
  property: {
    color: "#80cbc4",
  },
  "pseudo-class": {
    color: "#5EC77C",
  },
  "pseudo-element": {
    color: "#5EC77C",
  },
  punctuation: {
    color: "#D9E262",
  },
  regex: {
    color: "#D9E262",
  },
  selector: {
    color: "#ff6666",
  },
  string: {
    color: "#5EC77C",
  },
  symbol: {
    color: "#B6A9FF",
  },
  tag: {
    color: "#ff6666",
  },
  unit: {
    color: "#fd9170",
  },
  url: {
    color: "#ff6666",
  },
  variable: {
    color: "#ff6666",
  },
};

export default markdownCodeViewer;
