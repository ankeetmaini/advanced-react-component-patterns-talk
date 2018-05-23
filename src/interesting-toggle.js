import React from "react";

import BoringToggle from "./boring-toggle";
import Toggle from "./components/Toggle";

const log = () => console.log("Button pressed.");

const InterestingToggle = () => (
  <Toggle>
    {({ toggle, onClick }) => (
      <div onClick={onClick}>
        <BoringToggle toggle={toggle} />
      </div>
    )}
  </Toggle>
);

// const InterestingToggle = () => (
//   <Toggle>
//     {({ toggle, ...rest }) => (
//       <div {...rest} onClick={log}>
//         <BoringToggle toggle={toggle} />
//       </div>
//     )}
//   </Toggle>
// );

export default InterestingToggle;
