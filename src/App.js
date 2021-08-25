import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Picture from "./components/Picture/Picture";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import WinScreen from "./components/WinScreen/WinScreen";
import { pictures } from "./pictureArrays.js";
import React, { Component } from "react";
import db from "./firebase.js";

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
  inputValue: "",
  popClose: false,
  topScores: [],
  currentScoreId: null,
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
    clearInterval(this.timer);
  }
  handleSubmit(event) {
    event.preventDefault();
    const targetCollection = "topScores" + this.state.choice.toString();

    db.collection(targetCollection)
      .add({
        player: this.state.inputValue,
        time: this.state.currentTime,
      })
      .then((docRef) => {
        this.setState({ currentScoreId: docRef.id });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    db.collection(targetCollection)
      .get()
      .then((snapshot) => {
        const collection = snapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        });
        collection.forEach((doc) => {
          this.setState({
            topScores: [
              ...this.state.topScores,
              { id: doc.id, player: doc.data.player, time: doc.data.time },
            ],
          });
        });
      });

    this.setState({ popClose: true });
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const {
      currentTime,
      choice,
      found,
      inputValue,
      popClose,
      topScores,
      currentScoreId,
    } = this.state;
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
                handleSubmit={(event) => this.handleSubmit(event)}
                handleChange={(event) => this.handleChange(event)}
                inputValue={inputValue}
                popClose={popClose}
                topScores={topScores}
                currentScoreId={currentScoreId}
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
