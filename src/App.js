import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import firebase from "./firebase";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Members from "./pages/Members";
import NewPost from "./pages/NewPost";

class App extends Component {
  state = {
    firebaseInitialized: true,
  };

  render() {
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Members" component={Members} />
          <Route exact path="/NewPost" component={NewPost} />
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

export default App;
