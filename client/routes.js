import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

// Workaround for async react routes to work with react-hot-reloader till
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/containers/PostListPage/PostListPage');
  require('./modules/Post/containers/PostDetailPage/PostDetailPage');
  require('./modules/Post/containers/PostNewPage/PostNewPage');
  require('./modules/Auth/containers/SignInContainer/SignInContainer');
  require('./modules/Auth/containers/SignUpContainer/SignUpContainer');
  require('./modules/Auth/components/SignOut/SignOut');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/containers/PostListPage/PostListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/containers/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
    <Route
      path="/add-post"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/containers/PostNewPage/PostNewPage').default);
        });
      }}
    />
    <Route
      path="/signin"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/containers/SignInContainer/SignInContainer').default);
        });
      }}
    />
    <Route
      path="/signup"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/containers/SignUpContainer/SignUpContainer').default);
        });
      }}
    />
    <Route
      path="/signout"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/components/SignOut/SignOut').default);
        });
      }}
    />
  </Route>
);
