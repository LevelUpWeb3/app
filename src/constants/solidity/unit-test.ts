// those unit tests aims to verify the solidity contracts written by the user

import { compileDeployAndCall } from "@/utils/solidity";
import { insertInCode } from "@/utils/solidity/insertInCode";


// Unit tests can be solidity tests or simple regex tests
export const unitTests = {
  // "lesson name": {
  //   exercise1: (code: string) => boolean, (return true if the code is correct, false otherwise)
  //   exercise2: {...}
  // }
  "data-types": {
    exercise1: async (code: string) => {
      // add a function to check because if the user does not specify 'public' in the variable declaration, 
      // the compiler won't make a getter for it so the test won't pass even if the user's code is correct 
      // regarding the exercise's request
      const fullCode = insertInCode(code, 'function check() public view returns (bool) {\n\t\treturn myBool;\n\t}');

      return await compileDeployAndCall(fullCode, [], "check") === true;
    }
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