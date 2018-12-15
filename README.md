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

In terms of SSR, Nevertheless, the redux can not get a token as initialState from the localStorage which is the Client side API.

This example is to show how to get a token from localStorage in Client Side Rendering. To get a token from localStorage, `localStorage.getItems()` is called in `componentDidMount()` in `_app.js`

## Reference

The example of Next.js with-redux
(https://github.com/zeit/next.js/blob/canary/examples/with-redux/README.md)
