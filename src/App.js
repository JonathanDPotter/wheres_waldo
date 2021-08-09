import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Footer/Footer";
import Picture from "./components/Picture/Picture";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import WinScreen from "./components/WinScreen/WinScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <ChooseScreen />
          </Route>
          <Route path="/game">
            <Picture />
            <Sidebar />
          </Route>
          <Route path="/winscreen">
            <WinScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
