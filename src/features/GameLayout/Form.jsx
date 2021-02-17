import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectNames } from "../../app/reducers/playersSlice";
import Label from "./Label";
import Button from '../Button';

function Form({ submit }) {
  const names = useSelector(selectNames);
  const [playerXName, playerOName] = names;

  const [xName, setXName] = useState(playerXName);
  const [oName, setOName] = useState(playerOName);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;

    target.name === "x" ? setXName(value) : setOName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit('new', [xName, oName]);
    setXName(playerXName);
    setOName(playerOName);
  };

  return (
    <div id='form-wrapper'>
      <h3 className='title'>Choose your players</h3>
      <form className='flex column' onSubmit={(e) => handleSubmit(e)}>
        <div className='input flex'>
          <Label id={"x"} />
          <input
            name="x"
            type="text"
            placeholder={'Player X name'}
            value={xName}
            onChange={handleInputChange}
          />
        </div>
        <div className='input flex'>
          <Label id={"o"} />
          <input
            name="o"
            type="text"
            placeholder={'Player O name'}
            value={oName}
            onChange={handleInputChange}
          />
        </div>
        <Button  message='Start' className='game' type='submit'/>
      </form>
    </div>
  );
}

export default Form;
