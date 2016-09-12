import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Material-ui setup
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100
  }
}, {
  avatar: {
    borderColor: null
  },
  userAgent: 'all'
});

import routes from './routes';

require('./styles/main.css');

export default function App(props) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={props.store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired
};
