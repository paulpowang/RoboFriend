const { Component } = require("react");

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }
  render() {
    if (this.state.error) {
      return "Ohhh, no, some error!!";
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
