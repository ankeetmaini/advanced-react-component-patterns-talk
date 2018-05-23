import React from "react";

class DeviceAwareness extends React.Component {
  state = {
    isMobile: false
  };

  componentDidMount() {
    this.calculate();
    window.addEventListener("resize", this.calculate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculate);
  }

  calculate = () => {
    if (window.innerWidth > 1200) {
      this.setState({ isMobile: false });
      return;
    }

    this.setState({ isMobile: true });
  };

  render() {
    return this.props.children(this.state);
  }
}

export default DeviceAwareness;
