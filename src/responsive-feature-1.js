import React from "react";

export default class ResponsiveFeature extends React.Component {
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
    const isMobile = this.state.isMobile;
    return (
      <div
        className="responsiveDiv"
        style={{ background: isMobile ? "yellow" : "lightgreen" }}
      >
        <h1>{isMobile ? "Mobile" : "Desktop"}</h1>
      </div>
    );
  }
}
