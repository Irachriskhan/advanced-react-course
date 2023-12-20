import React from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState with an array</h2>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear all items
      </button>
      <button className="btn" onClick={() => setPeople(data)}>
        Reset
      </button>
    </>
  );
};

export default UseStateArray;
