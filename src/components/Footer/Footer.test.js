import Footer from "./Footer.js";
import React from "react";
import ReactDOM from "react-dom";

test("footer renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});
