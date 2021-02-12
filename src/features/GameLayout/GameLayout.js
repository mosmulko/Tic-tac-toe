import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../app/reducers/statusSlice";
import Form from "./Form";
import Gameboard from "./Gameboard";
import Winner from "./Winner";
import Draw from "./Draw";

function GameLayout() {
  const status = useSelector(selectStatus);

  return (
    <div>
      {
        {
          new: <Form />,
          playing: <Gameboard />,
          won: <Winner />,
          draw: <Draw />,
        }[status]
      }
    </div>
  );
}

export default GameLayout;
