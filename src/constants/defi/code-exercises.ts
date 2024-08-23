type CodeTemplatesType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const CODE_EXERCISES_DEFI: CodeTemplatesType = {
  "erc20": {
    exercise:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\nimport \"./ERC20.sol\";\n\ncontract ERC20Lending is ERC20 {\n// Create a mapping to track how much ERC20 tokens each user has borrowed. Name it 'borrowedAmounts'.\n// Define a function named 'deposit' that allows users to deposit ERC20 tokens.\n// Use transferFrom to transfer tokens from the user to the contract.\n// Ensure to update the user's balance in the ERC20 contract.\n// Define a function named 'withdraw' that allows users to withdraw ERC20 tokens.\n// Check the user's balance before transferring tokens back to their account.\n// Define a function named 'borrow' that allows users to borrow ERC20 tokens.\n// Ensure to update the borrowedAmounts mapping with the amount borrowed by the user.\n// Use the _mint function to create new tokens for the borrower.\n// Define a function named 'repay' that allows users to repay borrowed ERC20 tokens.\n// Ensure that the repayment amount does not exceed the borrowed amount.\n// Use the _burn function to destroy the tokens being repaid.\n}",
  },
};