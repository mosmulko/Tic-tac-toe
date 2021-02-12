import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./features/Home/Home";
import GameLayout from "./features/GameLayout/GameLayout";
import Leaderboard from "./features/Leaderboard/Leaderboard";

function App() {
  return (
    <Router>
      <div>
        <header>Tic-Tac-Toe Game for 2!</header>

        <nav>
          <ul>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
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

        <footer>Designed and coded by Monika Smulko</footer>
      </div>
    </Router>
  );
}

export default App;
