// import React from "react";
// import hoistNonReactStatics from "hoist-non-react-statics";

// const withDeviceAwareness = Component => {
//   class WithDeviceAwareness extends React.Component {
//     static displayName = `WithDeviceAwareness(${Component.name})`;

//     state = {
//       isMobile: false
//     };

//     componentDidMount() {
//       this.calculate();
//       window.addEventListener("resize", this.calculate);
//     }

//     componentWillUnmount() {
//       window.removeEventListener("resize", this.calculate);
//     }

//     calculate = () => {
//       if (window.innerWidth > 1200) {
//         this.setState({ isMobile: false });
//         return;
//       }

//       this.setState({ isMobile: true });
//     };

//     render() {
//       const { innerRef, ...props } = this.props;
//       return (
//         <Component {...props} ref={innerRef} isMobile={this.state.isMobile} />
//       );
//     }
//   }

//   // statics
//   // WithDeviceAwareness.getSomething = Component.getSomething;
//   return hoistNonReactStatics(WithDeviceAwareness, Component);
// };

// export default withDeviceAwareness;

import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import DeviceAwareness from "./DeviceAwareness";

export default function(Component) {
  class Connected extends React.Component {
    render() {
      return (
        <DeviceAwareness>
          {({ isMobile }) => <Component {...this.props} isMobile={isMobile} />}
        </DeviceAwareness>
      );
    }
  }
  return hoistNonReactStatics(Connected, Component);
}
