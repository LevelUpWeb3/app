type CodeTemplatesType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const CODE_SOLUTIONS: CodeTemplatesType = {
  "data-types": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type bool with the name 'myBool' and initialize it with the value true\nbool myBool = true;\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type uint256 with the name 'myUint' and initialize it with the value 123\nuint256 myUint = 123;\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type int32 with the name 'myInt' and initialize it with the value -123\nint32 myInt = -123;\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type address with the name 'myAddress' and initialize it with the value 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4\naddress myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataTypes {\n\n// Declare a variable of type uint, int and address with the names 'myUint', 'myInt', and 'myAddress' respectively. Initialize 'myUint' with 123, 'myInt' with -123, and 'myAddress' with 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4\nuint myUint = 123;\nint myInt = -123;\naddress myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;\n}",
  },
  variables: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Declare a state variable of type uint256 with the name 'totalSupply' and initialize it with the value 1000000\nuint256 totalSupply = 1000000;\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Inside a function named 'calculate', declare a local variable of type uint256 with the name 'result' and initialize it with the value 500\nfunction calculate() public {\nuint256 result = 500;\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Inside a function named 'getBalance', return the balance of the current contract using the global variable 'balance'\nfunction getBalance() public view returns (uint256) {\nreturn address(this).balance;\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Declare a state variable of type address with the name 'owner' and initialize it with the address of the contract deployer\naddress public owner;\n\nconstructor() {\nowner = msg.sender;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Variables {\n\n// Inside a function named 'getGasPrice', return the current gas price using the global variable 'gasprice'\nfunction getGasPrice() public view returns (uint256) {\nreturn tx.gasprice;\n}\n}",
  },
  constants: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type uint256 with the name 'MAX_BLOCKS' and initialize it with the value 5000\nuint256 constant MAX_BLOCKS = 5000;\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type string with the name 'TOKEN_NAME' and initialize it with the value 'MyToken'\nstring constant TOKEN_NAME = 'MyToken';\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type string with the name 'TOKEN_TICKER' and initialize it with the value 'MTK'\nstring constant TOKEN_TICKER = 'MTK';\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type string with the name 'CONTRACT_VERSION' and initialize it with the value 'v1.0.0'\nstring constant CONTRACT_VERSION = 'v1.0.0';\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constants {\n\n// Declare a constant of type uint256 with the name 'GAS_LIMIT' and initialize it with the value 3000000\nuint256 constant GAS_LIMIT = 3000000;\n}",
  },
  immutable: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type uint256 with the name 'MAX_BLOCKS' and assign it a value in the constructor\nuint256 immutable MAX_BLOCKS;\n\nconstructor() {\nMAX_BLOCKS = 5000;\n}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type string with the name 'TOKEN_NAME' and assign it a value in the constructor\nstring immutable TOKEN_NAME;\n\nconstructor() {\nTOKEN_NAME = 'MyToken';\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type string with the name 'TOKEN_TICKER' and assign it a value in the constructor\nstring immutable TOKEN_TICKER;\n\nconstructor() {\nTOKEN_TICKER = 'MTK';\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type string with the name 'CONTRACT_VERSION' and assign it a value in the constructor\nstring immutable CONTRACT_VERSION;\n\nconstructor() {\nCONTRACT_VERSION = 'v1.0.0';\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Immutable {\n\n// Declare an immutable variable of type uint256 with the name 'GAS_LIMIT' and assign it a value in the constructor\nuint256 immutable GAS_LIMIT;\n\nconstructor() {\nGAS_LIMIT = 3000000;\n}\n}",
  },
  visibility: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare an external function named 'externalFunc' that returns a string 'External function called'\nfunction externalFunc() external pure returns (string memory) {\nreturn \"External function called\";\n}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare a public function named 'publicFunc' that returns a string 'Public function called'\nfunction publicFunc() public pure returns (string memory) {\nreturn \"Public function called\";\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare an internal function named 'internalFunc' that returns a string 'Internal function called'\nfunction internalFunc() internal pure returns (string memory) {\nreturn \"Internal function called\";\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare a private function named 'privateFunc' that returns a string 'Private function called'\nfunction privateFunc() private pure returns (string memory) {\nreturn \"Private function called\";\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Visibility {\n\n// Declare a public function named 'testFuncs' that calls 'publicFunc' and 'externalFunc' and returns their results\nfunction testFuncs() public view returns (string memory, string memory) {\nreturn (publicFunc(), this.externalFunc());\n}\n}",
  },
  "getter-functions": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\n// Declare a public state variable of type uint named 'stateVar' and initialize it with the value 10\nuint public stateVar = 10;\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\nuint public stateVar = 10;\n\n// Define a view function named 'viewFunc' that returns the value of 'stateVar'\nfunction viewFunc() public view returns (uint) {\n    return stateVar;\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\nuint public stateVar = 10;\n\n// Define a pure function named 'pureFunc' that takes two uint parameters 'x' and 'y' and returns their sum\nfunction pureFunc(uint x, uint y) public pure returns (uint) {\n    return x + y;\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\nuint public stateVar = 10;\n\n// Define a view function named 'viewFunc' that returns the value of 'stateVar'\nfunction viewFunc() public view returns (uint) {\n    return stateVar;\n}\n\n// Define a pure function named 'pureFunc' that takes two uint parameters 'x' and 'y' and returns their sum\nfunction pureFunc(uint x, uint y) public pure returns (uint) {\n    return x + y;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract GetterFunctions {\n\nuint public stateVar = 10;\n\n// Define a view function named 'viewFunc' that returns the value of 'stateVar'\nfunction viewFunc() public view returns (uint) {\n    return stateVar;\n}\n\n// Define a pure function named 'pureFunc' that takes two uint parameters 'x' and 'y' and returns their sum\nfunction pureFunc(uint x, uint y) public pure returns (uint) {\n    return x + y;\n}\n\n// Define a function named 'process' that takes two uint parameters 'a' and 'b', it calls 'pureFunc' with 'a' and 'b' as arguments and stores the result in 'stateVar'\nfunction process(uint a, uint b) public {\n    stateVar = pureFunc(a, b);\n}\n}",
  },
  arrays: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Declare a fixed size array of type uint256 with the name 'fixedArray' and initialize it with the values 1, 2, 3\nuint256[3] public fixedArray = [1, 2, 3];\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Declare a dynamic size array of type uint256 with the name 'dynamicArray'\nuint256[] public dynamicArray;\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Inside a function named 'addElement', add the element 5 to the 'dynamicArray'\nfunction addElement() public {\ndynamicArray.push(5);\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Inside a function named 'removeElement', remove the last element from the 'dynamicArray'\nfunction removeElement() public {\ndynamicArray.pop();\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Arrays {\n\n// Inside a function named 'createMemoryArray', create a fixed size array in memory with the name 'memoryArray' and size 5\nfunction createMemoryArray() public pure {\nuint256[] memory memoryArray = new uint256[](5);\n}\n}",
  },
  mapping: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Mapping {\n\n// Declare a mapping from address to uint256 with the name 'myMap'\nmapping(address => uint256) public myMap;\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Mapping {\n\n// Inside a function named 'set', set the value at a given address in 'myMap' to 100\nfunction set(address _addr) public {\nmyMap[_addr] = 100;\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Mapping {\n\n// Inside a function named 'get', return the value at a given address in 'myMap'\nfunction get(address _addr) public view returns (uint256) {\nreturn myMap[_addr];\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Mapping {\n\n// Inside a function named 'remove', reset the value at a given address in 'myMap' to its default value\nfunction remove(address _addr) public {\ndelete myMap[_addr];\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract NestedMapping {\n\n// Declare a nested mapping from address to another mapping (from uint256 to bool) with the name 'nested'\nmapping(address => mapping(uint256 => bool)) public nested;\n}",
  },
  operator: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare two variables of type uint256 with the names 'a' and 'b'. Initialize 'a' with 10 and 'b' with 2. Then, use the multiplication assignment operator to multiply 'a' by 'b'\nuint256 a = 10;\nuint256 b = 2;\na *= b;\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare a variable of type uint256 with the name 'a'. Initialize it with 10. Then, use the increment operator to increase the value of 'a' by 1\nuint256 a = 10;\na++;\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare a variable of type uint256 with the name 'a'. Initialize it with 10. Then, use the decrement operator to decrease the value of 'a' by 1\nuint256 a = 10;\na--;\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare a variable of type uint256 with the name 'a'. Initialize it with 10. Then, use the left shift assignment operator to shift the bits of 'a' 2 places to the left\nuint256 a = 10;\na <<= 2;\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Operator {\n\n// Declare a variable of type uint256 with the name 'a'. Initialize it with 10. Then, use the right shift assignment operator to shift the bits of 'a' 2 places to the right\nuint256 a = 10;\na >>= 2;\n}",
  },
  functions: {
    exercise1: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 1: Create a contract named 'SimpleStorage' with a state variable 'num' of type uint256. Create a function 'set' that takes a uint256 parameter and assigns it to 'num'. Create a function 'get' that returns the current value of 'num'.\n*/\n\ncontract SimpleStorage {\nuint256 public num;\n\nfunction set(uint256 _num) public {\nnum = _num;\n}\n\nfunction get() public view returns (uint256) {\nreturn num;\n}\n}`,
    exercise2: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 2: Create a contract named 'Counter' with a state variable 'count' of type uint256 initialized to 0. Create a function 'increment' that increases the value of 'count' by 1. Create a function 'decrement' that decreases the value of 'count' by 1. Create a function 'getCount' that returns the current value of 'count'.\n*/\n\ncontract Counter {\nuint256 public count = 0;\n\nfunction increment() public {\ncount++;\n}\n\nfunction decrement() public {\ncount--;\n}\n\nfunction getCount() public view returns (uint256) {\nreturn count;\n}\n}`,
    exercise3: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 3: Create a contract named 'ArrayStorage' with a state variable 'arr' of type uint256 array. Create a function 'addElement' that takes a uint256 parameter and adds it to the end of 'arr'. Create a function 'getElement' that takes a uint256 parameter representing an index and returns the element at that index in 'arr'.\n*/\n\ncontract ArrayStorage {\nuint256[] public arr;\n\nfunction addElement(uint256 _element) public {\narr.push(_element);\n}\n\nfunction getElement(uint256 _index) public view returns (uint256) {\nreturn arr[_index];\n}\n}`,
    exercise4: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 4: Create a contract named 'MappingStorage' with a state variable 'map' of type mapping where keys and values are both of type uint256. Create a function 'setElement' that takes two uint256 parameters representing a key and a value and sets the value at the key in 'map'. Create a function 'getElement' that takes a uint256 parameter representing a key and returns the value at that key in 'map'.\n*/\n\ncontract MappingStorage {\nmapping(uint256 => uint256) public map;\n\nfunction setElement(uint256 _key, uint256 _value) public {\nmap[_key] = _value;\n}\n\nfunction getElement(uint256 _key) public view returns (uint256) {\nreturn map[_key];\n}\n}`,
    exercise5: `//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\n/*\nExercise 5: Create a contract named 'ComplexStorage' with a state variable 'data' of type mapping where keys are of type address and values are of type uint256 array. Create a function 'addElement' that takes a uint256 parameter and adds it to the end of the array at the caller's address in 'data'. Create a function 'getElement' that takes a uint256 parameter representing an index and returns the element at that index in the array at the caller's address in 'data'.\n*/\n\ncontract ComplexStorage {\nmapping(address => uint256[]) public data;\n\nfunction addElement(uint256 _element) public {\ndata[msg.sender].push(_element);\n}\n\nfunction getElement(uint256 _index) public view returns (uint256) {\nreturn data[msg.sender][_index];\n}\n}`,
  },
  enumerables: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\nenum State { Active, Inactive }\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n// Declare a variable of type 'State' named 'currentState'\nenum State { Active, Inactive }\nState currentState;\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n// Declare a variable of type 'State' named 'currentState'\n// Initialize 'currentState' with 'State.Active'\nenum State { Active, Inactive }\nState currentState = State.Active;\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n// Declare a variable of type 'State' named 'currentState'\n// Initialize 'currentState' with 'State.Active'\n// Create a function 'deactivate' that sets 'currentState' to 'Inactive'\nenum State { Active, Inactive }\nState currentState = State.Active;\n\nfunction deactivate() public {\n  currentState = State.Inactive;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Enumerables {\n\n// Declare an enum named 'State' with two states: 'Active' and 'Inactive'\n// Declare a variable of type 'State' named 'currentState'\n// Initialize 'currentState' with 'State.Active'\n// Create a function 'deactivate' that sets 'currentState' to 'Inactive'\n// Create a function 'activate' that sets 'currentState' to 'Active'\nenum State { Active, Inactive }\nState currentState = State.Active;\n\nfunction deactivate() public {\n  currentState = State.Inactive;\n}\n\nfunction activate() public {\n  currentState = State.Active;\n}\n}",
  },
  struct: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\nstruct Person {\n  string name;\n  uint age;\n}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n// Declare a variable of type 'Person' named 'person'\nstruct Person {\n  string name;\n  uint age;\n}\nPerson person;\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n// Declare a variable of type 'Person' named 'person'\n// Initialize 'person' with 'name' as 'Alice' and 'age' as 20\nstruct Person {\n  string name;\n  uint age;\n}\nPerson person = Person('Alice', 20);\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n// Declare a variable of type 'Person' named 'person'\n// Initialize 'person' with 'name' as 'Alice' and 'age' as 20\n// Create a function 'getPerson' that returns the 'person' variable\nstruct Person {\n  string name;\n  uint age;\n}\nPerson person = Person('Alice', 20);\n\nfunction getPerson() public view returns (Person memory) {\n  return person;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Structs {\n\n// Declare a struct named 'Person' with two properties: 'name' of type string and 'age' of type uint\n// Declare a variable of type 'Person' named 'person'\n// Initialize 'person' with 'name' as 'Alice' and 'age' as 20\n// Create a function 'getPerson' that returns the 'person' variable\n// Create a function 'setPerson' that takes a 'Person' as input and sets the 'person' variable\nstruct Person {\n  string name;\n  uint age;\n}\nPerson person = Person('Alice', 20);\n\nfunction getPerson() public view returns (Person memory) {\n  return person;\n}\n\nfunction setPerson(Person memory _person) public {\n  person = _person;\n}\n}",
  },
  "conditional-statements": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5\nuint number = 10;\nif (number > 5) {}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5 and if true, declare a variable 'result' and set it to true\nuint number = 10;\nbool result;\nif (number > 5) {\n  result = true;\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5 and if true, declare a variable 'result' and set it to true\n// Add an 'else' statement that sets 'result' to false if 'number' is not greater than 5\nuint number = 10;\nbool result;\nif (number > 5) {\n  result = true;\n} else {\n  result = false;\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5 and if true, declare a variable 'result' and set it to true\n// Add an 'else' statement that sets 'result' to false if 'number' is not greater than 5\n// Create a function 'getResult' that returns the 'result' variable\nuint number = 10;\nbool result;\nif (number > 5) {\n  result = true;\n} else {\n  result = false;\n}\n\nfunction getResult() public view returns (bool) {\n  return result;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract ConditionalStatements {\n\n// Declare a variable of type uint named 'number' and initialize it with the value 10\n// Use an 'if' statement to check if 'number' is greater than 5 and if true, declare a variable 'result' and set it to true\n// Add an 'else' statement that sets 'result' to false if 'number' is not greater than 5\n// Create a function 'getResult' that returns the 'result' variable\n// Create a function 'setNumber' that takes a uint as input and sets the 'number' variable, and updates 'result'\nuint number = 10;\nbool result;\nif (number > 5) {\n  result = true;\n} else {\n  result = false;\n}\n\nfunction getResult() public view returns (bool) {\n  return result;\n}\n\nfunction setNumber(uint _number) public {\n  number = _number;\n  if (number > 5) {\n    result = true;\n  } else {\n    result = false;\n  }\n}\n}",
  },
  loops: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 5 to 'sum'\nuint sum = 0;\nfor (uint i = 1; i <= 5; i++) {\n  sum += i;\n}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 10 to 'sum'\nuint sum = 0;\nfor (uint i = 1; i <= 10; i++) {\n  sum += i;\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 10 to 'sum'\n// Create a function 'getSum' that returns the 'sum' variable\nuint sum = 0;\nfor (uint i = 1; i <= 10; i++) {\n  sum += i;\n}\n\nfunction getSum() public view returns (uint) {\n  return sum;\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 10 to 'sum'\n// Create a function 'getSum' that returns the 'sum' variable\n// Create a function 'resetSum' that sets 'sum' to 0\nuint sum = 0;\nfor (uint i = 1; i <= 10; i++) {\n  sum += i;\n}\n\nfunction getSum() public view returns (uint) {\n  return sum;\n}\n\nfunction resetSum() public {\n  sum = 0;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Loops {\n\n// Declare a variable of type uint named 'sum' and initialize it with the value 0\n// Use a 'for' loop to add numbers from 1 to 10 to 'sum'\n// Create a function 'getSum' that returns the 'sum' variable\n// Create a function 'resetSum' that sets 'sum' to 0\n// Create a function 'calculateSum' that takes a uint as input and adds numbers from 1 to the input to 'sum'\nuint sum = 0;\nfor (uint i = 1; i <= 10; i++) {\n  sum += i;\n}\n\nfunction getSum() public view returns (uint) {\n  return sum;\n}\n\nfunction resetSum() public {\n  sum = 0;\n}\n\nfunction calculateSum(uint _number) public {\n  for (uint i = 1; i <= _number; i++) {\n    sum += i;\n  }\n}\n}",
  },
  constructor: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that does nothing\nconstructor() {}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that initializes a uint variable 'x' with the value 5\nuint x;\nconstructor() {\n  x = 5;\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that takes a uint parameter 'y' and initializes a uint variable 'x' with 'y'\nuint x;\nconstructor(uint y) {\n  x = y;\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that takes a uint parameter 'y' and initializes a uint variable 'x' with 'y'\n// Declare a function 'getX' that returns the 'x' variable\nuint x;\nconstructor(uint y) {\n  x = y;\n}\n\nfunction getX() public view returns (uint) {\n  return x;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Constructor {\n\n// Declare a constructor that takes a uint parameter 'y' and initializes a uint variable 'x' with 'y'\n// Declare a function 'getX' that returns the 'x' variable\n// Declare a function 'setX' that takes a uint parameter 'z' and sets 'x' to 'z'\nuint x;\nconstructor(uint y) {\n  x = y;\n}\n\nfunction getX() public view returns (uint) {\n  return x;\n}\n\nfunction setX(uint z) public {\n  x = z;\n}\n}",
  },
  "data-location": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a state variable of type uint and name it 'storageVar'\nuint storageVar;\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a function named 'memoryFunction' that declares a memory variable of type uint and name it 'memoryVar'\nfunction memoryFunction() public pure {\n  uint memoryVar;\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a function named 'calldataFunction' that takes a calldata uint argument named 'calldataVar'\nfunction calldataFunction(uint calldataVar) external pure {}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a state variable of type uint and name it 'storageVar'\n// Declare a function named 'memoryFunction' that declares a memory variable of type uint and name it 'memoryVar'\nuint storageVar;\n\nfunction memoryFunction() public pure {\n  uint memoryVar;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract DataLocation {\n\n// Declare a state variable of type uint and name it 'storageVar'\n// Declare a function named 'memoryFunction' that declares a memory variable of type uint and name it 'memoryVar'\n// Declare a function named 'calldataFunction' that takes a calldata uint argument named 'calldataVar'\nuint storageVar;\n\nfunction memoryFunction() public pure {\n  uint memoryVar;\n}\n\nfunction calldataFunction(uint calldataVar) external pure {}\n}",
  },
  "try-catch": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle an external call\nfunction tryCatchFunction() public {\n  try this.externalCall() {} catch {} \n}\n\nfunction externalCall() external {}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle a revert() or require() failure\nfunction tryCatchFunction() public {\n  try this.externalCall() {} catch Error(string memory reason) {} \n}\n\nfunction externalCall() external {\n  revert('Error');\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle a panic error\nfunction tryCatchFunction() public {\n  try this.externalCall() {} catch Panic(uint256 panicCode) {} \n}\n\nfunction externalCall() external {\n  assert(1 == 2);\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle an error signature that does not match any other clause\nfunction tryCatchFunction() public {\n  try this.externalCall() {} catch (bytes memory reason) {} \n}\n\nfunction externalCall() external {\n  revert('Error');\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract TryCatch {\n\n// Declare a function named 'tryCatchFunction' that uses a try/catch statement to handle any type of error\nfunction tryCatchFunction() public {\n  try this.externalCall() {} catch Error(string memory reason) {} catch Panic(uint256 panicCode) {} catch (bytes memory reason) {} catch {} \n}\n\nfunction externalCall() external {\n  revert('Error');\n}\n}",
  },
  errors: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Errors {\n\n// Declare an error named 'InsufficientFunds' with a string parameter 'needed'\nerror InsufficientFunds(string needed);\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Errors {\n\n// Declare a function named 'checkFunds' that uses the 'revert' statement with the 'InsufficientFunds' error\nerror InsufficientFunds(string needed);\n\nfunction checkFunds(uint amount) public {\n  if (amount > 100) {\n    revert InsufficientFunds('100 ether needed');\n  }\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Errors {\n\n// Declare a function named 'checkFunds' that uses the 'revert' statement with the 'InsufficientFunds' error and a dynamic message\nerror InsufficientFunds(string needed);\n\nfunction checkFunds(uint amount) public {\n  if (amount > 100) {\n    revert InsufficientFunds('More than 100 ether needed');\n  }\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\nlibrary ErrorsLib {\n\n// Declare an error inside a library\nerror InsufficientFunds(string needed);\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ninterface ErrorsInterface {\n\n// Declare an error inside an interface\nerror InsufficientFunds(string needed);\n}",
  },
  "validations-and-assertions": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'require' to validate that a number is greater than 10\nfunction validateNumber(uint num) public {\n  require(num > 10, 'Number must be greater than 10');\n}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'require' with a custom error message to validate that a number is less than 20\nfunction validateNumber(uint num) public {\n  require(num < 20, 'Number must be less than 20');\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'revert' to stop execution if a condition is met\nfunction validateNumber(uint num) public {\n  if (num > 30) {\n    revert();\n  }\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'revert' with a custom error message to stop execution if a condition is met\nfunction validateNumber(uint num) public {\n  if (num > 30) {\n    revert('Number must not be greater than 30');\n  }\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Validations {\n\n// Use 'assert' to validate that a number is equal to 15\nfunction validateNumber(uint num) public {\n  assert(num == 15);\n}\n}",
  },
  "function-modifier": {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Modifiers {\n\n// Create a modifier named 'myModifier' that requires the sender to be the zero address\nmodifier myModifier {\n  require(msg.sender == address(0), 'Not authorized');\n  _;\n}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Modifiers {\n\n// Create a function named 'myFunction' that uses the 'myModifier' modifier\nmodifier myModifier {\n  require(msg.sender == address(0), 'Not authorized');\n  _;\n}\n\nfunction myFunction() public myModifier {\n  // function body\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Modifiers {\n\n// Create a modifier named 'myModifier' that requires a value to be greater than 10\nmodifier myModifier(uint value) {\n  require(value > 10, 'Value is too small');\n  _;\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Modifiers {\n\n// Create a function named 'myFunction' that uses the 'myModifier' modifier with a value of 15\nmodifier myModifier(uint value) {\n  require(value > 10, 'Value is too small');\n  _;\n}\n\nfunction myFunction() public {\n  myModifier(15);\n  // function body\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Base {\n\n// Create a virtual modifier named 'myModifier' in a base contract that requires the sender to be the zero address\nmodifier myModifier {\n  require(msg.sender == address(0), 'Not authorized');\n  _;\n}\n}\n\ncontract Derived is Base {\n\n// Override 'myModifier' in a derived contract to require the sender to be not the zero address\noverride modifier myModifier {\n  require(msg.sender != address(0), 'Not authorized');\n  _;\n}\n}",
  },
  events: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Declare an event named 'MyEvent' with no parameters\nevent MyEvent();\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Declare an event named 'MyEvent' with a single parameter of type uint256 named 'myParam'\nevent MyEvent(uint256 myParam);\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Emit the 'MyEvent' event with a value of 123 for 'myParam'\nevent MyEvent(uint256 myParam);\n\nfunction emitMyEvent() public {\n  emit MyEvent(123);\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Declare an event named 'MyEvent' with a single indexed parameter of type uint256 named 'myParam'\nevent MyEvent(uint256 indexed myParam);\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Events {\n\n// Emit the 'MyEvent' event with a value of 123 for the indexed 'myParam'\nevent MyEvent(uint256 indexed myParam);\n\nfunction emitMyEvent() public {\n  emit MyEvent(123);\n}\n}",
  },
  "ether-units": {
    exercise1:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'weiValue' and initialize it with the value of 1 wei\nuint weiValue = 1 wei;\n}",
    exercise2:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'gweiValue' and initialize it with the value of 1 gwei\nuint gweiValue = 1 gwei;\n}",
    exercise3:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'etherValue' and initialize it with the value of 1 ether\nuint etherValue = 1 ether;\n}",
    exercise4:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'weiToGwei' and convert 1 ether to gwei\nuint weiToGwei = 1 ether / 1 gwei;\n}",
    exercise5:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract EtherUnits {\n\n// Declare a variable of type uint with the name 'weiToEther' and convert 1e18 wei to ether\nuint weiToEther = 1e18 wei / 1 ether;\n}",
  },
  payable: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\naddress payable recipient;\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n// Initialize 'recipient' with the address of the contract deployer in the constructor\naddress payable recipient;\n\nconstructor() {\n    recipient = payable(msg.sender);\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n// Initialize 'recipient' with the address of the contract deployer in the constructor\n// Create a payable function named 'deposit' that can receive Ether\naddress payable recipient;\n\nconstructor() {\n    recipient = payable(msg.sender);\n}\n\nfunction deposit() public payable {}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n// Initialize 'recipient' with the address of the contract deployer in the constructor\n// Create a payable function named 'deposit' that can receive Ether\n// Create a function named 'withdraw' that sends all Ether stored in the contract to the 'recipient' address\naddress payable recipient;\n\nconstructor() {\n    recipient = payable(msg.sender);\n}\n\nfunction deposit() public payable {}\n\nfunction withdraw() public {\n    (bool success,) = recipient.call{value: address(this).balance}('');\n    require(success, 'Failed to send Ether');\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Payable {\n\n// Declare a payable address with the name 'recipient'\n// Initialize 'recipient' with the address of the contract deployer in the constructor\n// Create a payable function named 'deposit' that can receive Ether\n// Create a function named 'withdraw' that sends all Ether stored in the contract to the 'recipient' address\n// Create a receive function that calls the 'deposit' function when the contract receives Ether\naddress payable recipient;\n\nconstructor() {\n    recipient = payable(msg.sender);\n}\n\nfunction deposit() public payable {}\n\nfunction withdraw() public {\n    (bool success,) = recipient.call{value: address(this).balance}('');\n    require(success, 'Failed to send Ether');\n}\n\nreceive() external payable {\n    deposit();\n}\n}",
  },
  fallback: {
    exercise1:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\nuint public donationsCount;\n\nfallback() external payable {\n    donationsCount++;\n}\n}",
    exercise2:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\naddress public target;\n\nfallback() external payable {\n    (bool success, ) = target.call(msg.data);\n    require(success);\n}\n}",
    exercise3:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\nevent FallbackCalled(address sender);\n\nfallback() external {\n    emit FallbackCalled(msg.sender);\n}\n}",
    exercise4:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\nfallback(bytes calldata input) external payable returns (uint) {\n    return input.length;\n}\n}",
    exercise5:
      "//SPDX-License-Identifier:MIT\npragma solidity ^0.8.24;\n\ncontract Fallback {\n\nevent FallbackCalled(bytes original, bytes reversed);\n\nfallback(bytes calldata input) external payable returns (bytes memory) {\n    bytes memory reversed = new bytes(input.length);\n    for (uint i = 0; i < input.length; i++) {\n        reversed[i] = input[input.length - 1 - i];\n    }\n    emit FallbackCalled(input, reversed);\n    return reversed;\n}\n}",
  },
  "transacting-ether": {
    exercise1:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract TransactingEther {\n\n// Declare a payable address with the name 'recipient' and initialize it with the Ethereum address 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2\naddress payable recipient = payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);\n}",
    exercise2:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract TransactingEther {\n\n// Declare a uint256 variable named 'amount' and initialize it with the value 1 ether\nuint256 amount = 1 ether;\n}",
    exercise3:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract TransactingEther {\n\n// Implement a function named 'sendEther' that sends 'amount' of Ether to the 'recipient' address using the 'call' method\nfunction sendEther() public {\n  (bool success, ) = recipient.call{value: amount}('');\n  require(success, 'Failed to send Ether');\n}\n}",
    exercise4:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\n// Step 1: Import the OpenZeppelin ReentrancyGuard contract\nimport '@openzeppelin/contracts/security/ReentrancyGuard.sol';\n\n// Step 2: Implement a contract named 'SendEtherGuarded' that inherits from ReentrancyGuard\ncontract SendEtherGuarded is ReentrancyGuard {\n\n  // Step 3: Inside the 'SendEtherGuarded' contract, implement a function named 'sendEther' that takes two parameters: an address payable 'recipient' and a uint256 'amount'\n  // Step 4: The 'sendEther' function should be external and payable\n  // Step 5: Apply the 'nonReentrant' modifier to the 'sendEther' function\n  function sendEther(address payable recipient, uint256 amount) external payable nonReentrant {\n    // Step 6: Inside the 'sendEther' function, add a require statement to check that the contract has enough Ether to send\n    require(address(this).balance >= amount, 'Not enough Ether');\n    // Step 7: Still inside the 'sendEther' function, use the 'call' method to send the specified amount of Ether to the specified address\n    (bool success, ) = recipient.call{value: amount}('');\n    // Step 8: Add a require statement to check that the call was successful\n    require(success, 'Failed to send Ether');\n  }\n}",
    exercise5:
      "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\n// Step 1: Implement a contract named 'SendEtherChecked'\ncontract SendEtherChecked {\n\n  // Step 2: Inside the 'SendEtherChecked' contract, declare a public mapping named 'balances' that maps addresses to uint256\n  mapping(address => uint256) public balances;\n\n  // Step 3: Still inside the 'SendEtherChecked' contract, implement a function named 'sendEther' that takes two parameters: an address payable 'recipient' and a uint256 'amount'\n  // Step 4: The 'sendEther' function should be public and payable\n  function sendEther(address payable recipient, uint256 amount) public payable {\n    // Step 5: Inside the 'sendEther' function, add a require statement to check that the sender has enough Ether to send\n    require(balances[msg.sender] >= amount, 'Not enough Ether');\n    // Step 6: Still inside the 'sendEther' function, update the balances of the sender and the recipient\n    balances[msg.sender] -= amount;\n    balances[recipient] += amount;\n    // Step 7: Still inside the 'sendEther' function, use the 'call' method to send the specified amount of Ether to the specified address\n    (bool success, ) = recipient.call{value: amount}('');\n    // Step 8: Add a require statement to check that the call was successful\n    require(success, 'Failed to send Ether');\n  }\n}",
  },
};
