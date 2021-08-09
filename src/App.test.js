import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

test("App renders without crashing", () => {
  const appDiv = document.createElement("div");
  ReactDOM.render(<App />, appDiv);
});
