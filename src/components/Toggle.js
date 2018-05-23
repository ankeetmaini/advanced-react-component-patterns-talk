import React from "react";

// const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

export default class Toggle extends React.Component {
  state = {
    toggle: false
  };

  onClick = () => this.setState({ toggle: !this.state.toggle });

  render() {
    return this.props.children({
      toggle: this.state.toggle,
      onClick: this.onClick
    });
  }
}

// clickProps = ({ onClick, ...rest }) => ({
//   onClick: compose(this.onClick, onClick),
//   ...rest
// });
