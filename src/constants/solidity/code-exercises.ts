type CodeTemplatesType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const CODE_EXERCISES: CodeTemplatesType = {
  "data-types": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type bool with the name 'myBool' and initialize it with the value true\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type uint256 with the name 'myUint' and initialize it with the value 123\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type int32 with the name 'myInt' and initialize it with the value -123\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type address with the name 'myAddress' and initialize it with the value 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type uint, int and address with the names 'myUint', 'myInt', and 'myAddress' respectively. Initialize 'myUint' with 123, 'myInt' with -123, and 'myAddress' with 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4\n}",
  },
  variables: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Declare a state variable of type uint256 with the name 'totalSupply' and initialize it with the value 1000000\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Inside a function named 'calculate', declare a local variable of type uint256 with the name 'result' and initialize it with the value 500\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Inside a function named 'getBalance', return the balance of the current contract using the global variable 'balance'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Declare a state variable of type address with the name 'owner' and initialize it with the address of the contract deployer\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Inside a function named 'getGasPrice', return the current gas price using the global variable 'gasprice'\n}",
  },
  constants: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type uint256 with the name 'MAX_BLOCKS' and initialize it with the value 5000\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type string with the name 'TOKEN_NAME' and initialize it with the value 'MyToken'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type string with the name 'TOKEN_TICKER' and initialize it with the value 'MTK'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type string with the name 'CONTRACT_VERSION' and initialize it with the value 'v1.0.0'\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type uint256 with the name 'GAS_LIMIT' and initialize it with the value 3000000\n}",
  },
  immutable: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type uint256 with the name 'MAX_BLOCKS' and assign it a value of 5000 in the constructor\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type string with the name 'TOKEN_NAME' and assign it a value of 'MyToken' in the constructor\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type string with the name 'TOKEN_TICKER' and assign it a value of 'MTK' in the constructor\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type string with the name 'CONTRACT_VERSION' and assign it a value of 'v1.0.0' in the constructor\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type uint256 with the name 'GAS_LIMIT' and assign it a value of 3000000 in the constructor\n}",
  },
  visibility: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare an external function named 'externalFunc' that returns a string 'External function called'\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare a public function named 'publicFunc' that returns a string 'Public function called'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare an internal function named 'internalFunc' that returns a string 'Internal function called'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare a private function named 'privateFunc' that returns a string 'Private function called'\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare a public function named 'testFuncs' that calls 'publicFunc' and 'externalFunc' and returns their results\n}",
  },
  "getter-functions": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\n// Declare a public state variable of type uint named 'stateVar' and initialize it with the value 10\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\nuint public stateVar = 10;\n\n// Define a view function named 'viewFunc' that returns the value of 'stateVar'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\nuint public stateVar = 10;\n\n// Define a pure function named 'pureFunc' that takes two uint parameters 'x' and 'y' and returns their sum\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\nuint public stateVar = 10;\n\n// Define a view function named 'viewFunc' that returns the value of 'stateVar'\n\n// Define a pure function named 'pureFunc' that takes two uint parameters 'x' and 'y' and returns their sum\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\nuint public stateVar = 10;\n\n// Define a view function named 'viewFunc' that returns the value of 'stateVar'\n\n// Define a pure function named 'pureFunc' that takes two uint parameters 'x' and 'y' and returns their sum\n\n// Define a function named 'process' that takes two uint parameters 'a' and 'b', it calls 'pureFunc' with 'a' and 'b' as arguments and stores the result in 'stateVar'\n}",
  },
  arrays: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Declare a fixed size array of type uint256 with the name 'fixedArray' and initialize it with the values 1, 2, 3\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Declare a dynamic size array of type uint256 with the name 'dynamicArray'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Inside a function named 'addElement', add the element 5 to the 'dynamicArray'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Inside a function named 'removeElement', remove the last element from the 'dynamicArray'\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Inside a function named 'createMemoryArray', create a fixed size array in memory with the name 'memoryArray' and size 5\n}",
  },
  mapping: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Mapping {\n\n// Declare a mapping from address to uint256 with the name 'myMap'\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Mapping {\n\n// Inside a function named 'set', set the value at a given address in 'myMap' to 100\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Mapping {\n\n// Inside a function named 'get', return the value at a given address in 'myMap'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Mapping {\n\n// Inside a function named 'remove', reset the value at a given address in 'myMap' to its default value\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract NestedMapping {\n\n// Declare a nested mapping from address to another mapping (from uint256 to bool) with the name 'nested'\n}",
  },
  operator: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare two variables of type uint256 with the names 'a' and 'b'. Initialize 'a' with 10 and 'b' with 2. Then, use the multiplication assignment operator to multiply 'a' by 'b'\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare a variable of type uint256 with the name 'a'. Initialize it with 10. Then, use the increment operator to increase the value of 'a' by 1\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare a variable of type uint256 with the name 'a'. Initialize it with 10. Then, use the decrement operator to decrease the value of 'a' by 1\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare a variable of type uint256 with the name 'a'. Initialize it with 10. Then, use the left shift assignment operator to shift the bits of 'a' 2 places to the left\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare a variable of type uint256 with the name 'a'. Initialize it with 10. Then, use the right shift assignment operator to shift the bits of 'a' 2 places to the right\n}",
  },
  functions: {
    exercise1: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 1: Create a contract named 'SimpleStorage' with a state variable 'num' of type uint256. Create a function 'set' that takes a uint256 parameter and assigns it to 'num'. Create a function 'get' that returns the current value of 'num'.\n*/\n}`,
    exercise2: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 2: Create a contract named 'Counter' with a state variable 'count' of type uint256 initialized to 0. Create a function 'increment' that increases the value of 'count' by 1. Create a function 'decrement' that decreases the value of 'count' by 1. Create a function 'getCount' that returns the current value of 'count'.\n*/}`,
    exercise3: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 3: Create a contract named 'ArrayStorage' with a state variable 'arr' of type uint256 array. Create a function 'addElement' that takes a uint256 parameter and adds it to the end of 'arr'. Create a function 'getElement' that takes a uint256 parameter representing an index and returns the element at that index in 'arr'.\n*/\n}`,
    exercise4: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 4: Create a contract named 'MappingStorage' with a state variable 'map' of type mapping where keys and values are both of type uint256. Create a function 'setElement' that takes two uint256 parameters representing a key and a value and sets the value at the key in 'map'. Create a function 'getElement' that takes a uint256 parameter representing a key and returns the value at that key in 'map'.\n*/\n\ncontract MappingStorage {\nmapping(uint256 => uint256) public map;\n\nfunction setElement(uint256 _key, uint256 _value) public {\nmap[_key] = _value;\n}\n\nfunction getElement(uint256 _key) public view returns (uint256) {\nreturn map[_key];\n}\n}`,
    exercise5: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 5: Create a contract named 'ComplexStorage' with a state variable 'data' of type mapping where keys are of type address and values are of type uint256 array. Create a function 'addElement' that takes a uint256 parameter and adds it to the end of the array at the caller's address in 'data'. Create a function 'getElement' that takes a uint256 parameter representing an index and returns the element at that index in the array at the caller's address in 'data'.\n*/\n\ncontract ComplexStorage {\nmapping(address => uint256[]) public data;\n\nfunction addElement(uint256 _element) public {\ndata[msg.sender].push(_element);\n}\n\nfunction getElement(uint256 _index) public view returns (uint256) {\nreturn data[msg.sender][_index];\n}\n}`,
  },
  enumerables: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n// Declare a variable of type 'State' named 'currentState'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n// Declare a variable of type 'State' named 'currentState'\n// Initialize 'currentState' with 'State.Active'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n// Declare a variable of type 'State' named 'currentState'\n// Initialize 'currentState' with 'State.Active'\n// Create a function 'deactivate' that sets 'currentState' to 'Inactive'\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n// Declare a variable of type 'State' named 'currentState'\n// Initialize 'currentState' with 'State.Active'\n// Create a function 'deactivate' that sets 'currentState' to 'Inactive'\n// Create a function 'activate' that sets 'currentState' to 'Active'\n}",
  },
  struct: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n// Declare a variable of type 'Person' named 'person'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n// Declare a variable of type 'Person' named 'person'\n// Initialize 'person' with 'name' as 'Alice' and 'age' as 20\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n// Declare a variable of type 'Person' named 'person'\n// Initialize 'person' with 'name' as 'Alice' and 'age' as 20\n// Create a function 'getPerson' that returns the 'person' variable\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n// Declare a variable of type 'Person' named 'person'\n// Initialize 'person' with 'name' as 'Alice' and 'age' as 20\n// Create a function 'getPerson' that returns the 'person' variable\n// Create a function 'setPerson' that takes a 'Person' as input and sets the 'person' variable\n}",
  },
  "conditional-statements": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5 and if true, declare a variable 'result' and set it to true\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5 and if true, declare a variable 'result' and set it to true\n// Add an 'else' statement that sets 'result' to false if 'number' is not greater than 5\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5 and if true, declare a variable 'result' and set it to true\n// Add an 'else' statement that sets 'result' to false if 'number' is not greater than 5\n// Create a function 'getResult' that returns the 'result' variable\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5 and if true, declare a variable 'result' and set it to true\n// Add an 'else' statement that sets 'result' to false if 'number' is not greater than 5\n// Create a function 'getResult' that returns the 'result' variable\n// Create a function 'setNumber' that takes a uint as input and sets the 'number' variable, and updates 'result'\n}",
  },
  loops: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 5 to 'sum'\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 10 to 'sum'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 10 to 'sum'\n// Create a function 'getSum' that returns the 'sum' variable\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 10 to 'sum'\n// Create a function 'getSum' that returns the 'sum' variable\n// Create a function 'resetSum' that sets 'sum' to 0\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 10 to 'sum'\n// Create a function 'getSum' that returns the 'sum' variable\n// Create a function 'resetSum' that sets 'sum' to 0\n// Create a function 'calculateSum' that takes a uint as input and adds numbers from 1 to the input to 'sum'\n}",
  },
  constructor: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that does nothing\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that initializes a uint variable 'x' with the value 5\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that takes a uint parameter 'y' and initializes a uint variable 'x' with 'y'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that takes a uint parameter 'y' and initializes a uint variable 'x' with 'y'\n// Declare a function 'getX' that returns the 'x' variable\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that takes a uint parameter 'y' and initializes a uint variable 'x' with 'y'\n// Declare a function 'getX' that returns the 'x' variable\n// Declare a function 'setX' that takes a uint parameter 'z' and sets 'x' to 'z'\n}",
  },
  "data-location": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a state variable of type uint and name it 'storageVar'\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a function named 'memoryFunction' that declares a memory variable of type uint and name it 'memoryVar'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare an external function named 'calldataFunction' that takes a calldata uint argument named 'calldataVar'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a state variable of type uint and name it 'storageVar'\n// Declare a function named 'memoryFunction' that declares a memory variable of type uint and name it 'memoryVar'\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a state variable of type uint and name it 'storageVar'\n// Declare a function named 'memoryFunction' that declares a memory variable of type uint and name it 'memoryVar'\n// Declare an external function named 'calldataFunction' that takes a calldata uint argument named 'calldataVar'\n}",
  },
  "try-catch": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle an external call\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle a revert() or require() failure\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle a panic error\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle an error signature that does not match any other clause\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle any type of error\n}",
  },
  errors: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Errors {\n\n// Declare an error named 'InsufficientFunds' with a string parameter 'needed'\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Errors {\n\n// Declare a function named 'checkFunds' that uses the 'revert' statement with the 'InsufficientFunds' error\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Errors {\n\n// Declare a function named 'checkFunds' that uses the 'revert' statement with the 'InsufficientFunds' error and a dynamic message\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Errors {\n\n// Declare an error inside a library\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Errors {\n\n// Declare an error inside an interface\n}",
  },
  "validations-and-assertions": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'require' to validate that a number is greater than 10\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'require' with a custom error message to validate that a number is less than 20\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'revert' to stop execution if a condition is met\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'revert' with a custom error message to stop execution if a condition is met\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'assert' to validate that a number is equal to 15\n}",
  },
  "function-modifier": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Modifiers {\n\n// Create a modifier named 'myModifier' that requires the sender to be the zero address\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Modifiers {\n\n// Create a function named 'myFunction' that uses the 'myModifier' modifier\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Modifiers {\n\n// Create a modifier named 'myModifier' that requires a value to be greater than 10\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Modifiers {\n\n// Create a function named 'myFunction' that uses the 'myModifier' modifier with a value of 15\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Base {\n\n// Create a virtual modifier named 'myModifier' in a base contract that requires the sender to be the zero address\n}\n\ncontract Derived is Base {\n\n// Override 'myModifier' in a derived contract to require the sender to be not the zero address\n}",
  },
  events: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Declare an event named 'MyEvent' with no parameters\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Declare an event named 'MyEvent' with a single parameter of type uint256 named 'myParam'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Emit the 'MyEvent' event with a value of 123 for 'myParam'\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Declare an event named 'MyEvent' with a single indexed parameter of type uint256 named 'myParam'\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Emit the 'MyEvent' event with a value of 123 for the indexed 'myParam'\n}",
  },
  "ether-units": {
    exercise1:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'weiValue' and initialize it with the value of 1 wei\n}",
    exercise2:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'gweiValue' and initialize it with the value of 1 gwei\n}",
    exercise3:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'etherValue' and initialize it with the value of 1 ether\n}",
    exercise4:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'weiToGwei' and convert 1 ether to gwei\n}",
    exercise5:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'weiToEther' and convert 1e18 wei to ether\n}",
  },
  payable: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n// Initialize 'recipient' with the address of the contract deployer in the constructor\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n// Initialize 'recipient' with the address of the contract deployer in the constructor\n// Create a payable function named 'deposit' that can receive Ether\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n// Initialize 'recipient' with the address of the contract deployer in the constructor\n// Create a payable function named 'deposit' that can receive Ether\n// Create a function named 'withdraw' that sends all Ether stored in the contract to the 'recipient' address\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n// Initialize 'recipient' with the address of the contract deployer in the constructor\n// Create a payable function named 'deposit' that can receive Ether\n// Create a function named 'withdraw' that sends all Ether stored in the contract to the 'recipient' address\n// Create a receive function that calls the 'deposit' function when the contract receives Ether\n}",
  },
  fallback: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\n// Declare a fallback function that increments a uint 'donationsCount' each time it's called\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\n// Declare a fallback function that performs a call to an address 'target'\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\n// Declare a fallback function that emits an event 'FallbackCalled' with the sender's address\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\n// Declare a fallback function that takes a bytes input and returns its length\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\n// Declare a fallback function that takes a bytes input, reverses it, and emits an event with the original and reversed input\n}",
  },
  "transacting-ether": {
    exercise1:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract TransactingEther {\n\n// Declare a payable address with the name 'recipient' and initialize it with the Ethereum address 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2\n}",
    exercise2:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract TransactingEther {\n\n// Declare a uint256 variable named 'amount' and initialize it with the value 1 ether\n}",
    exercise3:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract TransactingEther {\n\n// Implement a function named 'sendEther' that sends 'amount' of Ether to the 'recipient' address using the 'call' method\n}",
    exercise4:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\n// Step 1: Import the OpenZeppelin ReentrancyGuard contract\n// Step 2: Implement a contract named 'SendEtherGuarded' that inherits from ReentrancyGuard\n// Step 3: Inside the 'SendEtherGuarded' contract, implement a function named 'sendEther' that takes two parameters: an address payable 'recipient' and a uint256 'amount'\n// Step 4: The 'sendEther' function should be external and payable\n// Step 5: Apply the 'nonReentrant' modifier to the 'sendEther' function\n// Step 6: Inside the 'sendEther' function, add a require statement to check that the contract has enough Ether to send\n// Step 7: Still inside the 'sendEther' function, use the 'call' method to send the specified amount of Ether to the specified address\n// Step 8: Add a require statement to check that the call was successful\n",
    exercise5:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\n// Step 1: Implement a contract named 'SendEtherChecked'\n// Step 2: Inside the 'SendEtherChecked' contract, declare a public mapping named 'balances' that maps addresses to uint256\n// Step 3: Still inside the 'SendEtherChecked' contract, implement a function named 'sendEther' that takes two parameters: an address payable 'recipient' and a uint256 'amount'\n// Step 4: The 'sendEther' function should be public and payable\n// Step 5: Inside the 'sendEther' function, add a require statement to check that the sender has enough Ether to send\n// Step 6: Still inside the 'sendEther' function, update the balances of the sender and the recipient\n// Step 7: Still inside the 'sendEther' function, use the 'call' method to send the specified amount of Ether to the specified address\n// Step 8: Add a require statement to check that the call was successful\n",
  },
};
