import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

import Feature1 from "./feature-1";
import Feature2 from "./feature-2";
import ResponsiveFeature1 from "./responsive-feature-1";
import ResponsiveFeature2 from "./responsive-feature-2";
import HoCLikeABoss from "./hoc-like-a-boss";
import BoringToggle from "./boring-toggle";
import InterestingToggle from "./interesting-toggle";
import "./app.css";

class App extends React.Component {
  componentDidMount() {
    console.log("responsive ref", this.responsive);
    console.log("static: ", ResponsiveFeature1.getSomething());
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>advanced, blah, blah, blah</h1>
          <div>
            <Link to="/">home</Link>
            <Link to="/feature-1">feature-1</Link>
            <Link to="/feature-2">feature-2</Link>
            <Link to="/responsive-feature">responsive-feature</Link>
            <Link to="/hoc-like-a-boss">hoc-like-a-boss</Link>
            <Link to="/responsive-feature-new">responsive-feature-new</Link>
            <Link to="/boring-toggle">boring-toggle</Link>
            <Link to="/interesting-toggle">interesting-toggle</Link>
          </div>
          <Switch>
            <div style={{ margin: 20 }}>
              <Route path="/feature-1" component={Feature1} />
              <Route path="/feature-2" component={Feature2} />
              <Route
                path="/responsive-feature"
                render={() => (
                  <ResponsiveFeature1
                    message="hi"
                    innerRef={c => (this.responsive = c)}
                  />
                )}
              />
              <Route path="/hoc-like-a-boss" component={HoCLikeABoss} />
              <Route
                path="/responsive-feature-new"
                render={() => <ResponsiveFeature2 message="hi - again" />}
              />
              <Route path="/boring-toggle" component={BoringToggle} />
              <Route path="/interesting-toggle" component={InterestingToggle} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
