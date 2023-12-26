import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../data";

const Index = () => {
  const [name, setName] = useState("");
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };

  // reducer function
  const reducer = (state, action) => {};

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
    } else {
    }
  };

  return (
    <>
      <h2>To Do List App</h2>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.traget.value)}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Index;
