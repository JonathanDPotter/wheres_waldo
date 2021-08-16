import "./WinScreen.scss";
import { useEffect } from 'react';

const WinScreen = ({ time, stopTimer, clearChoice }) => {
  
  useEffect(() => {
    clearChoice();
    stopTimer();
  })

  return (
    <div className="win-screen">
      <h1>{time}</h1>
    </div>
  );
}

export default WinScreen;
