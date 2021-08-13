import "./Footer.scss";
import HomeButton from "./HomeButton";
import CharactersToFind from "./CharactersToFind";

function Footer(props) {
  const { goHome, characters, index } = props;
  return (
    <div className="footer">
      <div className="container">
        <CharactersToFind characters={characters} index={index} />
        <HomeButton goHome={goHome} />
      </div>
    </div>
  );
}

export default Footer;
