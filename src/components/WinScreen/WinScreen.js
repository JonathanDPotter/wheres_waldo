import "./WinScreen.scss";
import PopUp from "../PopUp/PopUp.js";
import { useEffect } from "react";
import Button from "../Button/Button.js";

const WinScreen = ({ time, stopTimer, restart }) => {
  useEffect(() => {
    stopTimer();
  });

  return (
    <div className="win-screen">
      <PopUp currentTime={time} />
      <Button text="Play again!" onClick={restart} />
    </div>
  );
};

export default WinScreen;
