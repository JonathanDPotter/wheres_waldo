import Sidebar from "./Sidebar.js";
import React from "react";
import ReactDOM from "react-dom";

test("sidebar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sidebar />, div);
});
