const languages = {
  "Top Overall": encodeURIComponent(
    "javascript language:python language:ruby language:go language:html language:css language:java language:swift language:php language:rust language:clojure"
  ),
  Javascript: "javascript",
  Go: "go",
  Rust: "rust",
  Swift: "swift",
  Web: "html language:css",
  PHP: "php",
  CSS: "css",
  C: "C",
  Python: "python",
  Ruby: "ruby",
  Java: "java",
  Clojure: "clojure"
};

const times = {
  "Past Day": 2,
  "Past Week": 8,
  "Past Month": 32,
  "Past Year": 365
};

const themes = {
  "Top Overall": "#673ab7",
  Javascript: "#ff9800",
  Go: "#00BCD4",
  Rust: "#5d4037",
  Swift: "#fd3024",
  Web: "#009688",
  PHP: "#6c70aa",
  CSS: "#f44336",
  C: "#3f51b5",
  Python: "#607d8b",
  Ruby: "#e91e63",
  Java: "#795548",
  Clojure: "#90b4fe"
};

module.exports = {
  languages,
  times,
  themes
};
