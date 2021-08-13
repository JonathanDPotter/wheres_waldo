import { characters } from "../../pictureArrays.js";

function CharactersToFind(props) {
  let { index } = props;

  if (index === null) { index = 0 };

  return (
    <div className="characters">
      {characters[index].map((character, num) => {
        return (
          <img
            key={num}
            src={character}
            alt="character-face"
            className="character"
          />
        );
      })}
    </div>
  );
}

export default CharactersToFind;
