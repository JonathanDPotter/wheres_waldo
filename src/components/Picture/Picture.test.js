import Picture from "./Picture.js";
import React from "react";
import ReactDOM from "react-dom";

test("picture renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Picture
      pictures={[1, 2, 3, 4]}
      index={1}
      foundCharacter={() => console.log("found")}
    />,
    div
  );
});
