// those unit tests aims to verify the solidity contracts written by the user

import { compileDeployAndCall, compileDeployAndMultiCall } from "@/utils/solidity";
import { insertInCode } from "@/utils/solidity/insertInCode";


// Unit tests can be solidity tests or simple regex tests
export const unitTests = {
  // "lesson name": {
  //   exercise1: (code: string) => boolean, (return true if the code is correct, false otherwise)
  //   exercise2: {...}
  // }
  "data-types": {
    exercise1: async (code: string) => { // boolean
      // add a function to check because if the user does not specify 'public' in the variable declaration, 
      // the compiler won't make a getter for it so the test won't pass even if the user's code is correct 
      // regarding the exercise's request
      const fullCode = insertInCode(code, 'function check() public view returns (bool) {\n\t\treturn myBool;\n\t}');

      return await compileDeployAndCall(fullCode, [], "check") === true;
    },
    exercise2: async (code: string) => { // uint
      // add a function to check because if the user does not specify 'public' in the variable declaration, 
      // the compiler won't make a getter for it so the test won't pass even if the user's code is correct 
      // regarding the exercise's request
      const fullCode = insertInCode(code, 'function check() public view returns (uint256) {\n\t\treturn myUint;\n\t}');
      return await compileDeployAndCall(fullCode, [], "check") === 123n;
    },
    exercise3: async (code: string) => { // int
      // add a function to check because if the user does not specify 'public' in the variable declaration, 
      // the compiler won't make a getter for it so the test won't pass even if the user's code is correct 
      // regarding the exercise's request
      const fullCode = insertInCode(code, 'function check() public view returns (int32) {\n\t\treturn myInt;\n\t}');
      return await compileDeployAndCall(fullCode, [], "check") === -123n;
    },
    exercise4: async (code: string) => { // address
      // add a function to check because if the user does not specify 'public' in the variable declaration, 
      // the compiler won't make a getter for it so the test won't pass even if the user's code is correct 
      // regarding the exercise's request
      const fullCode = insertInCode(code, 'function check() public view returns (address) {\n\t\treturn myAddress;\n\t}');
      return await compileDeployAndCall(fullCode, [], "check") === "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
    },
    exercise5: async (code: string) => { // myUint, int and address
      // for each variable, add a function to check because if the user does not specify 'public' in the variable declaration, 
      // the compiler won't make a getter for it so the test won't pass even if the user's code is correct 
      // regarding the exercise's request
      const fullCode = insertInCode(code, 'function checkUint() public view returns (uint256) {\n\t\treturn myUint;\n\t}\nfunction checkInt() public view returns (int) {\n\t\treturn myInt;\n\t}\nfunction checkAddress() public view returns (address) {\n\t\treturn myAddress;\n\t}');

      const expected = [123n, -123n, "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"];
      return (await compileDeployAndMultiCall(fullCode, [], [{ fctName: "checkUint" }, { fctName: "checkInt" }, { fctName: "checkAddress" }])).every((value, index) => value === expected[index]);
    },
  },
  "operator": {
    exercise1: async (code: string) => {
      // check if the user's code contain '*=' operator
      if (!code.includes("*=")) throw new Error("You should use the '*=' operator");

      //todo: check if a and b are initialized with 10 and 2

      return await compileDeployAndCall(code, [], "multiply") === 20n;
    }
  },
  "constants": {
    exercise1: async (code: string) => {
      // add a function to check because if the user does not specify 'public' in the variable declaration, 
      // the compiler won't make a getter for it so the test won't pass even if the user's code is correct 
      // regarding the exercise's request
      const fullCode = insertInCode(code, 'function check() public view returns (uint256) {\n\t\treturn MAX_BLOCKS;\n\t}\nfunction tryChange() public {\n\t\tMAX_BLOCKS = 100;\n\t}');

      try {
        await compileDeployAndCall(fullCode, [], "tryChange");
        return false; // the variable is not a constant, the test should fail
      } catch (e) {
        return await compileDeployAndCall(fullCode, [], "check") === 5000n;
      }
    }
  },
  "immutable": {
    exercise1: async (code: string) => {
      // look for a constructor
      if (!code.includes("constructor")) throw new Error("You should use a constructor to instantiate MAX_BLOCKS");

      let fullCode = insertInCode(code, 'function check() public view returns (uint256) {\n\t\tMAX_BLOCKS = 3;\n\t\treturn MAX_BLOCKS;\n\t}');

      try {
        await compileDeployAndCall(fullCode, [], "check");
        return false; // the variable is not immutable, the test should fail
      } catch (e) {

        fullCode = insertInCode(code, 'function check() public view returns (uint256) {\n\t\treturn MAX_BLOCKS;\n\t}');

        return await compileDeployAndCall(fullCode, [], "check") === 5000n;
      }
    },
  },
  "variables": {
    exercise1: async (code: string) => {
      // add a function to check because if the user does not specify 'public' in the variable declaration, 
      // the compiler won't make a getter for it so the test won't pass even if the user's code is correct 
      // regarding the exercise's request
      const fullCode = insertInCode(code, 'function check() public view returns (uint256) {\n\t\treturn totalSupply;\n\t}');

      return await compileDeployAndCall(fullCode, [], "check") === 1000000n;
    },
  }
}