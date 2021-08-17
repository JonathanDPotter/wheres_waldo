import "./WinScreen.scss";
import { useEffect } from 'react';
import Button from "../Button/Button.js"

const WinScreen = ({ time, stopTimer, restart }) => {
  
  useEffect(() => {
    stopTimer();
  })

  return (
    <div className="win-screen">
      <h1>{time}</h1>
      <Button text="Play again!" onClick={restart}/>
    </div>
  );
}

export default WinScreen;
