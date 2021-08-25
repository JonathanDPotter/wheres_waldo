import "./Header.scss";
import Timer from "../Timer/Timer.js";

const Header = ({ currentTime, showTime }) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="title">Where's Waldo?</h1>
        <div className={showTime === true ? "time-box" : "hidden"}>
          <Timer message="Time" currentTime={currentTime} showTime={showTime} />
        </div>
      </div>
    </div>
  );
};

export default Header;
