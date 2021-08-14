import "./Footer.scss";
import HomeButton from "./HomeButton";
import CharactersToFind from "./CharactersToFind";

function Footer(props) {
  const { goHome, index, found } = props;
  return (
    <div className="footer">
      <div className="container">
        <CharactersToFind index={index} found={found}/>
        <HomeButton goHome={goHome} />
      </div>
    </div>
  );
}

export default Footer;
