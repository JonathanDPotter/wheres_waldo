import "./Footer.scss";
import Button from "../Button/Button.js";
import CharactersToFind from "./CharactersToFind";

const Footer = ({ goHome, index, found }) => {
  return (
    <div className="footer">
      <div className="container">
        <CharactersToFind index={index} found={found}/>
        <Button onClick={goHome} text="home"/>
      </div>
    </div>
  );
}

export default Footer;
