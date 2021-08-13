import ChooseScreen from "./ChooseScreen.js";
import React from "react";
import ReactDOM from "react-dom";

test("choose screen renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChooseScreen pictures={[1, 2, 3, 4]}/>, div);
});
