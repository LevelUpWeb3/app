import { compile } from "./compiler";
import { callContract, deployContract } from "./vm";

// only deploy the first contract in the source code
export async function compileDeployAndCall(
  sourceCode: string,
  deployArgs: (string | bigint)[] = [],
  functionName: string, 
  fctArgs?: any
): Promise<any> {

  const Provider = (await import('@remix-project/remix-simulator')).Provider;
  const provider = new Provider({ fork: 'shanghai' });
  await provider.init();

  const deployResult = await deployContract(provider, sourceCode, deployArgs);

  return await callContract(provider, deployResult, functionName, fctArgs);
}

// only deploy the first contract in the source code
export async function compileDeployAndMultiCall(
  sourceCode: string,
  deployArgs: (string | bigint)[] = [],
  calls: { fctName: string, fctArg?: any }[]
): Promise<any[]> {

  const Provider = (await import('@remix-project/remix-simulator')).Provider;
  const provider = new Provider({ fork: 'shanghai' });
  await provider.init();

  const deployResult = await deployContract(provider, sourceCode, deployArgs);

  const results: any[] = [];
  for (const call of calls) {
    results.push(await callContract(provider, deployResult, call.fctName, call.fctArg));
  }

  return results;
}