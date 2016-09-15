import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './App.css';
import Helmet from 'react-helmet';
import grid from 'flexboxgrid/dist/flexboxgrid.min.css';

import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { signOutUser } from '../../modules/Auth/AuthActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {

    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div className={styles['site-background']}>
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
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signOutUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
