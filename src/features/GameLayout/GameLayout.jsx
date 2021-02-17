import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged, selectStatus } from "../../app/reducers/statusSlice";
import {
  newGameStarted,
  namesChosen,
  selectNames,
} from "../../app/reducers/playersSlice";
import './GameLayout.css'
import Form from "./Form";
import Game from "./Game/Game";
import Winner from "./Winner";
import Button from '../Button';

function GameLayout() {
  const status = useSelector(selectStatus);
  const chosenNames = useSelector(selectNames);
  const dispatch = useDispatch();

  const startNewGame = (status, names) => {
    let newStatus = status === "playing" ? "new" : "playing";
    let [x, o] = names;
    dispatch(newGameStarted());
    dispatch(namesChosen({ x: x, o: o }));
    dispatch(statusChanged(newStatus));
  };

  const handleButtonRender = (status, names) => {
    if (status === "new") return;
    let message = status === "playing" ? "Reset" : "Start";
    return <Button click={() => startNewGame(status, names)} message={message} className='game'/>;
  };

  return (
    <div>
      {
        {
          new: <Form submit={startNewGame} />,
          playing: <Game/>,
          won: <Winner />,
          draw: <h3 className='title'>It's a draw</h3>,
        }[status]
      }
      {handleButtonRender(status, chosenNames)}
    </div>
  );
}

export default GameLayout;
