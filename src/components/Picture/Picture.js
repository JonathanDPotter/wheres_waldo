import "./Picture.scss";
import { pictures } from "../../pictureArrays.js";
import React, { Component } from "react";

class Picture extends Component {
  render() {
    const { index, foundCharacter } = this.props;
    const width = window.innerWidth;
    let picWidth = 1500;

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
          onClick={(event) => {
            const { target, clientX, clientY } = event;
            const div = target.getBoundingClientRect();
            const x = clientX - div.left;
            const y = clientY - div.top;
            console.log(x, y);
          }}
        />
        <map name="characters-map">
          <area
            shape="rect"
            coords="410, 305, 430, 335"
            alt="char1"
            name="char1"
            onClick={() => foundCharacter(0)}
          />
        </map>
      </div>
    );
  }
}

export default Picture;
