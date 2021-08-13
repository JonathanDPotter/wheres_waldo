import "./Footer.scss";
import HomeButton from "./HomeButton";
// import CharactersToFind from "./CharactersToFind";

function Footer(props) {
  const { goHome } = props;
  return (
    <div className="footer">
      {/* <CharactersToFind /> */}
      <HomeButton goHome={goHome}/>
    </div>
  );
}

export default Footer;
