import "./Footer.scss";
import HomeButton from "./HomeButton";

function Footer(props) {
  const { goHome } = props;
  return (
    <div className="footer">
      <HomeButton goHome={goHome}/>
    </div>
  );
}

export default Footer;
