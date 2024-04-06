export const LANGUAGE_VERSIONS = {
  python: "3.10.0",
  javascript: "18.15.0",
  solidity: "0.8.7",
  vyper: "0.2.15"
};

export const CODE_SNIPPETS = {
  variables: {
    solidity: `//Solidity code below \n// Declare a variable`,
    vyper: `#Vyper code below \n# Declare a variable`,
    python: `#Python code below \n# Declare a variable`,
    javascript: `//Javascript code below \n// Declare a variable`
  },
  lesson2: {
    solidity: `//This is lesson 2\npragma solidity ^0.8.7;\n\ncontract Lesson2 {\n\nstring public name = "Lesson 2";\nuint256 public number = 2;\n\n}`,
    vyper: `\n#This is lesson 2`,
    python: `\n#This is lesson 2 Python`,
    javascript: `\n//This is lesson 2 JS`
  }
};
