import "./Picture.scss";

import React, { Component } from "react";

class Picture extends Component {
  render() {
    const { index, pictures } = this.props;
    return (
      <div className="picture">
        <img src={pictures[index]} alt="cast of characters" />
      </div>
    );
  }
}

export default Picture;
