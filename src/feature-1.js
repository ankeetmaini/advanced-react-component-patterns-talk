import React from "react";

const longListOfDivs = Array.from({ length: 500 }).map((l, index) => (
  <div key={index}>blah - {index}</div>
));

export default class Feature1 extends React.Component {
  state = { showBackToTop: false };

  componentDidMount() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          this.setState({ showBackToTop: !entry.intersectionRatio });
        });
      },
      {
        root: null,
        threshold: 0
      }
    );
    this.observer.observe(document.getElementById("sentinel"));
  }

  componentWillUnmount() {
    this.observer &&
      this.observer.unobserve(document.getElementById("sentinel"));
  }

  render() {
    return (
      <div>
        <div id="sentinel" />
        {longListOfDivs}
        {this.state.showBackToTop && (
          <button className="backToTop" onClick={() => window.scrollTo(0, 0)}>
            Back To Top
          </button>
        )}
      </div>
    );
  }
}
