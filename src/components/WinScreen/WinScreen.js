import "./WinScreen.scss";
import PopUp from "../PopUp/PopUp.js";
import { useEffect } from "react";
import Button from "../Button/Button.js";
import Timer from "../Timer/Timer.js";

const WinScreen = ({
  time,
  stopTimer,
  restart,
  handleSubmit,
  handleChange,
  inputValue,
  popClose,
  topScores,
  currentScoreId,
}) => {
  let toRender;

  useEffect(() => {
    stopTimer();
  });

  if (popClose !== true) {
    toRender = (
      <PopUp
        currentTime={time}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
      />
    );
  } else {
    const sortedScores = topScores.sort((a, b) => {
      return a.time - b.time;
    });
    const listItems = sortedScores.map((score, i) => {
      if (i < 10) {
        return (
          <li
            className={
              currentScoreId === score.id ? "score current" : "score"
            }
            key={score.id}
          >
            {score.player}{" "}
            <Timer message="Time" currentTime={score.time}></Timer>
          </li>
        );
      }
      return null;
    });
    toRender = (
      <div className="container">
        <h1 className="score-title">Top Scores</h1>
        <ul className="top-scores-list">{listItems}</ul>
        <Button text="Play again!" onClick={restart} />
      </div>
    );
  }

  return <div className="win-screen">{toRender}</div>;
};

export default WinScreen;
