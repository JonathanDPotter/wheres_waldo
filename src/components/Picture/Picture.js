import "./Picture.scss";
import { pictures } from "../../pictureArrays.js";

const Picture = ({ index, foundCharacter }) => {
  const coords = [
    [
      "410, 305, 430, 335",
      "450, 65, 465, 100",
      "925, 355, 945, 400",
      "1175, 389, 1200, 440",
    ],
    [
      "915,350, 940, 390",
      "820, 670, 848 739.5 ",
      "47, 348, 67, 385",
      "155, 335, 165, 370",
    ],
    [
      "600, 603, 615, 639",
      "1072, 486, 1090, 530",
      "1124, 828, 1155, 854",
      "820, 460, 844, 500",
    ],
    [
      "1267, 673, 1299, 735",
      "724, 385, 744, 412",
      "465, 596, 485, 619",
      "197, 278, 227, 340",
    ],
  ];

  const width = window.innerWidth;

  let picWidth = 1500;

  if (index === null) {
    index = 0;
  }

  if (width < 600) {
    picWidth = 1000;
  }

  return (
    <div className="picture">
      <img
        src={pictures[index]}
        alt="cast of characters"
        style={{ width: picWidth }}
        useMap="#characters-map"
      />
      <map name="characters-map">
        <area
          shape="rect"
          coords={coords[index][0]}
          alt="char1"
          name="char1"
          onClick={() => foundCharacter(0)}
        />
        <area
          shape="rect"
          coords={coords[index][1]}
          alt="char2"
          name="char2"
          onClick={() => foundCharacter(1)}
        />
        <area
          shape="rect"
          coords={coords[index][2]}
          alt="char3"
          name="char3"
          onClick={() => foundCharacter(2)}
        />
        <area
          shape="rect"
          coords={coords[index][3]}
          alt="char4"
          name="char4"
          onClick={() => foundCharacter(3)}
        />
      </map>
    </div>
  );
};

export default Picture;
