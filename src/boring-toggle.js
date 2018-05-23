import React from "react";

const BoringToggle = ({ toggle }) => (
  <div className={`square ${toggle ? "true" : "false"}`}>
    {toggle ? "true" : "false"}
  </div>
);

export default BoringToggle;
