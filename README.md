# Next.js example of using auth token in localStorage with redux

## How to use

Git clone

```bash
git clone https://github.com/mattdamon108/nextjs_with-redux-localStorage.git
```

Install it and run:

```bash
cd netxjs_with-redux-localStorage

npm install
npm run dev
# or
yarn
yarn dev
```

## The idea behind the example

This example adds the part of using auth token in localStorage based on the example of next.js with-redux(https://github.com/zeit/next.js/blob/canary/examples/with-redux/README.md).

In case of using a token for authentication, for example JWT, generally the recommended way to save this token for client side is to localStorage.

In terms of SSR, Nevertheless, the redux can not get a token as initialState from the localStorage which is the Client side API. Some of issues in Next.js github suggests using cookie to send a value to SSR server instead of localStorage. In this case, redux can set the store with a token along with cookie as initialState during server side rendering.

But, this example is to show how to get a token from localStorage in Client Side Rendering. To get a token from localStorage, `localStorage.getItems()` is called in `with-redux-store.js` which is HOC to hydrate redux store to Child component.

```javascript
const isServer = typeof window === "undefined";

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
```

## Reference

The example of Next.js with-redux
(https://github.com/zeit/next.js/blob/canary/examples/with-redux/README.md)
