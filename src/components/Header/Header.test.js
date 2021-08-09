import Header from "./Header.js";
import React from "react";
import ReactDOM from "react-dom";

test("header renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});
