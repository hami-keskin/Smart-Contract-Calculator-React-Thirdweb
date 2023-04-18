# Smart Contract Calculator with React and ThirdWeb

This is a simple calculator that interacts with an Ethereum smart contract using ThirdWeb, a React library for interacting with Ethereum and other Web3-based blockchains. 

The calculator contract performs basic arithmetic operations such as addition, subtraction, multiplication, and division. Users can input two numbers and select the operation to perform, and the contract will return the result.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Install the project dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Connect your Ethereum wallet to the ThirdWeb provider by clicking on the "Connect Wallet" button.
5. Input two numbers and select an operation to perform.

## Usage

This calculator allows you to perform the following operations:

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

To perform an operation, input two numbers and select the operation from the buttons below. Then, click the corresponding button to trigger a transaction on the Ethereum network. Once the transaction has been confirmed, the result will be displayed below.

## Smart Contract

The smart contract for this calculator can be found in the `contracts` directory. It is a basic Solidity contract that performs the arithmetic operations and returns the result.

## Technologies Used

- React
- ThirdWeb
- Ethereum
- Solidity

## Contributing

Contributions are welcome! If you find a bug or would like to suggest an improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
