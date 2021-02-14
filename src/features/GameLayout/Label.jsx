import React from "react";
import './Label.css';

function Label({ id }) {
  return (
    <div className="labelContainer">
      <div className={id}></div>
    </div>
  );
}

export default Label;
