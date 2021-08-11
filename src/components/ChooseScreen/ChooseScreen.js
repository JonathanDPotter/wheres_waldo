import "./ChooseScreen.scss";
import onePiece from "../../pictures/one_piece.webp";
import dragonBall from "../../pictures/dragon_ball.jpg";
import marvel from "../../pictures/marvel.png";
import simpsons from "../../pictures/simpsons.jpg";

import React, { Component } from "react";

const pictures = [onePiece, dragonBall, marvel, simpsons];

class ChooseScreen extends Component {
  render() {
    const { choosePic } = this.props;
    return (
      <div className="choose-screen">
        <h1 className="choose-instructions">Choose a picture!</h1>
        <div className="picture-choices">
          {pictures.map((picture, index) => {
            return (
              <img
                key={index}
                src={picture}
                alt=""
                onClick={(event) => {
                  choosePic(index);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ChooseScreen;
