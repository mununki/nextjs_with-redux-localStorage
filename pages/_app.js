import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { toggleLogged } from "../store";

class MyApp extends App {
  async componentDidMount() {
    const { reduxStore } = this.props;
    const token = await localStorage.getItem("jwt");
    const isLoggedIn = token ? true : false;
    if (token) {
      reduxStore.dispatch(toggleLogged(isLoggedIn, token));
    }
    console.log("_app");
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
