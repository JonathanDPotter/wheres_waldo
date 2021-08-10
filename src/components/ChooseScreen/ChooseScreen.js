import "./ChooseScreen.scss";
import onePiece from "../../pictures/one_piece.webp";
import dragonBall from "../../pictures/dragon_ball.jpg";
import marvel from "../../pictures/marvel.png"

import React, { Component } from "react";

const pictures = [
  onePiece,
  dragonBall,
  marvel
]

class ChooseScreen extends Component {

  render() {
    return (
      <div className="choose-screen">
        {pictures.map((picture, index) => {
          return (
            <img
              key={index}
              src={picture}
              alt=""
              onClick={(event) => {
                this.props.choosePic(index);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default ChooseScreen;
