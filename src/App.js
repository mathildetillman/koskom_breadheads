import React, { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [breadheads, setBreadheads] = useState([
    { name: "Gangeya", position: "Pang", image: "./images/Gangeya.jpg" },
    { name: "William", position: "PR", image: "./images/William.jpg" },
    { name: "Filip", position: "Sosial", image: "./images/Filip.jpg" },
    { name: "Erlend", position: "Kaffeans", image: "./images/Erlend.jpg" },
    { name: "Hanna", position: "Nestleder", image: "./images/Hanna.jpg" },
    { name: "Hedda", position: "Sosial", image: "./images/Hedda.jpg" },
    { name: "Mathilde", position: "Tech", image: "./images/Mathilde.jpg" },
    { name: "Martine", position: "Sosial", image: "./images/Martine.jpg" }
  ]);

  function addBreadhead(name, position) {
    setBreadheads(
      breadheads.concat({
        name: name,
        position: position,
        image: "./images/Bread.jpg"
      })
    );
  }

  return (
    <div className="main-container">
      <List breadheads={breadheads}></List>
      <Form addBreadhead={addBreadhead} />
    </div>
  );
}

export default App;



