import React from "react";

import withDeviceAwareness from "./components/withDeviceAwareness";

class ResponsiveFeature extends React.Component {
  render() {
    const isMobile = this.props.isMobile;
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

export default withDeviceAwareness(ResponsiveFeature);
