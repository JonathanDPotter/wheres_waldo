import Footer from "./Footer.js";
import HomeButton from "./HomeButton.js";
import React from "react";
import ReactDOM from "react-dom";

test("footer renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

test("Home button renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomeButton />, div);
});
