
// insert a solidity script at the end of a contract
// WARNING: THIS FUNCTION ONLY UPDATE THE LAST CONTRACT IN CODE
export const insertInCode = (code: string, toInsert: string) => {

  const index = code.lastIndexOf('}');
  if (index === -1) {
    throw new Error(`"}" not found in the code`);
  } 

  return code.substring(0, index) + toInsert + code.substring(index);
}