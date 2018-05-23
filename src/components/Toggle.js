import React from "react";

export default class Toggle extends React.Component {
  state = {
    toggle: false
  };

  toggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    this.props.children({
      toggle: this.state.toggle,
      switch: this.toggle
    });
  }
}
