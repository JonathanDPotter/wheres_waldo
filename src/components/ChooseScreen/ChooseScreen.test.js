import ChooseScreen from "./ChooseScreen.js";
import React from "react";
import ReactDOM from "react-dom";

test("choose screen renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChooseScreen />, div);
});
