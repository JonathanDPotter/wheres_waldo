import "./Picture.scss";
import onePiece from "../../pictures/one_piece.webp";

function Picture() {
  return (
    <div className="picture">
      <img src={onePiece} alt="cast of characters from One Piece manga" />
    </div>
  );
}

export default Picture;
