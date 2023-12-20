import React, { useState } from "react";
// useState is a function
// use
// component name must be Uppercase
// must be in the function/component body
// cannot call conditionally the hook ex: if(hook)...

const UseStateBasics = () => {
  // console.log(useState("Hello hello"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("Random title");
  const clickHandler = () => {
    if (text === "Random title") setText("Hello Chris");
    else setText("Random title");
  };
  return (
    <>
      <h2>useState basics</h2>
      <h3>{text}</h3>
      <button className="btn" onClick={clickHandler}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
