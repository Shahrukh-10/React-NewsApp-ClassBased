import React, { Component } from "react";
import Navbar from "./component/navbar";
import News from "./component/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" height={2} progress={this.state.progress} />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="general"
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="science"
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="business"
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="entertainment"
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="health"
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="science"
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/sport">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                key="sport"
                country="in"
                category="sports"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
