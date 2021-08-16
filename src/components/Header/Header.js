import "./Header.scss";
import Timer from "./Timer.js";

const Header = ({ currentTime, choice }) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="title">Where's Waldo?</h1>
        {choice !== null ? (
          <Timer currentTime={currentTime} className="timer" />
        ) : null}
      </div>
    </div>
  );
};

export default Header;
