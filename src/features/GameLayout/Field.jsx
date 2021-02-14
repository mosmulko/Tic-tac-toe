import React from "react";
import Label from "./Label";

function Field({ click, status}) {
  
  return (
    <div onClick={click} className="field">
      <Label id={status}/>
    </div>
  );
}

export default Field;
