import "./Header.scss";
import Timer from "./Timer.js";

function Header(props) {
  const { currentTime, goHome } = props;
  return (
    <div className="header">
      <h1 className="title">Where are They?</h1>
      <Timer currentTime={currentTime} />
    </div>
  );
}

export default Header;
