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
  "swap": {
    exercise:
      "pragma solidity ^0.8.7;\n\ncontract TestUniswap {\n// Provide the Uniswap V2 router address and the WETH address\n\n// Create a swap function that takes input and output token addresses, the input amount, the minimum output amount, and the recipient's address\n\n// Transfer the input tokens from the sender to the contract\n\n// Approve the Uniswap router to spend the input tokens\n\n// Define the swapping path: directly between the tokens if either is WETH, or through WETH otherwise\n\n// Call the Uniswap router's swapExactTokensForTokens function to execute the swap\n}",
  }
};