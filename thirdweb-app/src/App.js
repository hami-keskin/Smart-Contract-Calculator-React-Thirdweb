import {
  ConnectWallet,
  ThirdwebProvider,
  useContract,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import { Sepolia } from "@thirdweb-dev/chains";

import "./styles/Home.css";

export default function Home() {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <ConnectWallet />
      <Component />
    </ThirdwebProvider>
  );
}

function Component() {
  const { contract } = useContract(
    "0x7a06DdF25CEAAb6C91f06d29D6e0743a6cC5E3b6"
  );
  const [values, setValues] = useState({ a: 0, b: 0 });
  const { mutateAsync: add } = useContractWrite(contract, "add");
  const { mutateAsync: div } = useContractWrite(contract, "div");
  const { mutateAsync: mul } = useContractWrite(contract, "mul");
  const { mutateAsync: sub } = useContractWrite(contract, "sub");
  const { data, isLoading } = useContractRead(contract, "result", []);

  const handleClick = async (operator) => {
    const { a, b } = values;
    const op =
      operator === "add"
        ? add
        : operator === "div"
        ? div
        : operator === "mul"
        ? mul
        : sub;

    try {
      const data = await op({ args: [a, b] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={values.a}
        onChange={(e) =>
          setValues((prevState) => ({ ...prevState, a: e.target.value }))
        }
      />
      <input
        type="number"
        value={values.b}
        onChange={(e) =>
          setValues((prevState) => ({ ...prevState, b: e.target.value }))
        }
      />
      <button onClick={() => handleClick("add")}>Add</button>
      <button onClick={() => handleClick("div")}>Div</button>
      <button onClick={() => handleClick("mul")}>Mul</button>
      <button onClick={() => handleClick("sub")}>Sub</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Result: {data ? data.toString() : "N/A"}</p>
      )}
    </div>
  );
}
