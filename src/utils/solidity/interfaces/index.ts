
export interface DeployOptions {
  account?: string; // account to deploy the contract from
  contractToDeploy?: string; // contract to deploy (if the source code contains multiple contracts)
  value?: number; // value to send with the transaction
}