// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    // State variable to store the result of the last operation
    int256 public result;

    // Event to log the result of the last operation
    event Result(int256 result);


    // Function to get the result of the last operation
    function getResult() public view returns (int256) {
        return result;
    }

    // Function to add two numbers
    function add(int256 _a, int256 _b) public returns (int256) {
        result = _a + _b;
        emit Result(result);
        return result;
    }

    // Function to subtract two numbers
    function sub(int256 _a, int256 _b) public returns (int256) {
        result = _a - _b;
        emit Result(result);
        return result;
    }

    // Function to multiply two numbers
    function mul(int256 _a, int256 _b) public returns (int256) {
        result = _a * _b;
        emit Result(result);
        return result;
    }

    // Function to divide two numbers
    function div(int256 _a, int256 _b) public returns (int256) {
        require(_b != 0, "Cannot divide by zero");
        result = _a / _b;
        emit Result(result);
        return result;
    }
}