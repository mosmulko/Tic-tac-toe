import React from "react";
import Label from "./Label";

function Field({ click, status, num}) {
  const classes = `field f-${num}`
  return (
    <div onClick={click} className={classes}>
      <Label id={status}/>
    </div>
  );
}

export default Field;
