import React from "react";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  playersNamesChosen,
  gameReseted,
  playersTurnEnded,
  selectGame,
  selectPlayer,
} from "./features/reducers/gameSlice";

function App() {
  const game = useSelector(selectGame);
  const player = useSelector(selectPlayer);
  const dispatch = useDispatch();

  const [xName, setXName] = useState("");
  const [oName, setOName] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;

    target.name === "x" ? setXName(value) : setOName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(playersNamesChosen({ x: xName, o: oName }));
    setOName("");
    setXName("");
  };

  const resetGame = () => {
    dispatch(gameReseted());
    dispatch(
      playersNamesChosen({ x: game.players.x.name, o: game.players.o.name })
    );
  };

  console.log("Initialstate", game);
  return (
    <div className="App">
      {/* <header className="App-header">Hello</header> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Player X name
          <input
            name="x"
            type="text"
            placeholder={game.players.x.name}
            value={xName}
            onChange={handleInputChange}
          />
        </label>
        <br></br>
        <label>
          Player O name
          <input
            name="o"
            type="text"
            placeholder={game.players.o.name}
            value={oName}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit"></button>
      </form>
      <h2>Player 1 name is {game.players.x.name}</h2>
      <h2>Player 2 name is {game.players.o.name}</h2>
      <br></br>
      <h2>Current player is {player.name}</h2>
      <button onClick={() => dispatch(playersTurnEnded({ seconds: 30 }))}>
        Make your move
      </button>
      <button onClick={() => resetGame()}>Reset</button>
    </div>
  );
}

export default App;
