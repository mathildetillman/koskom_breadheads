import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePositionChange(event) {
    setPosition(event.target.value);
  }

  function handleAdd() {
    props.addBreadhead(name, position);
    setName("");
    setPosition("");
  }

  return (
    <div className="addContainer">
      <h2 style={{ fontWeight: 400 }}>Legg til nytt breadhead:</h2>
      <input placeholder="Navn" onChange={handleNameChange} value={name} />
      <input
        placeholder="Stilling"
        onChange={handlePositionChange}
        value={position}
      />
      <button type="button" onClick={handleAdd}>
        Legg til!
      </button>
    </div>
  );
}


