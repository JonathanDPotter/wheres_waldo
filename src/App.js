import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Footer/Footer";
import Picture from "./components/Picture/Picture";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import WinScreen from "./components/WinScreen/WinScreen";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highScores: [],
      currentTime: 0,
    };
  }

  countDown() {
    const incrementCurrentTime = () => {
      this.setState({ currentTime: this.state.currentTime + 1 });
    };

    window.setInterval(() => incrementCurrentTime(), 1000);
  }

  choosePic(index) {
    console.log(index)
    this.countDown();
  }

  render() {
    return (
      <div className="App">
        <Header currentTime={this.state.currentTime} />
        <Router>
          <Switch>
            <Route exact path="/">
              <ChooseScreen choosePic={(index) => this.choosePic(index)} />
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
}

export default App;
