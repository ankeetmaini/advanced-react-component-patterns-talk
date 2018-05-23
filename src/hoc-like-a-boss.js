import React from "react";

class NormalComponent extends React.Component {
  render() {
    const { message, fruit, butter } = this.props;
    return (
      <div>
        <h2>BOSS HoC!</h2>
        <div>message: {message}</div>
        <div>fruit: {fruit}</div>
        <div>butter: {butter}</div>
      </div>
    );
  }
}

export default withNothing(
  withThisAndThat(withThis(withThat(NormalComponent)))
);

function withThis(K) {
  return class WithThis extends React.Component {
    render() {
      return <K {...this.props} message="withThis" />;
    }
  };
}

function withThat(K) {
  return class WithThat extends React.Component {
    render() {
      return <K {...this.props} message="withThat" fruit="apple" />;
    }
  };
}

function withThisAndThat(K) {
  return class WithThisAndThat extends React.Component {
    render() {
      return <K {...this.props} message="withThisAndThat" butter="yellow" />;
    }
  };
}

function withNothing(K) {
  return class WithNothing extends React.Component {
    render() {
      return <K {...this.props} message="nothing" />;
    }
  };
}
