import React from "react";
import { initializeStore, toggleLogged } from "../store";

const isServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    console.log("server", new Date());
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    console.log("client, not window");
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  console.log("calls getOrCreateStore");
  return window[__NEXT_REDUX_STORE__];
}

export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }
      console.log("getInitialProps in with-redux-store");
      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
      if (!isServer) {
        const token = localStorage.getItem("jwt");
        const isLoggedIn = token ? true : false;
        this.reduxStore.dispatch(toggleLogged(isLoggedIn, token));
        console.log("dispatch toggledLogged with token");
      }
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
