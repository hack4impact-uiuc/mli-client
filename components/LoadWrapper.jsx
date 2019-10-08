/**
 * @file A wrapper component for rendering data that needs to be loaded.
 */

import { Component } from "react";
/**
 * The possible statuses of this.props.loadFunction.
 * @member INITIAL
 * @member LOADING
 * @member RESOLVED
 * @member ERROR
 */

const LoadState = {
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  RESOLVED: "RESOLVED",
  ERROR: "ERROR"
};

/**
 * Wraps loading functionality.
 * Displays specified state after calling this.props.loadFunction, with options for custom loading and error states.
 */
export default class LoadWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: LoadState.INITIAL,
      error: null
    };
  }

  /**
   * Called immediately after the component is inserted into the DOM tree.
   * Calls this.props.loadFunction and manages this.state.loadState.
   */
  async componentDidMount() {
    this.setState({ loadState: LoadState.LOADING });
    try {
      await this.props.loadFunction();
      this.setState({ loadState: LoadState.RESOLVED });
    } catch (error) {
      this.setState({ loadState: LoadState.ERROR, error: error });
    }
  }

  /**
   * Renders the component.
   */
  render() {
    switch (this.state.loadState) {
      case LoadState.INITIAL: {
        return null;
      }
      case LoadState.LOADING: {
        return this.props.loadState || "Loading...";
      }
      case LoadState.RESOLVED: {
        return this.props.resolvedState;
      }
      case LoadState.ERROR: {
        return (
          this.props.errorState ||
          (this.state.error !== null && this.state.error.message) ||
          "An error was encountered."
        );
      }
      default: {
        return null;
      }
    }
  }
}
