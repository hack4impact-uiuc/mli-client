/**
 * An example componenting interfacing with Redux.
 */

import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Fetches Redux state and assigns it to props.
 * @param state the Redux state.
 * @returns the fetched state props.
 */
const mapStateToProps = state => ({
  example: state.example
});

/**
 * A component to show off the current Redux state.
 */
export default connect(mapStateToProps)(
  class Example extends Component {
    /**
     * Renders the component.
     */
    render() {
      return <h1>The current Redux state is: {this.props.example}</h1>;
    }
  }
);
