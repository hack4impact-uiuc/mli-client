/**
 * @file Configuring page initialization.
 */

import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initializeStore } from "../redux/store";
import { PageTransition } from "next-page-transitions";

/**
 * Injects Redux functionality into the app.
 */
export default withRedux(initializeStore)(
  /**
   * Wraps the default Next app.
   */
  class WrappedApp extends App {
    /**
     * Fetches initial props.
     * @param Component the component being rendered.
     * @param ctx the Next page context.
     * @returns the app's initial props.
     */
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    /**
     * Called on caught errors.
     * @param error the caught error.
     * @param errorInfo information about the caught Error.
     */
    componentDidCatch(error, errorInfo) {
      console.error("Page Error Boundary: ", error);
      super.componentDidCatch(error, errorInfo);
    }

    /**
     * Renders the app.
     */
    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </Provider>
      );
    }
  }
);
