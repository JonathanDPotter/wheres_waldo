import "./Footer.scss";
import HomeButton from "./HomeButton";
import CharactersToFind from "./CharactersToFind";

const Footer = ({ goHome, index, found }) => {
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
