import Footer from "./Footer.js";
import Button from "../Button/Button.js";
import React from "react";
import ReactDOM from "react-dom";

test("footer renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer characters={[1, 2, 3, 4]} index={0} found={[1] }/>, div);
});
