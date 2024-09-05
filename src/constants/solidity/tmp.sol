// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract InlineAssemblyExercise {
    constructor() {
        // Store the value "Scroll 4ever" in the storage slot 0xabcdef
        assembly {
            sstore(0xabcdef, "Scroll 4ever")
        }
    }

    function value() public view returns (bytes32 result) {
        assembly {
            // Load the value from storage slot 0xabcdef
            result := sload(0xabcdef)
        }
    }
}
