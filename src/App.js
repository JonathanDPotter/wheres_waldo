import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Picture from "./components/Picture/Picture";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import WinScreen from "./components/WinScreen/WinScreen";
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
  timer: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  incrementCurrentTime() {
    this.setState({ currentTime: this.state.currentTime + 1 });
  }

  countDown() {
    this.setState({ timer: setInterval(() => this.incrementCurrentTime(), 1000) });
  }

  resetState() {
    this.setState(initialState);
  }

  choosePic(choice) {
    this.countDown();
    this.setState({ choice });
  }

  goHome() {
    clearInterval(this.state.timer);
    this.resetState();
  }

  render() {
    const { currentTime, choice } = this.state;
    return (
      <div className="App">
        <Header currentTime={currentTime} choice={choice}/>
        <Router>
          <Switch>
            <Route exact path="/">
              <ChooseScreen
                choosePic={(index) => {
                  this.choosePic(index);
                }}
              />
              {choice !== null ? <Redirect to="/game" /> : null}
            </Route>
            <Route path="/game">
              <Picture index={choice} />
              <Footer goHome={() => this.goHome()} />
              {choice === null ? <Redirect to="/" /> : null}
            </Route>
            <Route path="/winscreen">
              <WinScreen />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
