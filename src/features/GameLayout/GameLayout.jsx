import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged, selectStatus } from "../../app/reducers/statusSlice";
import {
  newGameStarted,
  namesChosen,
  selectNames,
} from "../../app/reducers/gameSlice";
import Form from "./Form";
import Gameboard from "./Gameboard";
import Winner from "./Winner";
import Draw from "./Draw";
import Button from './Button';

function GameLayout() {
  const status = useSelector(selectStatus);
  const names = useSelector(selectNames);
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
    return <Button click={() => startNewGame(status, names)} message={message} />;
  };

  return (
    <div>
      {
        {
          new: <Form submit={startNewGame} />,
          playing: <Gameboard/>,
          won: <Winner />,
          draw: <Draw />,
        }[status]
      }
      {handleButtonRender(status, names)}
    </div>
  );
}

export default GameLayout;
