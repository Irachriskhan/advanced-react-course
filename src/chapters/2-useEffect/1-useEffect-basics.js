import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect(() => {
    console.log("calling the useEffect");
    if (value > 1) document.title = `${value} New Messages`;
  });

  console.log("render the component");

  const [value, setValue] = useState(0);
  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
