import React from "react";

function Button({click, message}) {
  return <button onClick={click}>{message}</button>;
}

export default Button;