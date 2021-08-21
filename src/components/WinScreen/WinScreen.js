import "./WinScreen.scss";
import PopUp from "../PopUp/PopUp.js";
import { useEffect } from "react";
import Button from "../Button/Button.js";
import db from "../../firebase.js"

const WinScreen = ({
  time,
  stopTimer,
  restart,
  handleSubmit,
  handleChange,
  inputValue,
  popClose,
}) => {

  let toRender;

  useEffect(() => {
    stopTimer();
  });

  if (popClose !== true) {
    toRender = <PopUp
      currentTime={time}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      inputValue={inputValue}
    />;
  } else {
    const listItems = [];
    db.collection("topScores").get().then((querySnapshot) => {
      querySnapshot.forEach((doc, i) => {
        if (i <= 20) {
          listItems.push(
            <li className="top-score">{i}: {doc.player} {doc.time}</li>
          )
        }
      })
    })
    toRender = <div className="container">
      <h1 className="score-title">Top Scores</h1>
      <ul className="top-scores-list">
        {listItems}
      </ul>
        <Button text="Play again!" onClick={restart} />
      </div>
  }

  return (
    <div className="win-screen">
      {toRender}
    </div>
  );
};

export default WinScreen;
