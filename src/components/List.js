import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <div>
      <h1 className="overskrift">Breadheads:</h1>
      {props.breadheads.map((el, index) => {
        return <ListItem key={index} element={el}></ListItem>;
      })}
    </div>
  );
}


