import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectNames } from "../../app/reducers/playersSlice";
import Label from "./Label";

function Form({ submit }) {
  const names = useSelector(selectNames);
  const [x, o] = names;

//change to single state with both names
  const [xName, setXName] = useState("");
  const [oName, setOName] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;

    target.name === "x" ? setXName(value) : setOName(value);
  };

  const handleSubmit = (event) => {
    const newNames = [xName, oName].map((name, i) =>
      name === "" ? (name = names[i]) : name
    );
    event.preventDefault();
    submit('new', newNames);
    setXName("");
    setOName("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <Label id={"x"} />
          <input
            name="x"
            type="text"
            placeholder={x}
            value={xName}
            onChange={handleInputChange}
          />
        </label>
        <br></br>
        <label>
          <Label id={"o"} />
          <input
            name="o"
            type="text"
            placeholder={o}
            value={oName}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default Form;
