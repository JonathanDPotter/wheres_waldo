import WinScreen from "./WinScreen.js";
import React from "react";
import ReactDOM from "react-dom";

test("win screen renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WinScreen time={4}/>, div);
});
