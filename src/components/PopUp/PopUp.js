import Timer from "../Timer/Timer.js";
import "./PopUp.scss";

const PopUp = ({
  currentTime,
  handleSubmit,
  handleChange,
  inputValue,
}) => {
  return (
    <div className="pop-up">
      <Timer message="Your Time" currentTime={currentTime} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="player">
          Player Name:
          <input
            type="text"
            name="player"
            id="player-input"
            onChange={handleChange}
            value={inputValue}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PopUp;
