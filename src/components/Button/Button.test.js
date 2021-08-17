import Button from "./Button.js";
import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

test("button renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Button
      text={"button"}
      onClick={() => {
        const div = document.createElement("div");
        div.textContent = "click";
      }}
      className=".btn"
    />,
    div
  );
});

test("clicking button renders 'click' on screen", () => {
  render(<Button text={"click"} onClick={() => {
        const div = document.createElement("div");
        div.textContent = "click";
  }}
    className=".btn" />)
  expect(screen.getByText("click")).toBeInTheDocument();
})
