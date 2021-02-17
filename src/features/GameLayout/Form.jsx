import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectNames } from "../../app/reducers/playersSlice";
import Label from "./Label";

function Form({ submit }) {
  const names = useSelector(selectNames);
  const [playerXName, playerOName] = names;

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
    <div id='form-wrapper'>
      <h3 className='title'>Choose your players</h3>
      <form className='flex' onSubmit={(e) => handleSubmit(e)}>
        <div className='input flex'>
          <Label id={"x"} />
          <input
            name="x"
            type="text"
            placeholder={playerXName !== '' ? playerXName : 'Player X name'}
            value={xName}
            onChange={handleInputChange}
          />
        </div>
        <div className='input flex'>
          <Label id={"o"} />
          <input
            name="o"
            type="text"
            placeholder={playerOName !== '' ? playerOName : 'Player O name'}
            value={oName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default Form;
