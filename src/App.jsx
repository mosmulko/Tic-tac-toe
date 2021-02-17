import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./features/Home/Home";
import GameLayout from "./features/GameLayout/GameLayout";
import Leaderboard from "./features/Leaderboard/Leaderboard";

function App() {
  const changeNavDisplay = () => {
    const elements = document.getElementsByClassName('menu');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle('hidden')
    }
  };

  return (
    <Router>
      <div className="appGrid">
        <header className='flex center'><div id='title'>Tic Tac Toe</div></header>
        <div id='burger' onClick={changeNavDisplay}>
          <span></span>
        </div>
        <nav className='menu hidden flex center'>
          <ul className='menu hidden'>
            <li onClick={changeNavDisplay}>
              <Link to="/game">Game</Link> 
            </li>
            <li onClick={changeNavDisplay}>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Route path="/game">
              <GameLayout />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <footer className='flex'><div>By Monika Smulko</div></footer>
      </div>
    </Router>
  );
}

export default App;
