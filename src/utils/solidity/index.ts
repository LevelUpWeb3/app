import { compile } from "./compiler";
import { callContract, deployContract } from "./vm";

// only deploy the first contract in the source code
export async function compileDeployAndCall(sourceCode: string, args: (string | bigint)[] = [], functionName: string): Promise<any> {

  const Provider = (await import('@remix-project/remix-simulator')).Provider;
  const provider = new Provider({ fork: 'shanghai' });
  await provider.init();

  const deployResult = await deployContract(provider, sourceCode, args);

  return await callContract(provider, deployResult, functionName);
}