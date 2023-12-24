import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h2>short circuit</h2>
      {/* <h3>{firstValue}</h3>
      <h3>value : {secondValue}</h3> */}
      <h3>{text || "Christopher says"}</h3>
      {/* {!text && <h3>Hello World</h3>} */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h3>Error...</h3>}
      {isError ? <h3>There is an Error...</h3> : <h3>No Error found!!!</h3>}
    </>
  );
};

export default ShortCircuit;
