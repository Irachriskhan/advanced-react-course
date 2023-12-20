import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => setValue(0);
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        // if ()
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h2>useState counter example</h2>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More complex counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
