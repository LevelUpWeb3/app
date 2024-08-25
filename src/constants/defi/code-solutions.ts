type CodeTemplatesType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const CODE_SOLUTIONS_DEFI: CodeTemplatesType = {
	"erc20": {
		exercise:
			"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\nimport \"./ERC20.sol\";\n\ncontract Swap is ERC20 {\nconstructor(uint256 initialSupply) ERC20(\"MyToken\", \"MTK\") {\n_mint(msg.sender, initialSupply);\n}\n\nfunction mint(address to, uint256 amount) public {\n_mint(to, amount);\n}\n\nfunction burn(address from, uint256 amount) public {\n_burn(from, amount);\n}\n\nfunction transfer(address to, uint256 amount) public override returns (bool) {\n_transfer(msg.sender, to, amount);\nreturn true;\n}\n\nfunction approve(address spender, uint256 amount) public override returns (bool) {\n_approve(msg.sender, spender, amount);\nreturn true;\n}\n\nfunction transferFrom(address from, address to, uint256 amount) public override returns (bool) {\n_transfer(from, to, amount);\n_approve(from, msg.sender, allowance(from, msg.sender) - amount);\nreturn true;\n}\n}"
	},
	"swap": {
		exercise:
			"pragma solidity ^0.8.7;\n\n// This is not a full swapping contract, but an implementation of how to interact with Uniswap or a Uniswap clone\ncontract Swap {\naddress private constant UNISWAP_V2_ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;\naddress private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n\nfunction swap(\naddress _tokenIn,\naddress _tokenOut,\nuint256 _amountIn,\nuint256 _amountOutMin,\naddress _to\n) external {\nIERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);\nIERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);\n\naddress;\npath;\npath[0] = _tokenIn;\npath[1] = WETH;\npath[2] = _tokenOut;\n}\n\nIUniswapV2Router(UNISWAP_V2_ROUTER).swapExactTokensForTokens(\n_amountIn,\n_amountOutMin,\npath,\n_to,\nblock.timestamp\n);\n}\n}\n\ninterface IUniswapV2Router {\nfunction swapExactTokensForTokens(\nuint256 amountIn,\nuint256 amountOutMin,\naddress[] calldata path,\naddress to,\nuint256 deadline\n) external returns (uint256[] memory amounts);\n}",
	}
};