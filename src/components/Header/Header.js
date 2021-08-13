import "./Header.scss";
import Timer from "./Timer.js";

function Header(props) {
  const { currentTime, choice } = props;
  return (
    <div className="header">
      <h1 className="title">Where are They?</h1>
      {choice !== null ? <Timer currentTime={currentTime} /> : null}
    </div>
  );
}

export default Header;
