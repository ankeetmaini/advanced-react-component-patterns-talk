import React from "react";

export default class Feature2 extends React.Component {
  render() {
    return Array.from({ length: 500 }).map((l, index) => (
      <div key={index}>double blah - {index}</div>
    ));
  }
}
