function loggedIn() {
  if (typeof(Storage) !== 'undefined') {
    return !!(localStorage && localStorage.token);
  }

  return false;
}

export function authRoutes(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export function unAuthRoutes(nextState, replace) {
  if (loggedIn()) {
    replace('/')
  }
}
