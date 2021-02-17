import React from "react";
import Button from '../Button';

function Home() {
  return (
    <div id='home-wrapper' className='flex center column'>
      <h1>Welcome to Tic Tac Toe game for two!</h1>
      <h3>Rules</h3>
      <ol>
        <li>Choose your names to see your greatest victory on the Leaderboard</li>
        <li>X always start</li>
        <li>Each player has 30 seconds to make his move</li>
        <li>Have fun!</li>
      </ol>
      <a href='/game'><Button  message='Create Players' className='game'/></a>
    </div>
  );
}

export default Home;
