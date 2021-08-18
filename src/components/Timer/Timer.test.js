import ReactDOM from "react-dom";
import Timer from "./Timer.js";

test("Timer renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Timer />, div);
});
