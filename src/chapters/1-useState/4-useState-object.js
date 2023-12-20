import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Christopher",
    age: 24,
    message: "Random message",
  });

  const [name, setName] = useState("Christopher");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Random message");
  // console.log(person);
  // we use ...person to avoid overriding the object
  const changeMessage = () => {
    setPerson({ ...person, message: "Thank you, Alight" });
    // setName("Paul");
    // setAge(30);
    // setMessage("Hello friends");
  };
  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      {/* <h3>{name}</h3> */}
      {/* <h3>{age}</h3> */}
      {/* <h3>{message}</h3> */}
      <button className="btn" onClick={() => changeMessage()}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
