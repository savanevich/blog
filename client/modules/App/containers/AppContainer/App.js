import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './App.css';
import Helmet from 'react-helmet';

import DevTools from './../../components/DevTools';
import Header from './../../components/Header/Header';

import { signOutUser, authError } from '../../../Auth/AuthActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isMounted: false};
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {

    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <Helmet
          title="Simple Blog"
          titleTemplate="%s - Blog App"
          meta={[
             { charset: 'utf-8' },
             {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge'
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
              }
            ]}
          />
        <Header
          signOutUser={this.props.signOutUser}
          authError={this.props.authError}
          authenticated={this.props.authenticated}
        />
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signOutUser, authError }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
