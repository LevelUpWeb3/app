// example of use available here: https://github.com/ethereum/remix-project/tree/64bec7b787aefe8ec207fa92a865766e4a38a6be/libs/remix-simulator/test

import { compile } from './compiler';
import Web3, { Contract } from 'web3';

import { DeployOptions } from './interfaces';


// compile and deploy the source code into the vm
export const deployContract = async (provider: any, source: string, args: (string | bigint)[] = [], options?: DeployOptions) => {

  const compiled = await compile(source);
  console.log("raw contract: ", source);

  if (!compiled.contracts) {
    throw new Error('Compilation failed');
  }

  const contractName = options?.contractToDeploy || Object.keys(compiled.contracts.Compiled_Contracts)[0];

  console.log("contractName: ", contractName);
  console.log("compiled.contracts: ", compiled.contracts);

  const bytecode = compiled.contracts.Compiled_Contracts[contractName].evm.bytecode.object;
  const abi = compiled.contracts.Compiled_Contracts[contractName].abi;

  const web3 = new Web3(provider);

  const accounts = await web3.eth.getAccounts();
  if (options?.account && !accounts.includes(options?.account)) {
    throw new Error(`Account ${options?.account} not found in the list of available accounts`);
  }
  const deployAccount = options?.account || accounts[0];

  // Deploy contract
  const contract = new web3.eth.Contract(abi);

  const deployOptions = {
    data: "0x" + bytecode,
    arguments: args
  };

  const instance = await contract
    .deploy(deployOptions)
    .send({
      from: deployAccount,
      gas: 3000000n.toString(),
      value: options?.value?.toString() || "0"
    });

  console.log('Contract deployed at:', instance.options.address);

  if (!instance.options.address) {
    throw new Error('Failed to deploy contract');
  }

  return { address: instance.options.address, abi } as { address: string, abi: any };
}


export const callContract = async (provider: any, contract: { address: string, abi: any }, method: string, args: (string | bigint)[] = []) => {

  const web3 = new Web3(provider);

  const instance = new Contract(contract.abi, contract.address);
  instance.setProvider(web3.currentProvider);
  // console.log("methode: ", method);
  // Interact with the deployed contract
  const callResult = await instance.methods[method](...args).call();
  // console.log('Call result:', callResult);

  return callResult;
}
