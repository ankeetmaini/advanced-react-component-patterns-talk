import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
  static childContextTypes = { theme: PropTypes.string, set: PropTypes.func };
  state = {
    theme: "red"
  };

  set = color => this.setState({ theme: color });

  getChildContext() {
    return { ...this.state, set: this.set };
  }

  render() {
    return this.props.children;
  }
}

export default class WowApp extends React.Component {
  render() {
    // main root component
    return (
      <div>
        <Provider>
          <Component1 />
        </Provider>
      </div>
    );
  }
}

class Component1 extends React.Component {
  render() {
    return (
      <div className="margin5" style={{ color: this.context.theme || "black" }}>
        Component1
        <Component2 />
      </div>
    );
  }
}

class Component2 extends React.Component {
  static contextTypes = {
    theme: PropTypes.string
  };

  render() {
    return (
      <div className="margin5" style={{ color: this.context.theme || "black" }}>
        Component2
        <Component3 />
        <Component4 />
      </div>
    );
  }
}

class Component3 extends React.Component {
  render() {
    return (
      <div className="margin5" style={{ color: this.context.theme || "black" }}>
        Component3
      </div>
    );
  }
}

class Component4 extends React.Component {
  static contextTypes = {
    theme: PropTypes.string,
    set: PropTypes.func
  };

  render() {
    return (
      <div className="margin5" style={{ color: this.context.theme || "black" }}>
        Component4
        <button onClick={this.context.set.bind(this, "green")}>
          change theme to green
        </button>
        <Component5 />
      </div>
    );
  }
}

class Component5 extends React.Component {
  render() {
    return (
      <div className="margin5" style={{ color: this.context.theme || "black" }}>
        Component5
      </div>
    );
  }
}
