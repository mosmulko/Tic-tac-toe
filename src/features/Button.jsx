import React from "react";

function Button({click, message, className, type}) {
  return <button className={className} type={type} onClick={click}>{message}</button>;
}

export default Button;