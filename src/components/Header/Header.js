import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.currentTime}</h1>
    </div>
  );
}

export default Header;
