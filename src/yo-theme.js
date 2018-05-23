import React from "react";

export default class YoApp extends React.Component {
  render() {
    // main root component
    return (
      <div>
        <Component1 theme="red" />
      </div>
    );
  }
}

class Component1 extends React.Component {
  render() {
    return (
      <div className="margin5" style={{ color: this.props.theme || "black" }}>
        Component1
        <Component2 theme={this.props.theme} />
      </div>
    );
  }
}

class Component2 extends React.Component {
  render() {
    return (
      <div className="margin5" style={{ color: this.props.theme || "black" }}>
        Component2
        <Component3 theme={this.props.theme} />
        <Component4 />
      </div>
    );
  }
}

class Component3 extends React.Component {
  render() {
    return (
      <div className="margin5" style={{ color: this.props.theme || "black" }}>
        Component3
      </div>
    );
  }
}

class Component4 extends React.Component {
  render() {
    return (
      <div className="margin5" style={{ color: this.props.theme || "black" }}>
        Component4
        <Component5 />
      </div>
    );
  }
}

class Component5 extends React.Component {
  render() {
    return (
      <div className="margin5" style={{ color: this.props.theme || "black" }}>
        Component5
      </div>
    );
  }
}
