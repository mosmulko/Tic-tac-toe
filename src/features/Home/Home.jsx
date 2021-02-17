import React from "react";
import Button from '../Button';

function Home() {
  return (
    <div id='home-wrapper' className='flex center column'>
      <h1>Welcome!</h1>
      <h2>Do you remember that joyfull game you were playing with your friends at school?</h2>
      <p>Oh the sweet escape from the boring voice of your teacher...</p>
      <h2>Time to relieve the memories!</h2>
      <p>So grab your friend and LET'S PLAY</p>
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
