import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Picture from "./components/Picture/Picture";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import WinScreen from "./components/WinScreen/WinScreen";
import { pictures } from "./pictureArrays.js";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const initialState = {
  highScores: [],
  currentTime: 0,
  choice: null,
  found: [],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.timer = null;
  }
  incrementCurrentTime() {
    this.setState({ currentTime: this.state.currentTime + 1 });
  }

  countDown() {
    this.timer = setInterval(() => this.incrementCurrentTime(), 1000);
  }

  resetState() {
    this.setState(initialState);
  }

  choosePic(choice) {
    this.countDown();
    this.setState({ choice });
  }

  goHome() {
    this.stopTimer();
    this.resetState();
  }

  foundCharacter(foundOne) {
    this.setState({ found: [...this.state.found, foundOne] });
  }

  stopTimer() {
    console.log("clearing");
    clearInterval(this.timer);
  }

  render() {
    const { currentTime, choice, found } = this.state;
    return (
      <div className="App">
        <Header
          currentTime={currentTime}
          showTime={window.location.pathname === "/game"}
        />
        <Router>
          <Switch>
            <Route exact path="/">
              <ChooseScreen
                pictures={pictures}
                choosePic={(index) => {
                  this.choosePic(index);
                }}
              />
              {choice !== null ? <Redirect to="/game" /> : null}
            </Route>
            <Route path="/game">
              <Picture
                index={choice}
                foundCharacter={(foundOne) => this.foundCharacter(foundOne)}
              />
              <Footer
                goHome={() => this.goHome()}
                index={choice}
                found={found}
              />
              {choice === null ? <Redirect to="/" /> : null}
              {found.length === 4 ? <Redirect to="/winscreen" /> : null}
            </Route>
            <Route path="/winscreen">
              <WinScreen
                time={currentTime}
                stopTimer={() => this.stopTimer()}
                restart={() => this.goHome()}
              />
              {choice === null ? <Redirect to="/" /> : null}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
