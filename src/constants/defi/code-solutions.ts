type CodeTemplatesType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const CODE_SOLUTIONS_DEFI: CodeTemplatesType = {
	"erc20": {
		exercise:
			"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\nimport \"./ERC20.sol\";\n\ncontract ERC20Lending is ERC20 {\n\nmapping(address => uint256) public borrowedAmounts;\n\nfunction deposit(uint256 amount) external {\ntransferFrom(msg.sender, address(this), amount);\n}\n\nfunction withdraw(uint256 amount) external {\nrequire(balanceOf(msg.sender) >= amount, \"Insufficient balance\");\ntransfer(msg.sender, amount);\n}\n\nfunction borrow(uint256 amount) external {\nborrowedAmounts[msg.sender] += amount;\n_mint(msg.sender, amount);\n}\n\nfunction repay(uint256 amount) external {\nrequire(borrowedAmounts[msg.sender] >= amount, \"Repayment exceeds borrowed amount\");\nborrowedAmounts[msg.sender] -= amount;\n_burn(msg.sender, amount);\n}\n}",
	},
};