import "./Picture.scss";
import onePiece from "../../pictures/one_piece.webp";
import dragonBall from "../../pictures/dragon_ball.jpg";
import marvel from "../../pictures/marvel.png";
import simpsons from "../../pictures/simpsons.jpg";

import React, { Component } from "react";

class Picture extends Component {
  render() {
    const pictures = [onePiece, dragonBall, marvel, simpsons];
    const { index } = this.props;
    return (
      <div className="picture">
        <img src={pictures[index]} alt="cast of characters" />
      </div>
    );
  }
}

export default Picture;
