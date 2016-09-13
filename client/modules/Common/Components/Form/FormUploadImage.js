import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

const Dropzone = require('react-dropzone');

import forms from './../../../../styles/forms.css';

// avoiding bug 'unknown prop `onTouchTap`'
// of material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class FormUpload extends Component {

  render() {
    return (
      <div>
        <Dropzone
          onDrop={ this.props.uploadAction }
          className={ this.props.className }
          multiple={ false }
        >
          <div>{ this.props.label }</div>
        </Dropzone>
      </div>
    );
  }
}

FormUpload.propTypes = {
  input: React.PropTypes.object.isRequired
};

export default FormUpload;
