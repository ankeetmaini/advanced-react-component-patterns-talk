import React from "react";

export default class BackTopComponent extends React.Component {
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
        {this.props.children}
        {this.state.showBackToTop && (
          <button className="backToTop" onClick={() => window.scrollTo(0, 0)}>
            Back To Top
          </button>
        )}
      </div>
    );
  }
}
