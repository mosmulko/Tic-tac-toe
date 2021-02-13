import React from "react";

function Label({ id }) {
  return (
    <div className="labelContainer">
      <div className={id}></div>
    </div>
  );
}

export default Label;
