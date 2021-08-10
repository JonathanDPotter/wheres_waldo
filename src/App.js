import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Footer/Footer";
import Picture from "./components/Picture/Picture";
import ChooseScreen from "./components/ChooseScreen/ChooseScreen";
import WinScreen from "./components/WinScreen/WinScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  highScores: [],
  currentTime: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "countdown":
      return { currentTime: state.currentTime - 1 };
    default:
      return state;
  }
}

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
