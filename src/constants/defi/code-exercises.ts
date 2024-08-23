type CodeTemplatesType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const CODE_EXERCISES_DEFI: CodeTemplatesType = {
  "erc20": {
    exercise:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\n// Import the ERC20.sol file\n\n// Define your ERC20 token contract\n\n// Create a constructor that mints the initial supply to the deployer of the contract\n\n// Define a function to mint new tokens to a specified address\n\n// Define a function to burn tokens from a specified address\n\n// Define a function to transfer tokens from the caller's address to a specified address\n\n// Define a function to approve an address to spend a certain amount of tokens on behalf of the caller\n\n// Define a function to transfer tokens from one address to another using an allowance"
  },
};