import React from "react";

function Button({click, message, type}) {
  return <button className={type} onClick={click}>{message}</button>;
}

export default Button;