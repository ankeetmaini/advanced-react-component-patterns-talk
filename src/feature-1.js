import React from "react";

import SmartList from "./components/SmartList";

const longListOfDivs = Array.from({ length: 500 }).map((l, index) => (
  <div key={index}>blah - {index}</div>
));

export default class Feature1 extends React.Component {
  render() {
    return <SmartList>{longListOfDivs}</SmartList>;
  }
}
