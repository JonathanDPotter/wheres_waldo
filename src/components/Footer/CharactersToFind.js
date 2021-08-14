import { characters } from "../../pictureArrays.js";

function CharactersToFind(props) {
  let { index, found } = props;

  if (index === null) {
    index = 0;
  }

  return (
    <div className="characters">
      <p className="find-title" style={{ display: "block" }}>
        Find:{" "}
      </p>
      {characters[index].map((character, num) => {
        return (
          <div className="character-container" key={num}>
            <img src={character} alt="character-face" className="character" />
            {found.includes(num) ? <p className="overlay-x">X</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default CharactersToFind;
