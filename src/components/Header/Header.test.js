import Header from "./Header.js";
import Timer from "../Timer/Timer.js";
import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';

test("header renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

test("Timer displays in the correct MM:SS format", () => {
  render(<Timer currentTime={2000} />)
  expect(screen.getByText('Time: 33:20')).toBeInTheDocument();
  render(<Timer currentTime={3} />)
  expect(screen.getByText('Time: 00:03')).toBeInTheDocument();
})
