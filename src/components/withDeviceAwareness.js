import React from "react";

const withDeviceAwareness = Component =>
  class WithDeviceAwareness extends React.Component {
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
      return <Component isMobile={this.state.isMobile} />;
    }
  };

export default withDeviceAwareness;
