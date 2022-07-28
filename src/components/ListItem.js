import React from "react";

export default function ListItem(props) {
  return (
    <div className="list_item">
      <div className="img_container">
        <img
          src={props.element.image}
          alt="breadhead"
          className="breadhead_image"
        ></img>
      </div>
      <div className="info">
        <h3 className="name">{props.element.name}</h3>
        <h4 className="position">{props.element.position}</h4>
      </div>
    </div>
  );
}

