type CodeTemplatesType = {
  [key: string]: {
    [key: string]: string;
  };
};

export const CODE_EXERCISES: CodeTemplatesType = {
  "data-types": {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a public variable of type bool with the name 'my_bool'",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a private variable of type int256 with the name 'my_int'",
    exercise3:
      "# pragma version 0.4.0\n\n# Declare a public variable of type String with maximum length of 100 using the name 'my_string'",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a public variable of type decimal with the name 'my_decimal'",
    exercise5:
      "# pragma version 0.4.0\n\n# Declare two private variable:\n# - 'my_address' of type address\n# - 'my_fixed_bytes' with maximum of 256 Bytes",
  },
  operator: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a public variable of type uint256 with the name 'result'\n\n# Create an external function named 'add_numbers' that takes two uint256 inputs (x and y), adds them, and stores the result in 'result'",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a public variable of type uint256 with the name 'result'\n\n# Create an external function named 'multiply_numbers' that takes two uint256 inputs (x and y), multiplies them, and stores the result in 'result'",
    exercise3:
      "# pragma version 0.4.0\n\n# Declare a public variable of type bool with the name 'result'\n\n# Create an external function named 'negate_bool' that takes a bool input named 'logic', negates it, and stores the result in 'result'",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a public variable of type bool with the name 'result'\n\n# Create an external function named 'check_equality' that takes two uint256 inputs (x and y), checks if they are equal, and stores the result in 'result'",
    exercise5:
      "# pragma version 0.4.0\n\n# Declare a public variable of type bool with the name 'result'\n\n# Create an external function named 'check_conjunction' that takes two bool inputs (x and y), checks if both are true, and stores the result in 'result'",
  },
  constants: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a constant of type uint256 with the name 'MAX_SUPPLY' and set its value to 1000000",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a constant of type bytes32 with the name 'HASH_VALUE' and set its value to 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    exercise3:
      "# pragma version 0.4.0\n\n# Declare a constant of type String[20] with the name 'WELCOME_MESSAGE' and set its value to 'Welcome to Vyper!'",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a constant of type address with the name 'OWNER_ADDRESS' and set its value to 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    exercise5:
      "# pragma version 0.4.0\n\n# Declare a constant of type decimal with the name 'TAX_RATE' and set its value to 7.5",
  },
  immutable: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare an immutable variable of type uint256 with the name 'INITIAL_SUPPLY'\n\n# Set its value to 500000 in the constructor",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare an immutable variable of type address with the name 'DEPLOYER_ADDRESS'\n\n# Set its value to msg.sender in the constructor",
    exercise3:
      "# pragma version 0.4.0\n\n# Declare an immutable variable of type uint256 with the name 'INITIAL_SUPPLY'\n\n# Declare an immutable variable of type address with the name 'DEPLOYER_ADDRESS'\n\n# Set 'INITIAL_SUPPLY' to 500000 and 'DEPLOYER_ADDRESS' to msg.sender in the constructor",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare an immutable variable of type Bytes[32] with the name 'PUBLIC_HASH'\n\n# Declare an immutable variable of type String[20] with the name 'CONTRACT_NAME'\n\n# Set 'PUBLIC_HASH' to 0xabc123456789abcdef123456789abcdef123456789abcdef123456789abcdef and 'CONTRACT_NAME' to 'ImmutableVyper' in the constructor",
    exercise5:
      "# pragma version 0.4.0\n\n##### NOTE: THIS EXERCISE REQUIRES USE OF BUILT-IN FUNCTION `convert()` #####\n##### REFER TO RESOURCES SECTION FOR DOCS ON THIS FUNCTION. #####\n\n# Declare an immutable variable of type uint256 with the name 'INITIAL_SUPPLY'\n\n# Declare an immutable variable of type decimal with the name 'DISCOUNT_RATE'\n\n# Set 'INITIAL_SUPPLY' to 100000 and 'DISCOUNT_RATE' to 10.5 in the constructor\n\n# Create an external function named 'calculate_discount' that takes a uint256 input named 'amount' and returns the discounted amount as a uint256\n# Create a local variable 'amount_in_decimal' inside 'calculate_discount' and convert 'amount' to decimal\n# Create another local variable named 'discounted_amount' to calculate the discount amount as a decimal by multiplying 'amount_in_decimal' with 'DISCOUNT_RATE' and dividing by 100.0\n# Finally, convert 'discounted_amount' from decimal to uint256",
  },
  variables: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a public state variable of type uint256 with the name 'total_supply'\n\n# Create an external function named 'set_total_supply' that takes a uint256 input named 'amount' and sets 'total_supply' to the input value",
    exercise2:
      "# pragma version 0.4.0\n\n# Create an external view 'get_local_value' function which has a local variable of type uint256 with the name 'local_value' and returns 123456",
    exercise3:
      "# pragma version 0.4.0\n\n# Declare a public state variable of type address with the name 'owner'\n\n# Create an external function named 'set_owner' that sets 'owner' to msg.sender\n\n# Create an external view function named 'get_owner' that returns the value of 'owner'",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a public state variable of type uint256 with the name 'total_supply'\n\n# Declare a public state variable of type address with the name 'owner'\n\n# Create an external function 'set_variables' which sets 'total_supply' to 1000000 and 'owner' to msg.sender\n\n# Create an external view function named 'get_contract_info' that returns both 'total_supply' and 'owner' as a tuple",
    exercise5:
      "# pragma version 0.4.0\n\n# Declare a public state variable of type uint256 with the name 'total_supply'\n\n# Declare a public state variable of type address with the name 'owner'\n\n# Declare a private state variable of type uint256 with the name 'last_updated'\n\n# Create an external function named 'set_variables' with no input parameters\n# Inside 'set_variables', set 'total_supply' to 10 using the 'self' variable\n# Set 'owner' to 'msg.sender' using the 'self' variable\n# Set 'last_updated' to the current block timestamp using 'block.timestamp'\n\n# Create an external function named 'update_supply' that takes one input parameter:\n# - 'new_supply' of type uint256, which represents the new total supply value\n# Inside 'update_supply', update 'total_supply' to 'new_supply' using the 'self' variable\n# Update 'last_updated' to the current block timestamp using 'block.timestamp'\n\n# Create an external view function named 'get_last_updated' with no input parameters\n# 'get_last_updated' should return a uint256 value\n# The function should return the value of 'last_updated' using the 'self' variable",
  },
  arrays: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a fixed-size array of type uint256 with the name 'fixed_numbers' that can hold 3 elements",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a fixed-size array of type address with the name 'trusted_addresses' that can hold 2 elements\n\n# Create an external function named 'set_trusted_addresses' that takes two address inputs named 'addr1' and 'addr2' and stores them in 'trusted_addresses'",
    exercise3:
      "# pragma version 0.4.0\n\n# Declare a dynamic array of type uint256 with the name 'dynamic_numbers' and a maximum size of 10\n\n# Create an external function named 'add_number' that takes a uint256 input named 'new_number' and appends it to 'dynamic_numbers'",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a public fixed-size array of type uint256 with the name 'squares' that can hold 5 elements\n\n# Create an external function named 'populate_squares' that populates 'squares' with the value 1 to 5# Assign each slot in the array sequentially with values 1 to 5 (Slot 0 = 1, Slot 1 = 2, ...)",
    exercise5:
      "# pragma version 0.4.0\n\n# Declare a public dynamic array of type address with the name 'whitelisted_addresses' and a maximum size of 5\n\n# Create an external function named 'add_whitelisted_address' that takes an address input named 'new_address' and adds it to 'whitelisted_addresses'\n\n# Create an external view function named 'is_whitelisted' that takes an address input named 'check_address' and returns true if it exists in 'whitelisted_addresses', otherwise false",
  },
  mapping: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a mapping named 'user_balances' that maps an address to an int128.\n\n# Create an external function named 'set_balance' that takes an address 'user' and an int128 'balance' as inputs and stores the balance in 'user_balances'.",

    exercise2:
      "# pragma version 0.4.0\n\n# Declare a mapping named 'product_prices' that maps a bytes32 to a uint256.\n\n# Create an external function named 'set_product_price' that takes a bytes32 'product_id' and a uint256 'price' as inputs and stores the price in 'product_prices'.\n\n# Create an external view function named 'get_product_price' that takes a bytes32 'product_id' as input and returns the corresponding price.",

    exercise3:
      "# pragma version 0.4.0\n\n# Declare a mapping named 'user_ages' that maps an address to a uint8.\n\n# Create an external function named 'register_age' that takes an address 'user' and a uint8 'age' as inputs and stores the age in 'user_ages'.\n\n# Create an external view function named 'is_adult' that takes an address 'user' as input, checks if the user is equals to or above 18 years old and returns a bool result.",

    exercise4:
      "# pragma version 0.4.0\n\n# Declare a mapping named 'vote_counts' that maps a uint256 (candidate ID) to a uint256 (vote count).\n\n# Create an external function named 'cast_vote' that takes a uint256 'candidate_id' as input and increments the vote count in 'vote_counts'.\n\n# Create an external view function named 'get_votes' that takes a uint256 'candidate_id' as input and returns the vote count for that candidate.",

    exercise5:
      "# pragma version 0.4.0\n\n# Declare a nested mapping named 'scores' that maps an address to another mapping of uint256 (game ID) to int256 (score).\n\n# Create an external function named 'set_score' that takes an address 'player', a uint256 'game_id', and an int256 'score' as inputs and stores the score in 'scores'.\n\n# Create an external view function named 'get_score' that takes an address 'player' and a uint256 'game_id' as inputs and returns the corresponding score.",
  },
  visibility: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a state variable named 'deployed_message' of type String with length of 50\n\n# Declare a deploy-time function '__init__' using '@deploy' decorator.\n# Inside the function, initialize a state variable 'deployed_message' with the value 'Contract Deployed'.",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a state variable named 'counter' of type uint256\n\n# Define an internal function '_set_counter' using the '@internal' decorator that takes a uint256 input named 'amount' and assigns it to a state variable 'counter'.\n\n# Then, create an external function 'update_counter' that calls '_set_counter' with an input parameter named 'new_amount'.",
    exercise3:
      "# pragma version 0.4.0\n\n# Create an internal function '_compute_sum' using the '@internal' decorator that takes two uint256 inputs, 'a' and 'b', and returns their sum.\n\n# Implement an external function 'calculate_total' that calls '_compute_sum' and returns the result.",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a state variable 'stored_data' which maps address to int128.\n\n# Implement an external function 'store_data' that takes an address 'user' and int128 'amount' as input and updates 'stored_data'.\n\n# Add an external view function 'retrieve_data' that returns the stored amount for a given address.",
    exercise5:
      "# pragma version 0.4.0\n\n# Define a state variable 'balances' which maps address to uint256.\n\n# Implement an external function 'deposit_funds' that allows an address to store a uint256 amount.\n\n# Add an internal function '_validate_withdrawal' using the '@internal' decorator that asserts to check if a user has sufficient balance before withdrawing, else reverting with \"Insufficient Balance\".\n\n# Finally, create an external function 'withdraw_funds' that takes a uint256 'amount', calls '_validate_withdrawal' with 'msg.sender' and 'amount', and updates the balance accordingly.",
  },
  mutability: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare an external pure function named 'multiply_numbers' that takes two uint256 inputs: 'a' and 'b', and return their product.",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a state variable named 'total_balance' of type uint256.\n\n# Create an external view function named 'get_total_balance' that returns a uint256 value stored in the state variable 'total_balance'.",
    exercise3:
      "# pragma version 0.4.0\n\n# Declare a state variable named 'contract_balance' of type uint256.\n\n# Create an external payable function named 'deposit_funds' that accepts Ether and increases the state variable 'contract_balance' by the received amount.",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a state variable named 'contract_balance' of type uint256.\n\n# Create an external nonpayable function named 'withdraw_funds' that takes a uint256 named 'amount' which allows an external user to withdraw a specified amount from 'contract_balance' if sufficient balance is available.\n# This function should use 'assert' to check prior to decreasing 'amount' from 'contract_balance', else revert with 'Insufficient funds'.",
    exercise5:
      "# pragma version 0.4.0\n\n# Declare a state variable named 'initial_supply' of type uint256.\n\n# Declare a deploy function named '__init__' that initializes the state variable 'initial_supply' with a uint256 value of 1000000.\n\n# Create an external view function named 'get_supply' that returns the value of 'initial_supply'.",
  },
  interface: {
    exercise1:
      "# pragma version 0.4.0\n\n# Below is a pre-written contract (`Reference.vy`) for reference.\n# Developers must create an interface contract that interacts with it.\n\n# Reference.vy\n# -----------------------------\n# example_amount: public(uint256)\n# \n# @external\n# def set_example_amount(amount: uint256):\n#     self.example_amount = amount\n# \n# @external\n# @view\n# def get_example_amount() -> uint256:\n#     return self.example_amount\n# -----------------------------\n\n# Define an interface `ExampleInterface` that exposes `set_example_amount` (nonpayable) and `get_example_amount` (view).\n\n# Create a public state variable `interface_reference` to store the interface reference.\n\n# Create a constructor with the input named 'reference_addr' to initialize `interface_reference` with an external address.\n\n# Create an external function `set_amount` which takes same input name in the interface that calls `set_example_amount`.\n\n# Create an external view function `fetch_amount` that calls `get_example_amount`.",
    exercise2:
      "# pragma version 0.4.0\n\n# Below is a pre-written contract (`Reference.vy`) for reference.\n# Developers must create an interface contract that interacts with it.\n\n# Reference.vy\n# -----------------------------\n# stored_address: public(address)\n# \n# @external\n# def set_address(addr: address):\n#     self.stored_address = addr\n# \n# @external\n# @view\n# def get_address() -> address:\n#     return self.stored_address\n# -----------------------------\n\n# Define an interface `AddressInterface` that exposes `set_address` (nonpayable) and `get_address` (view).\n\n# Create a public state variable `interface_reference` to store the interface reference.\n\n# Create a constructor with the input named 'reference_addr' to initialize `interface_reference` with an external address.\n\n# Create an external function `update_address` that calls `set_address`.\n\n# Create an external view function `retrieve_address` that calls `get_address`.",
    exercise3:
      "# pragma version 0.4.0\n\n# Below is a pre-written contract (`Reference.vy`) for reference.\n# Developers must create an interface contract that interacts with it.\n\n# Reference.vy\n# -----------------------------\n# counter: public(uint256)\n# \n# @external\n# def increment():\n#     self.counter += 1\n# \n# @external\n# @view\n# def get_counter() -> uint256:\n#     return self.counter\n# -----------------------------\n\n# Define an interface `CounterInterface` that exposes `increment` (nonpayable) and `get_counter` (view).\n\n# Create a public state variable `interface_reference` to store the interface reference.\n\n# Create a constructor with the input named 'reference_addr' to initialize `interface_reference` with an external address.\n\n# Create an external function `increase_counter` that calls `increment`.\n\n# Create an external view function `read_counter` that calls `get_counter`.",
    exercise4:
      "# pragma version 0.4.0\n\n# Below is a pre-written contract (`Reference.vy`) for reference.\n# Developers must create an interface contract that interacts with it.\n\n# Reference.vy\n# -----------------------------\n# balance: public(uint256)\n# \n# @external\n# def deposit(amount: uint256):\n#     self.balance += amount\n# \n# @external\n# def withdraw(amount: uint256):\n#     assert self.balance >= amount\n#     self.balance -= amount\n# \n# @external\n# @view\n# def check_balance() -> uint256:\n#     return self.balance\n# -----------------------------\n\n# Define an interface `BankInterface` that exposes `deposit` and `withdraw` (both nonpayable), and `check_balance` (view).\n\n# Create a public state variable `interface_reference` to store the interface reference.\n\n# Create a constructor with the input named 'reference_addr' to initialize `interface_reference` with an external address.\n\n# Create external and view functions `make_deposit`, `make_withdrawal`, and `get_balance` to interact with the interface.",
    exercise5:
      "# pragma version 0.4.0\n\n# Below is a pre-written contract (`Reference.vy`) for reference.\n# Developers must create an interface contract that interacts with it.\n\n# Reference.vy\n# -----------------------------\n# data: public(String[100])\n# \n# @external\n# def store_data(index: uint256, string_var: String[100]):\n#     self.data[index] = string_var\n# \n# @external\n# @view\n# def retrieve_data(index: uint256) -> String[100]:\n#     return self.data[index]\n# -----------------------------\n\n# Define an interface `DataStorageInterface` that exposes `store_data` (nonpayable) and `retrieve_data` (view).\n\n# Create a public state variable `interface_reference` to store the interface reference.\n\n# Create a constructor with the input named 'reference_addr' to initialize `interface_reference` with an external address.\n\n# Create an external function `save_data` that calls `store_data`.\n\n# # Create an external view function `fetch_data` that calls `retrieve_data`.",
  },
  functions: {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a public state variable `stored_value` of type uint256.\n\n# Implement an external function `set_value` that takes a uint256 input named `new_value` and updates `stored_value` with `new_value`.\n\n# Implement an external view function `get_value` that returns `stored_value`.",
    exercise2:
      "# pragma version 0.4.0\n\n# Implement an external pure function `add_numbers` that takes two uint256 inputs named `num1` and `num2`, and returns their sum as uint256.\n# Ensure the function does not modify the contract state.",
    exercise3:
      "# pragma version 0.4.0\n\n# Declare a state variable `count` of type uint256.\n\n# Implement an external function `increment` that increases `count` by 1.\n\n# Implement an external function `decrement` that decreases `count` by 1.\n\n# Implement an external view function `get_count` that returns `count`.",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a public state variable `initial_value` of type uint256.\n\n# Implement a constructor function `__init__` that takes a uint256 input named `amount` and initializes `initial_value` with `amount`.\n\n# Implement an external view function `get_initial_value` that returns `initial_value`.",
    exercise5:
      "# pragma version 0.4.0\n\n# Declare public state variables `base_value` and `multiplier`, both of type uint256.\n\n# Implement a constructor function `__init__` that takes two uint256 inputs named `initial_base` and `initial_multiplier`, and initializes `base_value` and `multiplier` respectively.\n\n# Implement a conditional internal function `_compute_result` that takes a uint256 input named `factor` and returns:\n#    - `base_value * multiplier * factor` if `factor` is greater than 0.\n#    - `base_value + multiplier` otherwise.\n\n# Implement an external function `calc_computed_result` that takes a uint256 input named `factor` and returns the result of `compute_result`.",
  },
  structs: {
    exercise1:
      "# pragma version 0.4.0\n\n# Define a struct named 'User' with two attributes:\n# - 'user_address' of type 'address'\n# - 'user_balance' of type 'uint256'\n\n# Declare a public variable 'example_user' of type 'User'",
    exercise2:
      "# pragma version 0.4.0\n\n# Define a struct named 'Product' with two attributes:\n# - 'product_id' of type 'uint256'\n# - 'product_price' of type 'uint256'\n\n# Declare a public mapping 'product_list' that maps 'uint256' to 'Product'\n\n# Create an external function 'add_product' that takes:\n# - 'product_id' (uint256)\n# - 'product_price' (uint256)\n# The function should store the product in 'product_list'",
    exercise3:
      "# pragma version 0.4.0\n\n# Define a struct named 'Transaction' with three attributes:\n# - 'sender' of type 'address'\n# - 'receiver' of type 'address'\n# - 'amount' of type 'uint256'\n\n# Declare a public array 'transactions' of type 'Transaction' with fixed size of 100\n\n# Declare a public variable 'transaction_count' of type uint256\n\n# Create an external function 'record_transaction' that takes:\n# - 'receiver' (address)\n# - 'amount' (uint256)\n# The function should push a new 'Transaction' to 'transactions' while noting 'msg.sender' as 'sender'.\n# This should also increase 'transaction_count' by 1",
    exercise4:
      "# pragma version 0.4.0\n\n# Define a struct named 'Employee' with two attributes:\n# - 'name' of type 'String[50]'\n# - 'salary' of type 'uint256'\n\n# Declare a public mapping 'employees' that maps 'address' to 'Employee'\n\n# Create an external function 'set_employee' that takes:\n# - 'employee_address' (address)\n# - 'name' (String[50])\n# - 'salary' (uint256)\n# The function should store the employee details in 'employees'\n\n# Create an external view function 'get_employee' that takes:\n# - 'employee_address' (address)\n# The function should return the corresponding 'Employee' struct",
    exercise5:
      "# pragma version 0.4.0\n\n# Define a struct named 'Loan' with three attributes:\n# - 'borrower' of type 'address'\n# - 'amount' of type 'uint256'\n# - 'interest_rate' of type 'uint256'\n\n# Declare a public array 'loan_records' of type 'Loan' with fixed size of 100.\n\n# Declare a variable 'loan_count' of type uint256.\n\n# Create an external function 'apply_loan' that takes:\n# - 'amount' (uint256)\n# - 'interest_rate' (uint256)\n# The function should add a new 'Loan' struct to 'loan_records' with 'msg.sender' as 'borrower'\n# The function should increase 'loan_count' after adding a new loan.\n\n# Create an external view function 'get_loan' that takes:\n# - 'index' (uint256)\n# The function should return the 'Loan' struct at the given index",
  },
  "conditional-statements": {
    exercise1:
      "# pragma version 0.4.0\n\n# Define a view function named `is_even` that takes a `uint256` input named `number`.\n# Using a modulus operator, the function should return `True` if `number` is even, otherwise `False`.",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a public state variable 'status' of type boolean\n\n# Define an external function named `toggle_status` that takes a `bool` input named `force_active`.\n# The function should update a state variable `status` as follows:\n# - If `force_active` is `True`, set `status` to `True`.\n# - Otherwise, toggle the current value of `status`.",
    exercise3:
      "# pragma version 0.4.0\n\n# Define an external view function named `compare_values` that takes two `uint256` inputs named `a` and `b`.\n# The function should return `1` if `a` is greater than `b`, `-1` if `a` is less than `b`, and `0` if they are equal.",
    exercise4:
      "# pragma version 0.4.0\n\n# Declare a public state variable 'threshold' of type uint256\n\n# Define an external function named `set_threshold` that takes a `uint256` input named `new_threshold`.\n# Store `new_threshold` in the `threshold` variable.\n\n# Define an external view function named `check_threshold` that takes a `uint256` input named `amount`.\n# The function should return `True` if `amount` is greater than `threshold`, otherwise `False`.",
    exercise5:
      '# pragma version 0.4.0\n\n# Declare a public mapping named "user_balances" which maps address to uint256\n\n# Define an external function named `set_balance` that takes an `address` input named `user` and a `uint256` input named `amount`.\n# Store `amount` in a mapping named `balances`, where `user` is the key.\n\n# Define an external view function named `assess_risk` that takes an `address` input named `user`.\n# The function should return `High` if the user\'s balance is 1000 or more, `Medium` if between 500-999, and `Low` otherwise.',
  },
  loops: {
    exercise1:
      "# pragma version 0.4.0\n\n# Create an external pure function named 'sum_range_of_nine' that takes no arguments and return uint256\n# Include a local variable named 'total' of type uint256 which initializes to '0'\n# Use a for loop to iterate through of 9 and return the sum.",
    exercise2:
      "# pragma version 0.4.0\n\n# Create an external pure function named 'sum_fixed_array' that takes a uint256 array of size 4 named 'values' as input and returns the total sum of the array elements.\n# Include a local variable named 'total' of type uint256 which initializes to '0'\n# Use a for loop with 'value' as the variable of type uint256 to iterate through 'values' in the array and accumulate the sum.",
    exercise3:
      "# pragma version 0.4.0\n\n# Create an external pure function named 'find_first_even' that takes a uint256 array of size 6 named 'numbers' as input and returns the first even number found.\n# Use a for loop with 'num' of type uint256 as the variable to iterate through the 'numbers' array and apply a conditional check to return the first even number.\n# Let the for loop return '0' if no even number in the array",
    exercise4:
      "# pragma version 0.4.0\n\n# Create an external pure function named 'sum_odd_numbers' that takes a uint256 array of size 5 named 'numbers' as input and returns the sum of only the odd numbers in the array.\n# Declare a local variable 'total' of type uint256 and initialize it with '0'\n# Create a for loop with the variable 'num' of type uint256 and apply the 'continue' statement to skip even numbers and accumulate only the sum of odd numbers in 'total'.",
    exercise5:
      "# pragma version 0.4.0\n\n# Create an external pure function named 'bounded_increment' that takes two uint256 inputs: 'start' and 'limit'.\n# Declare a local variable 'final_value' of type uint256 and initialize it with 'start'\n# The function should increment 'start' up to 'limit' using a for loop with 'i' of type uint256.\n# The function must have an enforced bound of 4 iterations.\n# The function should return the last incremented value named 'final_value'.",
  },
  "assertions-and-exceptions": {
    exercise1:
      "# pragma version 0.4.0\n\n# Create an external function named 'validate_input' that takes a uint256 input named 'num'.\n# The function should use an 'assert' statement to ensure 'num' is greater than 5, with an error message 'Input must be greater than 5'.",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a public state variable 'amount_balance' of type uint256.\n\n# Create an external function named 'withdraw' that takes a uint256 input named 'amount'.\n# The function should use an 'assert' statement to ensure 'amount' is less than or equal to 'self.amount_balance', with an error message 'Insufficient balance'.\n# If the condition passes, subtract 'amount' from 'self.amount_balance'.",
    exercise3:
      "# pragma version 0.4.0\n\n# Create an external function named 'check_age' that takes a uint256 input named 'age' and return String[50].\n# The function should use an 'if' statement to check if 'age' is less than 18.\n# If true, raise an exception with the error message 'Must be at least 18 years old'.\n# Else, return 'Older than 18 years old'.",
    exercise4:
      "# pragma version 0.4.0\n\n# Create an external function named 'validate_transfer' that takes two uint256 inputs: 'amount' and 'limit'.\n# The function should use 'assert' to ensure 'amount' does not exceed 'limit', with an error message 'Transfer exceeds limit'.\n# If the condition passes, return 'amount'.",
    exercise5:
      "# pragma version 0.4.0\n\n# Create an external function named 'safe_division' that takes two uint256 inputs: 'numerator' and 'denominator'.\n# The function should use 'assert' to ensure 'denominator' is not zero, with an error message 'Denominator cannot be zero'.\n# If the condition passes, return the result of 'numerator' divided by 'denominator'.",
  },
  "transacting-ether": {
    exercise1:
      "# pragma version 0.4.0\n\n# Declare a public state variable 'amount_balance' of type uint256.\n\n# Create an external function named 'deposit' that is payable and takes a uint256 input named 'amount'.\n# The function should ensure 'amount' is greater than zero using an assert statement.\n# If the condition passes, add 'amount' to 'self.amount_balance'.",
    exercise2:
      "# pragma version 0.4.0\n\n# Declare a public state variable 'amount_balance' of type uint256.\n\n# Create an external function named 'withdraw' that takes a uint256 input named 'amount'.\n# Assert that the 'amount' should be more than 0, else return 'Amount must be greater than zero'.\n# Assert that the 'amount' is not less than or equal to 'amount_balance', else 'Insufficient balance'\n# If all condition passes, subtract 'amount' from 'self.amount_balance' and send the 'amount' to 'msg.sender' using the `send` function.",
    exercise3:
      "# pragma version 0.4.0\n\n# Create an external function named 'transfer_ether' that is payable and takes an address input named 'recipient' and a uint256 input named 'amount'.\n# Assert 'amount' is greater than zero else 'Amount must be greater than zero'.\n# If the condition passes, send 'amount' to 'recipient'.",
    exercise4:
      "# pragma version 0.4.0\n\n# Create an external function named 'secure_send' that is payable and takes an address input named 'recipient', a uint256 input named 'amount', and a uint256 input named 'gas_limit'.\n# Assert 'amount' is greater than zero else 'Amount must be greater than zero'.\n# If the condition passes, send 'amount' to 'recipient' with 'gas_limit'.",
    exercise5:
      "# pragma version 0.4.0\n\n# Create a function named 'batch_send' that is payable and takes two inputs:\n# - Dynamic array of addresses named 'recipients' with size 10\n# - Dynamic array of uint256 named 'amounts' with size 10\n# Assert both inputs are the same length, otherwise revert with 'Array lengths must match'.\n# Loop through the arrays using 'i' as uint256 and send each recipient their respective amount.\n# Assert that the amounts of each entry should be more than zero, otherwise revert with 'Amount cannot be zero'.\n# Finally use the `send` function to send every recipient the respective amount.",
  },
  events: {
    exercise1:
      "# pragma version 0.4.0\n\n# Define an event named 'TransferEvent' with three parameters:\n# - 'sender' address type, indexed\n# - 'recipient' address type, indexed\n# - 'amount' (uint256)\n\n# Create a function named 'transfer_funds' that takes an address input 'recipient' and a uint256 input 'amount'.\n# Ensure 'amount' is greater than zero using an assert statement and revert with 'Amount must be greater than zero'.\n# If the condition passes, log 'TransferEvent' with 'msg.sender', 'recipient', and 'amount'.",
    exercise2:
      "# pragma version 0.4.0\n\n# Define an event named 'DepositEvent' with two parameters:\n# - 'depositor' address type, indexed\n# - 'amount' (uint256)\n\n# Declare a public state variable named 'balance_amount' of type uint256.\n\n# Create a payable function named 'deposit' that takes a uint256 input 'amount'.\n# Ensure 'amount' is greater than zero using an assert statement and revert with 'Amount must be greater than zero'.\n# If the condition passes, add 'amount' to 'self.balance_amount' and log 'DepositEvent' with 'msg.sender' and 'amount'.",
    exercise3:
      "# pragma version 0.4.0\n\n# Define an event named 'ApprovalEvent' with three parameters:\n# - 'owner' address type, indexed\n# - 'spender' address type, indexed\n# - 'amount' (uint256)\n\n# Declare a public mapping 'allowances' that maps an address to another mapping of address to uint256.\n\n# Create a function named 'approve_spender' that takes an address input 'spender' and a uint256 input 'amount'.\n# Ensure 'amount' is greater than zero using an assert statement and revert with 'Amount must be greater than zero'.\n# If the condition passes, store 'amount' in a mapping 'allowances' with key 'msg.sender' -> 'spender'.\n# Log 'ApprovalEvent' with 'msg.sender', 'spender', and 'amount'.",
    exercise4:
      "# pragma version 0.4.0\n\n# Define an event named 'BatchTransferEvent' with three parameters:\n# - 'sender' (indexed, address)\n# - 'total_recipients' (uint256)\n# - 'total_amount' (uint256)\n\n# Create a function named 'batch_send' that is payable and takes two inputs:\n# - Dynamic array of addresses named 'recipients' with size 5\n# - Dynamic array of uint256 named 'amounts' with size 5\n# Assert both inputs are the same length, otherwise revert with 'Array lengths must match'.\n# Create a local variable 'total_amount' of type uint256 and initialize with '0'\n# Loop through the arrays using 'i' as uint256 and send each recipient their respective amount in range of 5.\n# Loop through all amounts and sum it in 'total_amount'\n# After completing all transfers, log 'BatchTransferEvent' with 'msg.sender', total recipients, and total amount sent.",
    exercise5:
      "# pragma version 0.4.0\n\n# Define an event named 'OwnershipTransferred' with two parameters:\n# - 'previous_owner' address type, indexed\n# - 'new_owner' address type, indexed\n\n# Declare a public state variable 'owner' of type address.\n\n# Create a function named 'transfer_ownership' that takes an address input 'new_owner'.\n# Ensure 'new_owner' is not the zero address using an assert statement, else 'New owner cannot be zero address'.\n# Use the `empty()` built-in function to invoke the zero address.\n# Store the previous owner in a new local variable 'previous_owner' of type address\n# Store 'new_owner' as the new contract owner.\n# Log 'OwnershipTransferred' with the previous and new owner.",
  },
  "reentrancy-locks": {
    exercise1:
      "# pragma version 0.4.0\n\n# Define a public uint256 variable 'balance_amount'.\n\n# Implement a function 'deposit_funds' that is payable and allows users to send Ether to the contract by increasing 'balance_amount'.\n\n# Implement a function 'withdraw_funds' that allows users to withdraw their deposited funds.\n# Use the 'raw_call' function to pass empty bytes to send Ether to the caller.\n# Protect 'withdraw_funds' with '@nonreentrant' to prevent reentrancy attacks.",
    exercise2:
      "# pragma version 0.4.0\n\n# Define a public mapping variable 'balance_mapping' that maps address to uint256 to track users' deposits.\n\n# Implement an external payable function 'deposit' that allows users to send Ether and update their balance.\n\n# Implement a function 'safe_withdraw' that allows users to withdraw all their deposits.\n# Create a local variable 'amount' of type uint256 equal to msg.sender balance.\n# Use the 'raw_call' function to pass empty bytes to send 'amount' to the caller.\n# Protect 'safe_withdraw' with '@nonreentrant' to prevent reentrancy attacks.",
    exercise3:
      "# pragma version 0.4.0\n\n# Define public uint256 variable 'total_donations'.\n\n# Define a public mapping variable 'donors' that maps address to a boolean.\n\n# Define a public mapping variable 'donor_points' that maps address to uint256.\n\n# Implement an external payable function 'donate' that allows users to send Ether to the contract, records in 'total_donations' and update 'self.donors' if they successfully donated.\n# Award 100 points to donors who donated\n\n# Implement an external function 'claim_points' that allows users to claim their points as Ether.\n# Ensure 'claim_points' is protected by '@nonreentrant' to prevent reentrancy attacks.\n# Assert that 'donors' is true, else 'No donations made'\n# Define a local variable 'points' of type uint256 to the 'donor_points'\n# Assert that 'points' is more than 0, else 'No points to claim'\n# Reset points to 0 before sending Ether\n# Use the built-in function 'send' to send Ether equivalent to point to 'msg.sender'",
    exercise4:
      "# pragma version 0.4.0\n\n# Define two public mapping variable 'collateral' and 'loans', both mapping address to uint256.\n\n# Implement a function 'lend_funds' that allows users to deposit Ether as collateral.\n\n# Implement a '@nonreentrant' function 'borrow_funds' that takes 'borrow_amount' of type uint256 to check and allow users to borrow up to 50% of their collateral.\n# Define a local variable 'borrow_power' which is half of the msg.sender collateral\n# Assert that loans status is still lower than 'borrow_power', else 'Insufficient collateral'\n# Increase 'loans' of msg.sender by 'borrow_amount'\n# Use 'send' built-in function to send the 'borrow_amount' to the msg.sender",
    exercise5:
      "# pragma version 0.4.0\n\n# Define a public mapping variable 'balances' which maps addresses to uint256.\n\n# Create a function 'batch_withdraw' that:\n# - Takes a dynamic array of addresses 'recipients' with a size of 5.\n# - Use a for loop with variable 'i' of type uint256 to loop through the function\n# - Define local variable 'recipient' of type address which maps to 'recipients'\n# - Define local variable 'amount' of type uint256 which maps 'recipient' to 'balances'\n# - Assert that amount must be more than 0, else 'Invalid batch withdraw'\n# - Update 'balances' to 0 to ensure nonreentrancy attacks\n# - Use built-in send function to send the 'amount' to every 'recipient'",
  },
  imports: {
    exercise1:
      "# File structure:\n# ├── MathLibrary.vy\n# └── MainContract.vy\n\n# Content of 'MathLibrary.vy':\n# pragma version 0.4.0\n\n# Define an external pure function named 'multiply' that takes two uint256 inputs 'num1' and 'num2' and returns their product\n\n# In 'MainContract.vy', import 'MathLibrary' and create a function named 'use_multiply' that calls 'multiply' with two uint256 arguments 'value1' and 'value2' and returns the result.\n# Content of 'MainContract.vy':",
    exercise2:
      "# File structure:\n# ├── StorageHelper.vy\n# └── MainContract.vy\n\n# Content of 'StorageHelper.vy':\n# pragma version 0.4.0\n\n# Define a public storage variable 'stored_value' of type uint256\n\n# Create an external function named 'update_value' that updates the 'stored_value' by taking an input 'new_value' of uint256\\n\n# In 'MainContract.vy', import 'StorageHelper.vy' using an alias 'sh'\n# Content of 'MainContract.vy':\n\n# Define a public storage variable 'main_contract_stored_value' of type uint256\n\n# Create an external function named 'update_stored_value' that takes 'new_value' of type uint256 to update 'main_contract_stored_value'",
    exercise3:
      "# File structure:\n# ├── Counter.vy\n# └── MainContract.vy\n\n# Content of 'Counter.vy':\n# pragma version 0.4.0\n\n# Define a contract with a private uint256 variable 'count_value' and an external function 'increment_count' that increases 'count_value' by 1\n\n# In 'MainContract.vy', use 'from . import Counter' syntax to import 'increment_count' and create a function named 'increase_count' that calls 'increment_count'.\n# Content of 'MainContract.vy':",
    exercise4:
      "# File structure:\n# ├── TokenInterface.vy\n# └── MainContract.vy\n\n# Content of 'TokenInterface.vy':\n# pragma version 0.4.0\n\n# Define an interface with an external function 'balance_of' that takes an address input 'user_address' and returns a view uint256\n\n# In 'MainContract.vy', import 'TokenInterface' and create a function named 'check_balance' that calls 'balance_of' for a given address 'target_address' and returns the uint256.\n# Content of 'MainContract.vy':",
    exercise5:
      "# File structure:\n# ├── ethereum\n# │   ├── ercs\n# │   │   └── IERC20.vy\n# └── TokenContract.vy\n\n# Content of 'IERC20.vy':\n# pragma version 0.4.0\n\n# Define an interface with an external function 'transfer' that takes an address 'recipient' and uint256 'amount' as inputs and returns a nonpayable bool\n\n# In 'TokenContract.vy', import 'IERC20' from 'ethereum.ercs'\n# Implement the external 'transfer' function to deduct 'amount' from the sender and add to 'recipient'\n# Log the transfer and return the bool\n# Content of 'TokenContract.vy':",
  },
};
