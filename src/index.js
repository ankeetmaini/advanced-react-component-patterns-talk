import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

import Feature1 from "./feature-1";
import Feature2 from "./feature-2";
import ResponsiveFeature1 from "./responsive-feature-1";
import "./app.css";

const App = () => (
  <BrowserRouter>
    <div>
      <h1>advanced, blah, blah, blah</h1>
      <div>
        <Link to="/">home</Link>
        <Link to="/feature-1">feature-1</Link>
        <Link to="/feature-2">feature-2</Link>
        <Link to="/responsive-feature">responsive-feature</Link>
      </div>
      <Switch>
        <div style={{ margin: 20 }}>
          <Route path="/feature-1" component={Feature1} />
          <Route path="/feature-2" component={Feature2} />
          <Route path="/responsive-feature" component={ResponsiveFeature1} />
        </div>
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
