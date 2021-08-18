import PopUp from "./PopUp.js"
import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

test("popUp renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PopUp />, div);
});

test("popUp displays the player's time in correct format", () => {
  render(<PopUp currentTime={80} />);
  expect(screen.getByText("Time: 01:20")).toBeInTheDocument();
})