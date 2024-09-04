import {
  getCompilerVersions,
  solidityCompiler,
} from '@agnostico/browser-solidity-compiler';
import Web3 from 'web3';
import { LegacyTransaction, FeeMarketEIP1559Transaction } from '@ethereumjs/tx';
import { bytesToHex, hexToBytes } from 'web3-utils';
import type { AddressLike } from '@ethereumjs/util';
// const RemixSimulator = dynamic(
//   () => import('@remix-project/remix-simulator'),
//   { ssr: false }
// );

// Load available WASM solc versions
const loadVersions = async () => {
  const { releases, latestRelease, builds } = await getCompilerVersions() as any;
  return { releases, latestRelease, builds };
};

export const compile = async (source: string) => {
  // Extract solidity version from source
  const versionMatch = source.match(/pragma solidity\s+([\^>=<]?\d+\.\d+\.\d+)/);
  let usingVersion = versionMatch ? versionMatch[1] : '0.8.17'; // Use a more common default version

  // Remove '^' if present
  usingVersion = usingVersion.replace('^', '');

  const availableVersions = await loadVersions();
  console.log("Available versions:", availableVersions);
  console.log("Using version:", usingVersion);

  if (!availableVersions.releases[usingVersion]) {
    throw new Error(`Version ${usingVersion} not found. Available versions: ${Object.keys(availableVersions.releases).join(', ')}`);
  }

  const versionUrl = `https://binaries.soliditylang.org/bin/${availableVersions.releases[usingVersion]}`;
  console.log("Compiler URL:", versionUrl);

  try {
    const compiled = await solidityCompiler({
      version: versionUrl,
      contractBody: source,
      options: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    });
    return compiled as any;
  } catch (error) {
    console.error("Compilation error:", error);
    throw error;
  }
};


export const main = async () => {
  const Provider = (await import('@remix-project/remix-simulator')).Provider;
  const provider = new Provider({ fork: 'shanghai' });
  await provider.init();

  const web3 = new Web3(provider);

  const sampleContract = `
    pragma solidity ^0.8.0;
    contract SimpleStorage {
      uint256 private storedData;
      function set(uint256 x) public {
        storedData = x;
      }
      function get() public view returns (uint256) {
        return storedData;
      }

      function hello() public pure returns (string memory) {
        return "Hello, World!";
      }

      function getOwner() public view returns (address) {
        return address(1);
      }
    }
  `;

  const compiled = await compile(sampleContract);
  const bytecode = compiled.contracts.Compiled_Contracts['SimpleStorage'].evm.bytecode.object;
  const abi = compiled.contracts.Compiled_Contracts['SimpleStorage'].abi;

  console.log('Compiled contract:', bytecode);
  console.log("typeof bytecode: ", typeof bytecode);  
  const accounts = await web3.eth.getAccounts();
  const deployAccount = accounts[0];

  // Deploy contract
  const contract = new web3.eth.Contract(abi);

  const deployOptions = {
    data: "0x" + bytecode,
    arguments: [],
  };

  const instance = await contract
    .deploy(deployOptions)
    .send({
      from: deployAccount,
      gas: 3000000n.toString(),
    });

  console.log('Contract deployed at:', instance.options.address);

  // Interact with the deployed contract
  const callResult = await instance.methods.hello().call();
  console.log('Call result:', callResult);
};






// export const main = async () => {
//   // try {
//     const Provider = (await import('@remix-project/remix-simulator')).Provider;
//     const provider = new Provider({ fork: 'shanghai' })
//     await provider.init()

//     const web3 = new Web3(provider as any);

//     //   const accounts = await web3.eth.getAccounts();
//     //   console.log("Accounts:", accounts);

//       // Example usage of the compile function
//       const sampleContract = `
//         pragma solidity ^0.8.0;
//         contract SimpleStorage {
//           uint256 private storedData;
//           function set(uint256 x) public {
//             storedData = x;
//           }
//           function get() public view returns (uint256) {
//             return storedData;
//           }

//           function hello() public pure returns (string memory) {
//             return "Hello, World!";
//           }

//           function getOwner() public view returns (address) {
//             return address(1);
//           }
//         }
//       `;

//       const compiled = await compile(sampleContract) as any
//       const bytecode = compiled.contracts.Compiled_Contracts['SimpleStorage'].evm.bytecode.object;
//       const abi = compiled.contracts.Compiled_Contracts['SimpleStorage'].abi;

//       console.log("Compiled contract:", compiled);

