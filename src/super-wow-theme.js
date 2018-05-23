import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

class Provider extends React.Component {
  state = {
    theme: "red"
  };
  set = color => this.setState({ theme: color });
  render() {
    const toGive = { theme: this.state.theme, set: this.set };
    return (
      <div>
        <ThemeContext.Provider value={toGive}>
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    );
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
      <div className="margin5">
        Component1
        <Component2 />
      </div>
    );
  }
}

class Component2 extends React.Component {
  render() {
    return (
      <div className="margin5">
        Component2
        <Component3 />
        <Component4 />
      </div>
    );
  }
}

class Component3 extends React.Component {
  render() {
    return <div className="margin5">Component3</div>;
  }
}

class Component4 extends React.Component {
  render() {
    return (
      <div className="margin5">
        <ThemeContext.Consumer>
          {({ theme, set }) => (
            <div style={{ color: theme }}>
              Component4
              <button onClick={set.bind(this, "green")}>
                change theme to green
              </button>
              <Component5 />
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

class Component5 extends React.Component {
  render() {
    return <div className="margin5">Component5</div>;
  }
}
