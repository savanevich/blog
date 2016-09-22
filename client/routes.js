import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/containers/AppContainer/App';
import { unAuthRoutes, authRoutes } from './modules/Common/Helpers/protectedRoutes';

if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

// Workaround for async react routes to work with react-hot-reloader till
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/containers/PostListContainer/PostListContainer');
  require('./modules/Post/containers/PostDetailContainer/PostDetailContainer');
  require('./modules/Post/containers/PostNewContainer/PostNewContainer');
  require('./modules/Auth/containers/SignInContainer/SignInContainer');
  require('./modules/Auth/containers/SignUpContainer/SignUpContainer');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/containers/PostListContainer/PostListContainer').default);
        });
      }}
    />
    <Route
      path="/posts/:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/containers/PostDetailContainer/PostDetailContainer').default);
        });
      }}
    />
    <Route
      onEnter={authRoutes}
      path="/add-post"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/containers/PostNewContainer/PostNewContainer').default);
        });
      }}
    />
    <Route
      onEnter={unAuthRoutes}
      path="/signin"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/containers/SignInContainer/SignInContainer').default);
        });
      }}
    />
    <Route
      onEnter={unAuthRoutes}
      path="/signup"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/containers/SignUpContainer/SignUpContainer').default);
        });
      }}
    />
  </Route>
);