//         const receipt = await web3.eth.sendSignedTransaction(bytecode) // error here
//         if (!receipt.contractAddress) {
//           throw new Error("Contract deployment failed");
//         }
//         console.log("Contract deployed at:", receipt.contractAddress);

//     //     // const contract = new web3.eth.Contract(abi, receipt.contractAddress);

//     //     // const callResult = await contract.methods.hello().call();

//     //     let value = await web3.eth.call({
//     //       from: accounts[0],
//     //       to: receipt.contractAddress, 
//     //       // call the hello function
//     //       data: ""
//     //     })
//     //     console.log("Call result:", value);

//     const accounts: string[] = await web3.eth.getAccounts()

//     // const contractCreation = `0x02f908df0105010783069f638080b9088e608060405234801561001057600080fd5b5061005a6040518060400160405280601b81526020017f4f776e657220636f6e7472616374206465706c6f7965642062793a00000000008152503361011a60201b6101e91760201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a73560405160405180910390a3610356565b6101b88282604051602401610130929190610265565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506101bc60201b60201c565b5050565b6101dd816101d86101e060201b6102851761020160201b60201c565b60201c565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b61021360201b6102cb17819050919050565b61021b610316565b565b610226816102b1565b82525050565b600061023782610295565b61024181856102a0565b93506102518185602086016102e3565b61025a81610345565b840191505092915050565b6000604082019050818103600083015261027f818561022c565b905061028e602083018461021d565b9392505050565b600081519050919050565b600082825260208201905092915050565b60006102bc826102c3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156103015780820151818401526020810190506102e6565b83811115610310576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fd5b6000601f19601f8301169050919050565b610529806103656000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063a6f9dae114610059575b600080fd5b610043610075565b6040516100509190610382565b60405180910390f35b610073600480360381019061006e91906102ea565b61009e565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610123906103cd565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a73560405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61028182826040516024016101ff92919061039d565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102a6565b5050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6102bd816102b56102856102c0565b63ffffffff16565b50565b6102cb819050919050565b6102d361046e565b565b6000813590506102e4816104dc565b92915050565b600060208284031215610300576102ff61049d565b5b600061030e848285016102d5565b91505092915050565b61032081610409565b82525050565b6000610331826103ed565b61033b81856103f8565b935061034b81856020860161043b565b610354816104a2565b840191505092915050565b600061036c6013836103f8565b9150610377826104b3565b602082019050919050565b60006020820190506103976000830184610317565b92915050565b600060408201905081810360008301526103b78185610326565b90506103c66020830184610317565b9392505050565b600060208201905081810360008301526103e68161035f565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006104148261041b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b8381101561045957808201518184015260208101905061043e565b83811115610468576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f43616c6c6572206973206e6f74206f776e657200000000000000000000000000600082015250565b6104e581610409565b81146104f057600080fd5b5056fea2646970667358221220de534e7b87a9a1d73de47545c783b70d95ffebe049e62821ef2ef1c9a0fd7e8664736f6c63430008070033c080a0e9deb1e1b2cebf79e29cd9e69074f47a6680da51cb175f899a0b8c87aa893fb3a06ab1b35f54e47cd86191accdf8c915f998135c8cb58fccdb85125a9d1d1129da`
//     // const receipt = await web3.eth.sendSignedTransaction(contractCreation)
//     // // owner should be 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
//     // let value = await web3.eth.call({
//     //   from: accounts[0],
//     //   to: receipt.contractAddress!,
//     //   data: '0x893d20e8'
//     // })
//     // console.log("returned: ", value)
//     // const tx = FeeMarketEIP1559Transaction.fromTxData({
//     //   nonce: 1,
//     //   gasLimit: 1000000,
//     //   maxPriorityFeePerGas: '0x01',
//     //   maxFeePerGas: '0x7',
//     //   to: (hexToBytes(receipt.contractAddress!) as AddressLike),
//     //   value: 0,
//     //   data: hexToBytes('0xa6f9dae1000000000000000000000000Ab8483F64d9C6d1EcF9b849Ae677dD3315835cb2')

//     // }).sign(hexToBytes('0x503f38a9c967ed597e47fe25643985f032b072db8075426a92110f82df48dfcb'))
//     // await web3.eth.sendSignedTransaction(bytesToHex(tx.serialize()))
//     // // owner should be 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
//     // value = await web3.eth.call({
//     //   from: accounts[0],
//     //   to: receipt.contractAddress!,
//     //   data: '0x893d20e8'
//     // })
//     // console.log("returned2: ", value)

//   // } catch (error) {
//   //   console.error("An error occurred:", error);
//   // }
// };

// Uncomment the following line to run the main function when the script is executed
// main();