import React from "react";
import DeviceAwareness from "./components/DeviceAwareness";

class ResponsiveFeature2 extends React.Component {
  static getSomething() {
    return "legendary";
  }

  render() {
    return (
      <DeviceAwareness>
        {({ isMobile }) => (
          <div
            className="responsiveDiv"
            style={{ background: isMobile ? "yellow" : "lightgreen" }}
          >
            <h1>{isMobile ? "Mobile" : "Desktop"}</h1>
            Message: {this.props.message}
          </div>
        )}
      </DeviceAwareness>
    );
  }
}

export default ResponsiveFeature2;
