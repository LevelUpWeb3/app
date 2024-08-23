type CodeTemplatesType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const CODE_SOLUTIONS_DEFI: CodeTemplatesType = {
	"erc20": {
		exercise:
			"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\nimport \"./ERC20.sol\";\n\ncontract MyToken is ERC20 {\nconstructor(uint256 initialSupply) ERC20(\"MyToken\", \"MTK\") {\n_mint(msg.sender, initialSupply);\n}\n\nfunction mint(address to, uint256 amount) public {\n_mint(to, amount);\n}\n\nfunction burn(address from, uint256 amount) public {\n_burn(from, amount);\n}\n\nfunction transfer(address to, uint256 amount) public override returns (bool) {\n_transfer(msg.sender, to, amount);\nreturn true;\n}\n\nfunction approve(address spender, uint256 amount) public override returns (bool) {\n_approve(msg.sender, spender, amount);\nreturn true;\n}\n\nfunction transferFrom(address from, address to, uint256 amount) public override returns (bool) {\n_transfer(from, to, amount);\n_approve(from, msg.sender, allowance(from, msg.sender) - amount);\nreturn true;\n}\n}"
	},
};